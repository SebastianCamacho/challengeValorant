const { createApp } = Vue;

createApp({
    data() {
        return {
            map: [],
            mapBK: []
        };
    },

    created() {
        const urlParams = new URLSearchParams(window.location.search);
        const mapUuid = urlParams.get('value');
        console.log('UUID:', mapUuid); // Verificación de UUID
        if (mapUuid) {
            this.fetchMapDetails(mapUuid);
        } else {
            console.error('No UUID provided in the URL');
        }
    },

    methods: {
        fetchMapDetails(uuid) {
            fetch(`https://valorant-api.com/v1/maps/${uuid}`)
                .then(response => response.json())
                .then(data => {
                    this.map = data.data;
                    this.mapBK = data.data
                    console.log(this.map);
                })
                .catch(error => console.error('Error fetching map details:', error));

        }
    }
}).mount('#appMapDetails');