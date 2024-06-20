let url = "https://valorant-api.com/v1/maps"

const {createApp} = Vue

const app = createApp({

    data(){
        return{
            maps:[],
            mapsBK:[],
            searchText:""

        }
    },

    created(){
        this.bringData(url)
    },

    methods:{
        bringData(url){
            fetch(url).then(res=>res.json()).then(data => {
                this.maps = data.data
                this.mapsBK = data.data
                console.log(this.maps);
            })
        }
    },

    computed:{
        filterSearch() {
            let filterText = this.mapsBK.filter(map => map.displayName.toLowerCase().includes(searchText.toLowerCase()))
            this.maps = filterText
            console.log(this.maps);
        }
    }

}).mount("#app")
