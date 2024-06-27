let urlApi = "https://valorant-api.com/v1/weapons"
const { createApp } = Vue
const app = createApp({
    data() {
        return {
            weapons: [],
            weaponsBk: [],
            categories: [],
            searchText: "",
            selectedCategories: []
        }
    },
    created() {
        this.traerData(urlApi)
    },
    methods: {
        traerData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.weapons = data.data
                    this.weaponsBk = data.data
                    this.categories = Array.from(new Set(this.weapons.map((weapon) => this.extractCategoryName(weapon.category))))
                    console.log(this.weaponsBk);
                })
        },
        extractCategoryName(category) {
            return category.split('::')[1] || category;
        }
    },
    computed: {
        megaFilter() {
            let textFilter = this.weaponsBk.filter(weapon => weapon.displayName.toLowerCase().includes(this.searchText.toLowerCase()))
            if (this.selectedCategories.length > 0) {
                this.weapons = textFilter.filter(weapon => this.selectedCategories.includes(this.extractCategoryName(weapon.category)))
            } else {
                this.weapons = textFilter
            }
        }
    }

}).mount('#appWeapons')

