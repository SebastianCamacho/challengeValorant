let urlBase='https://valorant-api.com/'
let urlAgents=urlBase+'v1/agents'
console.log(urlAgents);

const {createApp}=Vue;
const app= createApp({
    data(){
        return{
            agents:[],
            allAgents:[],
            textSearch:[],
            roles:[]
        }
    },
    created(){
        this.traerData(urlAgents).then(()=>{
            
        })
    }
})