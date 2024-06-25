let url = "https://valorant-api.com/v1/weapons"

const {createApp} = Vue

const app2 = createApp({

    data(){
        return{
            weapons:[], 
            weaponsBK:[],
            fast:{},
            bestWall:{},
            bestFireRate:{},
            bestHeadDamage:{},
            bestBodyDamage:{},
            bestRange:{},
            lowerCost:{},
            higherCost:{}
        }
    },

    created(){
        try {
            this.bringData(url).then(() => {
                this.fastReload();
                this.bestWallPenetration();
                this.fireRate();
                this.headDamage();
                this.bodyDamage();
                this.range();
                this.calculateCosts();
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
            console.log(this.weaponsBK);
            let fastest = this.weaponsBK
            fastest = fastest.sort((a, b) => a.weaponStats.reloadTimeSeconds - b.weaponStats.reloadTimeSeconds)
            this.fast = fastest.slice(0)
            console.log(fastest);
            console.log(this.fast);
            return this.fast
        },

        bestWallPenetration(){
            let bestWallArray = this.weaponsBK.sort((a, b) => b.weaponStats.wallPenetration - a.weaponStats.wallPenetration)
            console.log(this.weaponsBK);
            this.bestWall = bestWallArray.slice(0)
            console.log(bestWallArray);
            console.log(this.bestWall);
            return this.bestWall
        },

        fireRate(){
            let fireRateArray = this.weaponsBK.sort((a, b) => b.weaponStats.fireRate - a.weaponStats.fireRate)
            this.bestFireRate = fireRateArray.slice(0)
            console.log(fireRateArray);
            console.log(this.bestFireRate);
            return this.bestFireRate
        },

        headDamage(){
            let headDamageArray = this.weaponsBK.sort((a, b) => b.weaponStats.damageRanges.headDamage - a.weaponStats.damageRanges.headDamage)
            this.bestHeadDamage = headDamageArray.slice(0)
            console.log(headDamageArray);
            console.log(this.bestHeadDamage);
            return this.bestHeadDamage
        },

        bodyDamage(){
            let bodyDamageArray = this.weaponsBK.sort((a, b) => b.weaponStats.damageRanges.bodyDamage - a.weaponStats.damageRanges.bodyDamage)
            this.bestBodyDamage = bodyDamageArray.slice(0)
            console.log(bodyDamageArray);
            console.log(this.bestBodyDamage);
            return this.bestBodyDamage
        },

        range(){
            let rangeArray = this.weaponsBK.sort((a, b) => b.weaponStats.damageRanges.rangeStartMeters - a.weaponStats.damageRanges.rangeStartMeters)
            this.bestRange = rangeArray.slice(0)
            console.log(rangeArray);
            console.log(this.bestRange);
            return this.bestRange
        },

        calculateCosts() {
            let costArrayAsc = this.weaponsBK.slice().sort((a, b) => a.weaponStats.shopData.cost - b.weaponStats.shopData.cost);
            this.lowerCost = costArrayAsc;
            console.log(this.lowerCost);
            
            let costArrayDesc = this.weaponsBK.slice().sort((a, b) => b.weaponStats.shopData.cost - a.weaponStats.shopData.cost);
            this.higherCost = costArrayDesc;
            console.log(this.higherCost);
        }
    },

    computed:{
        
    }

}).mount("#app2")