let url = "https://valorant-api.com/v1/maps"

const {createApp} = Vue

const app = createApp({

    data(){
        return{
            maps:[],
            mapsBK:[],
            searchText:"",
            favoriteMaps:[]
        }
    },

    created(){
        this.bringData(url)
        const localFavoriteMaps = localStorage.getItem('favoriteMaps')
        if (localFavoriteMaps){
            this.favoriteMaps = JSON.parse(localFavoriteMaps)
            this.cleanFavorites()
        }
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
            const index = this.favoriteMaps.findIndex(fav => fav.uuid === map.uuid);
            if (index !== -1) {
                this.favoriteMaps.splice(index, 1);
                console.log(this.favoriteMaps);
                this.updateLocalStore()
            }else {
                this.favoriteMaps.push(map);
                console.log(this.favoriteMaps);
                this.updateLocalStore()
            }
        },

        updateLocalStore(){
            localStorage.setItem('favoriteMaps', JSON.stringify(this.favoriteMaps))
        },

        cleanFavorites(){
            this.favoriteMaps = this.favoriteMaps.filter(favorite => favorite !== null)
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
