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

        console.log('UUID:', weaponUuid); // Verificación de UUID
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
                    this.weapon.skins = this.weapon.skins.filter(skin => skin !== null);
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