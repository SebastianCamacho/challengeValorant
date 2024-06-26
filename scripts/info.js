let urlInfo = window.location.href
console.log(urlInfo)

//Url info API

const urlAgents = 'https://valorant-api.com/v1/agents'

const { createApp } = Vue

const app = createApp({
  data() {
    return {
      valorant: [
        {
          section: 'Overview',
          content: 'Valorant is a free-to-play tactical first-person shooter (FPS) developed and published by Riot Games. Officially released on June 2, 2020, the game combines precise gunplay with unique agent abilities, offering a dynamic and competitive experience.',
          image: 'https://prod.assets.earlygamecdn.com/images/Valorant-Anti-Cheat_2021-10-19-135632_dqni.jpg?transform=banner2x_webp'
        },
        {
          section: 'Game Overview',
          content: 'In Valorant, players assume the role of "agents," each with unique abilities and divided into classes like Duelists, Initiators, Sentinels, and Controllers. The main game modes include Standard (Unrated and Competitive), Deathmatch, Spike Rush, Escalation, Replication, Team Deathmatch, Snowball Fight, Swiftplay, The Range, and Onboarding, each offering different experiences and challenges.',
          image: 'https://dotesports.com/wp-content/uploads/2022/10/25202848/Valorant-1-3.png'
        },
        {
          section: 'Agents',
          content: 'Agents in Valorant are characters with unique abilities that influence gameplay. The main classes are Duelists (e.g., Jett, Phoenix), Initiators (e.g., Sova, Breach), Sentinels (e.g., Sage, Cypher), and Controllers (e.g., Omen, Brimstone).',
          image: ''
        },
        {
          section: 'Weapons',
          content: 'Valorant features a variety of weapons that players can purchase at the start of each round using credits earned for their actions, including Pistols (e.g., Classic, Ghost), Submachine Guns (e.g., Spectre, Stinger), Rifles (e.g., Vandal, Phantom), Machine Guns (e.g., Odin, Ares), Shotguns (e.g., Judge, Bucky), and Sniper Rifles (e.g., Operator, Marshal).',
          image: 'https://imageio.forbes.com/specials-images/imageserve/5f6cc0443b6cf7dd47c8a871/Valorant-G-U-N--skins-/960x0.png?format=png&width=960'
        },
        {
          section: 'Strategy and Coordination',
          content: 'Team coordination, strategic use of abilities, and economic management are crucial for success in Valorant. Communication and teamwork are essential for winning matches and progressing in the competitive ranking system.',
          image: 'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/4/19/d1jrdrpou7hvstulfozq/valorant'
        },
        {
          section: 'Maps',
          content: 'Valorant features a variety of maps where teams of agents compete in different scenarios. Each map offers unique layouts, choke points, and strategic opportunities to plant or defuse the Spike, or to eliminate the opposing team.',
          image: 'https://juegocentrar.com/wp-content/uploads/2023/11/%C2%BFCuando-sera-la-proxima-rotacion-del-mapa-del-grupo-Valorant.jpg'
        }
      ],
      apiValorant: []
    }
  },

  created() {
   this.pullDataAgents(urlAgents)
  },

  methods: {
    pullDataAgents(url){
      fetch(url).then(Response=>Response.json()).then(data => {
        console.log(data);
        this.apiValorant = data.data
      })
    }
  },

  computed: {

  }


}).mount('#infoHtml')