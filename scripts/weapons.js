let urlApi = "https://valorant-api.com/v1/weapons"
const {createApp} = Vue
const app = createApp({
    data(){
        return{
            armas:[],
            categorias:[],
            textoBuscar:"",
            categoriasSeleccionadas:[]
        }
    },
    created(){
        this.traerData(urlApi)
    },
    methods:{
        traerData(url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
            this.armas = data.data              
            console.log(this.armas);
            
            })
        }
    },
    computed:{

    }

}).mount('#appWeapons')

    