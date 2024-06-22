let url = "https://valorant-api.com/v1/maps"

const {createApp} = Vue

const app = createApp({

    data(){
        return{
            maps:[],
            mapsBK:[],
            searchText:"",
            favorites:[]
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
        },

        addToFavorites(map) {
            const index = this.favorites.findIndex(fav => fav.uuid === map.uuid);
            if (index !== -1) {
                this.favorites.splice(index, 1);
                console.log(this.favorites);
            }else {
                this.favorites.push(map);
                console.log(this.favorites);
            }
        }
    },

    computed:{
        filterSearch() {
            let filterText = this.mapsBK.filter(map => map.displayName.toLowerCase().includes(this.searchText.toLowerCase()))
            this.maps = filterText
            console.log(this.maps);
        }
    }

}).mount("#app")
