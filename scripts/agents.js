let urlBase='https://valorant-api.com/'
let urlWeapons=urlBase+'v1/agents'
console.log(urlWeapons);

const {createApp}=Vue;
const app= createApp({
    data(){
        return{
            agents:[],
            allAgents:[],
            textSearch:"",
            roles:[],
            roleSelect:[],
            favorites:[],
            agentDetail:{abilities: []},
            selectAbilityIndex:null,
            imageLoaded: false,
            imageClicked: false
        }
    },
    created(){
        this.traerData(urlWeapons).then(()=>{
            this.checkForAgentDetail()
            console.log('Agents after fetch:', this.agents);
        })
        const localFavorites= localStorage.getItem('favorites')
        if (localFavorites){
            this.favorites=JSON.parse(localFavorites)
            this.cleanFavorites()
        }
    },
    updated() {
        // Asegurarse de que el DOM está actualizado
        this.$nextTick(() => {
            const imgElement = document.getElementById('image');
            if (imgElement) {
                imgElement.onload = () => {
                    this.imageLoaded = true;
                    imgElement.classList.add('loaded');
                };
                imgElement.onclick = () => {
                    this.imageClicked = !this.imageClicked;
                    imgElement.classList.toggle('clicked');
                };
            }
        });
    },
    methods:{
        traerData(url){
            return new Promise((resolve, reject)=>{
                fetch(url).then(response=> response.json()).then(data=>{

                    this.agents=data.data.filter(agent=>agent.isPlayableCharacter && agent.background && agent.fullPortrait);
                    this.allAgents=this.agents;
                    console.log('Filtered agents:', this.agents);
                    // Filtra los agentes que tienen roles válidos y luego extrae los displayName únicos
                    const rolesWithDisplayName = this.agents
                    .filter(agent => agent.role && agent.role.displayName) // Filtrar agentes con roles válidos
                    .map(agent => agent.role.displayName); // Obtener los displayName
    
                    this.roles = Array.from(new Set(rolesWithDisplayName)) // Eliminar duplicados
                    .map(displayName => ({ displayName })); // Crear objetos con displayName
    
                    console.log(this.roles[0].displayName);
                    resolve()
    
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                reject(error);  // Rechaza la promesa en caso de error

            })
        })
        
    },
    addFavorite(agent){
        if(agent && !this.favorites.some(fav=> fav.displayName===agent.displayName)){
            this.favorites.push(agent)
            this.updateLocalStore()
        }
    },
    deleteFavorite(agent){
        const index= this.favorites.findIndex(fav=> fav.displayName===agent.displayName)
        if (index!== -1){
            this.favorites.splice(index,1)
            this.updateLocalStore()
        }
        
       
    },
    updateLocalStore(){
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    
    cleanFavorites(){
        this.favorites= this.favorites.filter(favorite=> favorite!== null)
    },
    toggleFavorite(agent){
        if(this.isFavorite(agent)){
            this.deleteFavorite(agent)
        }else {
            this.addFavorite(agent)
        }
    },
    isFavorite(agent){
        return this.favorites.some(fav=> fav.displayName===agent.displayName)
    },
    goToDetails(agent){
        window.location.href=`/pages/detailsAgents.html?value=${agent.uuid}`
    },
    checkForAgentDetail(){
        const urlParams=new URLSearchParams(window.location.search)
        const agent=urlParams.get('value')
        console.log('Agent UUID from URL', agent);
        if (agent){
            this.agentDetail=this.agents.find(event=> event.uuid===agent)
            console.log('Agent found:', this.agentDetail);
        }
    },
    toggleCard(index){
        if(this.selectAbilityIndex===index){
            this.selectAbilityIndex=null;
        } else {
            this.selectAbilityIndex=index;
        }
    }
},


computed:{
    superFilter(){
        let filterText = this.allAgents.filter(agent => agent.displayName.toLowerCase().includes(this.textSearch.toLowerCase()))
        console.log(filterText);

        if (this.roleSelect.length > 0 ) {
            this.agents = filterText.filter(agent  => agent.role && this.roleSelect.includes(agent.role.displayName) )
        } else {
            this.agents= filterText
        }           
    }/* ,
    selectedAbility(){
        return this.agentDetail && this.agentDetail.abilities.length > 0 ? this.agentDetail.abilities[this.selectAbilityIndex] : {};
    } */
},
watch: {
    agentDetail: function (newVal) {
      if (newVal && newVal.displayName) {
        document.title = newVal.displayName;
      } else {
        document.title = 'Agents';
      }
    }
  },
  mounted() {
    if (this.agentDetail && this.agentDetail.displayName) {
      document.title = this.agentDetail.displayName;
    }else{
        document.title='Agents'
    }
  }



}).mount('#app')