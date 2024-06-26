let urlGameModes = window.location.href
console.log(urlGameModes)

//Url Games API
const urlGamesModes = "https://valorant-api.com/v1/gamemodes"
const urlGamesModesEquippables = "https://valorant-api.com/v1/gamemodes/equippables"
const urlThemes = "https://valorant-api.com/v1/themes"
const urlEvents = "https://valorant-api.com/v1/events"
const urlcompetitive = "https://valorant-api.com/v1/competitivetiers"

const { createApp } = Vue

const app = createApp({
  data() {
    return {
      gameModes: [],
      gameModesDetails: [
        {
          name: 'Standard (Unrated and Competitive)',
          description: 'Two teams of five compete in up to 25 rounds to plant or defuse the Spike, or eliminate the enemy team. The game\'s economy allows for purchasing weapons and abilities.'
        },
        {
          name: 'Deathmatch',
          description: 'Free-for-all mode where players aim to reach 40 eliminations or the highest number of eliminations in 9 minutes.'
        },
        {
          name: 'Escalation',
          description: 'Progression mode where teams advance through weapon and ability levels; the first team to complete all levels wins.'
        },
        {
          name: 'Team Deathmatch',
          description: 'Team-based mode where players compete to reach the highest number of eliminations.'
        },
        {
          name: 'Onboarding',
          description: 'Designed for new players to learn the basic mechanics of the game.'
        },
        {
          name: 'Replication',
          description: 'All players on the team play as the same agent in quick rounds.'
        },
        {
          name: 'Spike Rush',
          description: 'Fast-paced mode; the first team to win 4 out of 7 rounds wins.'
        },
        {
          name: 'The Range',
          description: 'Individual practice environment where players can improve their skills, aim, and strategies.'
        },
        {
          name: 'Snowball Fight',
          description: 'Fun and festive mode where players use snowballs to eliminate enemies.'
        },
        {
          name: 'Swiftplay',
          description: 'Accelerated version of Standard mode where the first team to win 5 out of 9 rounds takes the victory.'
        },
      ],
      gameModesEquipables: [],
      themes: [],
      events: []
    }
  },
  created() {
    this.pullDataGamesModes(urlGamesModes)
    this.pullDataGamesModesEvents(urlcompetitive)
    this.pullDataGameModesThemes(urlThemes)
  },
  methods: {
    pullDataGamesModes(url) {
      fetch(url).then(Response => Response.json()).then(data => {
        this.gameModes = data.data
      })
    },
    pullDataGamesModesEvents(url) {
      fetch(url).then(Response => Response.json()).then(data => {
        this.events = data.data
        console.log(this.events);
      })
    },
    pullDataGameModesThemes(url){
      fetch(url).then(Response=>Response.json()).then(data => {
        console.log(data);
        this.themes = data.data
        this.themes = this.themes.filter(theme => theme.displayIcon)
      })
    }
  },
  computed: {

  }

}).mount('#gamesModesHtml')