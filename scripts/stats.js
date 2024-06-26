let url = "https://valorant-api.com/v1/weapons"

const {createApp} = Vue

const app2 = createApp({

    data(){
        return{
            weapons:[], 
            weaponsBK:[],
            topFast:[],
            topEquip:[],
            topFireRate:[],
            topHeadDamage:[],
            topBodyDamage:[],
            topRange:[],
            topLowerCost:[],
            topHigherCost:[],
            fastestArray:[],
            bestEquipArray:[],
            bestFireRate:[],
            bestHeadDamage:[],
            bestBodyDamage:[],
            bestRange:[],
            lowerCost:[],
            higherCost:[],
            Tops:[]

        }
    },

    created(){
        try {
            this.bringData(url).then(() => {
                this.fastReload();
                this.bestEquipTime();
                this.fireRate();
                this.headDamage();
                this.bodyDamage();
                this.range();
                this.calculateLowerCost();
                this.calculateHigherCost();
                console.log(this.Tops);
                this.extrarRangos();
            });
        } catch (error) {
            console.error('Error in created hook:', error);
        }
    },

    methods:{
        async bringData(url) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                this.weapons = data.data;
                this.weaponsBK = data.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },

        fastReload(){
            
            this.fastestArray = this.weaponsBK.sort((a, b) => {
                if (a.weaponStats && b.weaponStats && typeof a.weaponStats.reloadTimeSeconds === 'number' && typeof b.weaponStats.reloadTimeSeconds === 'number') {
                    return a.weaponStats.reloadTimeSeconds - b.weaponStats.reloadTimeSeconds;
                } else {
                    return 0
                }
            });
            this.topFast = this.fastestArray.slice(0, 3)
            let objetoTop3={};
            objetoTop3.name="Most Fast Reload"
            objetoTop3.top=[...this.topFast]
            this.Tops.push(objetoTop3);
            return this.topFast
        },

        bestEquipTime(){
            this.bestEquipArray = this.weaponsBK.sort((a, b) => {
                if (a.weaponStats && b.weaponStats && typeof a.weaponStats.equipTimeSeconds === 'number' && typeof b.weaponStats.equipTimeSeconds === 'number') {
                    return a.weaponStats.equipTimeSeconds - b.weaponStats.equipTimeSeconds;
                } else {
                    return 0
                }
            });
            this.topEquip = this.bestEquipArray.slice(0, 3)
            let objetoTop3={};
            objetoTop3.name="Faster equipment time"
            objetoTop3.top=[...this.topEquip]
            this.Tops.push(objetoTop3);
            return this.topEquip
        },

        fireRate(){
            this.fireRateArray = this.weaponsBK.sort((a, b) => {
                if (a.weaponStats && b.weaponStats && typeof a.weaponStats.fireRate === 'number' && typeof b.weaponStats.fireRate === 'number') {
                    return b.weaponStats.fireRate - a.weaponStats.fireRate;
                } else {
                    return 0
                }
            });
            this.topFireRate = this.fireRateArray.slice(0, 3)
            let objetoTop3={};
            objetoTop3.name="Best Fire Rate"
            objetoTop3.top=[...this.topFireRate]
            this.Tops.push(objetoTop3);
            return this.topFireRate
        },
        // no usada
        headDamage(){
            this.headDamageArray = this.weaponsBK.sort((a, b) => {
                if (a.weaponStats && b.weaponStats && typeof a.weaponStats.damageRanges.headDamage === 'number' && typeof b.weaponStats.damageRanges.headDamage === 'number') {
                    return b.weaponStats.damageRanges.headDamage - a.weaponStats.damageRanges.headDamage;
                } else {
                    return 0
                }
            });
            this.topHeadDamage = this.headDamageArray.slice(0, 3)
            return this.topHeadDamage
        },
        // no usada
        bodyDamage(){
            this.bodyDamageArray = this.weaponsBK.sort((a, b) => {
                if (a.weaponStats && b.weaponStats && typeof a.weaponStats.damageRanges.bodyDamage === 'number' && typeof b.weaponStats.damageRanges.bodyDamage === 'number') {
                    return a.weaponStats.damageRanges.bodyDamage - a.weaponStats.damageRanges.bodyDamage;
                } else {
                    return 0
                }
            });
            this.topBodyDamage = this.bodyDamageArray.slice(0,3)
            let objetoTop3={};
            return this.topBodyDamage
        },
        // no usada
        range(){
            this.rangeArray = this.weaponsBK.sort((a, b) => {
                if (a.weaponStats && b.weaponStats && typeof a.weaponStats.damageRanges.rangeStartMeters === 'number' && typeof b.weaponStats.damageRanges.rangeStartMeters === 'number') {
                    return b.weaponStats.damageRanges.rangeStartMeters - a.weaponStats.damageRanges.rangeStartMeters;
                } else {
                    return 0
                }
            });
            this.topRange = this.rangeArray.slice(0, 3)
            return this.topRange
        },
        calculateLowerCost() {
            this.lowerCost = this.weaponsBK.slice().sort((a, b) => {
                if (a.weaponStats && b.weaponStats && typeof a.shopData.cost === 'number' && typeof b.shopData.cost === 'number') {
                    return a.shopData.cost - b.shopData.cost;
                } else {
                    return 0
                }
            });
            this.topLowerCost = this.lowerCost.slice(0, 3)
            let objetoTop3={};
            objetoTop3.name="Most Lower Cost"
            objetoTop3.top=[...this.topLowerCost]
            this.Tops.push(objetoTop3);
            return this.topLowerCost
        },
        calculateHigherCost() {
            this.higherCost = this.weaponsBK.slice().sort((a, b) => {
                if (a.weaponStats && b.weaponStats && typeof a.shopData.cost === 'number' && typeof b.shopData.cost === 'number') {
                    return b.shopData.cost - a.shopData.cost;
                } else {
                    return 0
                }
            });
            this.topHigherCost = this.higherCost.slice(0, 3);
            let objetoTop3={};
            objetoTop3.name="Most Hegher Cost"
            objetoTop3.top=[...this.topHigherCost]
            this.Tops.push(objetoTop3);
            return this.topHigherCost
        },

        extrarRangos(){
          let weaponsAux = [...this.weapons] 
          let rangos=[];
          weaponsAux.forEach(arma => {
            if (arma.weaponStats && arma.weaponStats.damageRanges) {
              arma.weaponStats.damageRanges.forEach(element => {
                element.id = arma.uuid
                element.nameArma = arma.displayName
                rangos.push(element)
              });
              
            }
          }); 
          rangos.sort( (a,b) =>{
            return a.uuid - b.uuid
          } )
          console.log(weaponsAux[0]);
          console.log(rangos);
        }
    },

    computed:{
        
    }

}).mount("#app2")