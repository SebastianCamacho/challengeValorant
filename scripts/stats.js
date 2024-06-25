let urlBase = "https://valorant-api.com/";
let urlWeapons = urlBase + "v1/weapons";
console.log("urlWeapons");

const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      Weapons: [],
      Top3Xcategory:[],
      categories:[],
      filteredWeapons:[]

    };
  },
  created() {
    this.traerData(urlWeapons).then(() => {
      console.log("Weapons:", this.Weapons);
      this.categories = Array.from(new Set(this.Weapons.map((weapon) => weapon.category)))
      console.log(this.categories);
      this.filtrarXcategoria();
      console.log();

    });
    
  },
  methods: {
    traerData(url) {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.Weapons = data.data;
            this.Weapons.forEach(w => {
                w.category=this.normalizarCategoria(w.category)
            });

            resolve();
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            reject(error); // Rechaza la promesa en caso de error
          });
      });
    },
    normalizarCategoria(str){
        const afterColon = str.substring(str.indexOf('::') + 2);
        return afterColon; // Salida: Sidearm
    },
    filtrarXcategoria(){
      for (const category of this.categories) {
        let objetoCategoria={};
        // Filtra los objetos de la categoría actual
        const filteredByCategory = this.Weapons.filter(weapon => weapon.category === category);
        // Agrega los objetos filtrados al array final
        objetoCategoria.name=[category]
        objetoCategoria.data=[...filteredByCategory]
        console.log(objetoCategoria);
        this.filteredWeapons.push(objetoCategoria);
      }
    }
    

  },

  computed: {},
}).mount("#app");
