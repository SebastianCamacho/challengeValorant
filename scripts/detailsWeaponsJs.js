const { createApp } = Vue;

createApp({
    data() {
        return {
            weapon: null
        };
    },
    created() {
        const urlParams = new URLSearchParams(window.location.search);
        const weaponUuid = urlParams.get('uuid');
        console.log('UUID:', weaponUuid); // Verificación de UUID
        if (weaponUuid) {
            this.fetchWeaponDetails(weaponUuid);
        } else {
            console.error('No UUID provided in the URL');
        }
    },
    methods: {
        fetchWeaponDetails(uuid) {
            fetch(`https://valorant-api.com/v1/weapons/${uuid}`)
                .then(response => response.json())
                .then(data => {
                    this.weapon = data.data;
                })
                .catch(error => console.error('Error fetching weapon details:', error));
        },
        extractCategoryName(category) {
            return category.split('::')[1] || category;
        }
    }
}).mount('#appWeaponDetails');