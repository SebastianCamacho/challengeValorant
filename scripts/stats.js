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
            higherCost:[]

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
                console.log(this.weaponsBK);
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
            console.log(this.fastestArray);
            this.topFast = this.fastestArray.slice(0, 3)
            console.log(this.topFast);
            return this.topFast
        },

        bestEquipTime(){
            this.bestEquipArray = this.weaponsBK.sort((a, b) => {
                if (a.weaponStats && b.weaponStats && typeof a.weaponStats.equipTimeSeconds === 'number' && typeof b.weaponStats.equipTimeSeconds === 'number') {
                    return b.weaponStats.equipTimeSeconds - a.weaponStats.equipTimeSeconds;
                } else {
                    return 0
                }
            });
            this.topEquip = this.bestEquipArray.slice(0, 3)
            console.log(this.bestEquipArray);
            console.log(this.topEquip);
            return this.topEquip
        },

        fireRate(){
            this.fireRateArray = this.weaponsBK.sort((a, b) => {
                if (a.weaponStats && b.weaponStats && typeof a.weaponStats.fireRate === 'number' && typeof b.weaponStats.fireRate === 'number') {
                    return a.weaponStats.fireRate - b.weaponStats.fireRate;
                } else {
                    return 0
                }
            });
            this.topFireRate = this.fireRateArray.slice(0, 3)
            console.log(this.fireRateArray);
            console.log(this.topFireRate);
            return this.topFireRate
        },

        headDamage(){
            this.headDamageArray = this.weaponsBK.sort((a, b) => {
                if (a.weaponStats && b.weaponStats && typeof a.weaponStats.damageRanges.headDamage === 'number' && typeof b.weaponStats.damageRanges.headDamage === 'number') {
                    return b.weaponStats.damageRanges.headDamage - a.weaponStats.damageRanges.headDamage;
                } else {
                    return 0
                }
            });
            this.topHeadDamage = this.headDamageArray.slice(0, 3)
            console.log(this.headDamageArray);
            console.log(this.topHeadDamage);
            return this.topHeadDamage
        },

        bodyDamage(){
            this.bodyDamageArray = this.weaponsBK.sort((a, b) => {
                if (a.weaponStats && b.weaponStats && typeof a.weaponStats.damageRanges.bodyDamage === 'number' && typeof b.weaponStats.damageRanges.bodyDamage === 'number') {
                    return a.weaponStats.damageRanges.bodyDamage - a.weaponStats.damageRanges.bodyDamage;
                } else {
                    return 0
                }
            });
            this.topBodyDamage = this.bodyDamageArray.slice(0,3)
            console.log(this.bodyDamageArray);
            console.log(this.topBodyDamage);
            return this.topBodyDamage
        },

        range(){
            this.rangeArray = this.weaponsBK.sort((a, b) => {
                if (a.weaponStats && b.weaponStats && typeof a.weaponStats.damageRanges.rangeStartMeters === 'number' && typeof b.weaponStats.damageRanges.rangeStartMeters === 'number') {
                    return b.weaponStats.damageRanges.rangeStartMeters - a.weaponStats.damageRanges.rangeStartMeters;
                } else {
                    return 0
                }
            });
            this.topRange = this.rangeArray.slice(0, 3)
            console.log(this.rangeArray);
            console.log(this.topRange);
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
            console.log(this.lowerCost)
            console.log(this.topLowerCost)
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
            this.topHigherCost = this.higherCost.slice(0, 3)
            console.log(this.higherCost)
            console.log(this.topHigherCost)
            return this.topHigherCost
        }
    },

    computed:{
        
    }

}).mount("#app2")