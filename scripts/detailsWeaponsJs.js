const { createApp } = Vue;
const urlDetails = "https://valorant-api.com/v1/weapons"
const urlParams = new URLSearchParams(window.location.search);
const weaponUuid = urlParams.get('uuid');
createApp({
    data() {
        return {
            weapon: [],
            weaponBK: [],
            weaponDtls:[],
            tetero:[]
        };
    },
    created() {

        console.log('UUID:', weaponUuid); 
        if (weaponUuid) {
            this.fetchWeaponDetails(weaponUuid);
        } else {
            console.error('No UUID provided in the URL');
        }
    },
    methods: {
        fetchWeaponDetails(uuid) {
            fetch(`https://valorant-api.com/v1/weapons/${uuid}`)
                .then(response => response.json())
                .then(data => {
                    this.weapon = data.data;
                    // Filtrar skins que no sean null

                    // this.weapon.skins = this.weapon.skins.filter(skin => skin.displayName !== "Standard Bucky" || skin.displayName !== "Random Favorite Skin");
                    this.weapon.skins = this.weapon.skins.filter(skin => skin.displayName !== "Random Favorite Skin");
                    this.weapon.skins = this.weapon.skins.filter(skin => skin.displayName !== "Standard "+ 
                    this.weapon.displayName)
                    this.weapon.skins = this.weapon.skins.filter(skin => skin.displayIcon !== null);
                    console.log(this.weapon.displayName);
                    console.log(this.weapon.skins);
                    console.log(this.tetero);
                })
                .catch(error => {
                    console.error('Error fetching weapon details:', error);
                });
        
            fetch(urlDetails)
                .then(response => response.json())
                .then(data => {
                    this.weaponDtls = data.data;
                })
                .catch(error => {
                    console.error('Error fetching weapon details:', error);
                });
        },
        extractCategoryName(category) {
            if (!category) {
                console.error('condition no founded :p');
                return ''; 
            }
            const parts = category.split('::');
            return parts.length > 1 ? parts[1] : category;
        },
        

    }
}).mount('#appWeaponDetails');