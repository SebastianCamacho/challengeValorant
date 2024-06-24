let urlInfo = window.location.href
console.log(urlInfo)

//Url info API


const { createApp } = Vue

const app = createApp({
  data() {
    return {
      detailGameModes: [
        {
          name: "Standard",
          teams: "5 vs 5 (Attackers vs Defenders)",
          objective: "Plant/Defuse the Spike or eliminate the enemy team",
          rounds: "Up to 25 rounds; first team to 13 wins",
          economy: "Earn credits for actions to buy weapons and abilities",
          agentRoles: "Duelists, Initiators, Sentinels, Controllers",
          unrated: "Casual mode with no impact on rank",
          competitive: "Ranked mode with a ranking system (Iron to Radiant)",
          strategy: "Coordination, ability usage, and economy management are key"
        },
        {
          name: "Deathmatch",
          teams: "Free-for-all",
          objective: "Reach 40 eliminations or have the most eliminations in 9 minutes",
          rounds: "No rounds",
          economy: "No economy; random weapons on respawn",
          agentRoles: "No roles applied",
          unrated: "Not applicable",
          competitive: "Not applicable",
          strategy: "Improve aim and reflexes"
        },
        {
          name: "Escalation",
          teams: "5 vs 5",
          objective: "First team to complete all weapon and ability levels",
          rounds: "No rounds",
          economy: "No economy; weapons and abilities change automatically",
          agentRoles: "No specific roles applied",
          unrated: "Not applicable",
          competitive: "Not applicable",
          strategy: "Quick adaptation to new weapons and abilities"
        },
        {
          name: "Team Deathmatch",
          teams: "5 vs 5",
          objective: "First team to reach a set number of eliminations",
          rounds: "No rounds",
          economy: "No economy; random weapons on respawn",
          agentRoles: "No specific roles applied",
          unrated: "Not applicable",
          competitive: "Not applicable",
          strategy: "Team coordination and combat skills"
        },
        {
          name: "Onboarding",
          teams: "Variable",
          objective: "Learn basic game mechanics",
          rounds: "Variable",
          economy: "Variable",
          agentRoles: "Not applicable",
          unrated: "Not applicable",
          competitive: "Not applicable",
          strategy: "Familiarize with game and mechanics"
        },
        {
          name: "Replication",
          teams: "5 vs 5",
          objective: "Plant/Defuse the Spike or eliminate the enemy team",
          rounds: "Best of 9 rounds",
          economy: "Standard economy",
          agentRoles: "All players on the team play as the same agent",
          unrated: "Applies",
          competitive: "Not applicable",
          strategy: "Coordinated use of replicated agent's abilities"
        },
        {
          name: "Spike Rush",
          teams: "5 vs 5",
          objective: "Plant/Defuse the Spike or eliminate the enemy team",
          rounds: "Best of 7 rounds; first team to reach 4 wins",
          economy: "No economy; predefined equipment and abilities",
          agentRoles: "Duelists, Initiators, Sentinels, Controllers",
          unrated: "Applies",
          competitive: "Not applicable",
          strategy: "Fast-paced; efficient use of abilities and weapons"
        },
        {
          name: "The Range",
          teams: "Individual",
          objective: "Practice skills, aim, and strategies",
          rounds: "No rounds",
          economy: "Not applicable",
          agentRoles: "No roles applied",
          unrated: "Not applicable",
          competitive: "Not applicable",
          strategy: "Improve individual skills"
        },
        {
          name: "Snowball Fight",
          teams: "5 vs 5",
          objective: "Eliminate enemy players using snowballs",
          rounds: "Variable",
          economy: "No economy; limited to snowball weapons",
          agentRoles: "No specific roles applied",
          unrated: "Not applicable",
          competitive: "Not applicable",
          strategy: "Fun and agility"
        },
        {
          name: "Swiftplay",
          teams: "5 vs 5",
          objective: "Plant/Defuse the Spike or eliminate the enemy team",
          rounds: "Best of 9 rounds; first team to reach 5 wins",
          economy: "Standard but accelerated economy",
          agentRoles: "Duelists, Initiators, Sentinels, Controllers",
          unrated: "Applies",
          competitive: "Not applicable",
          strategy: "Fast-paced and strategic; efficient use of abilities and economy"
        }
      ],
      valorant: [
        {
          section: 'Overview',
          content: 'Valorant is a free-to-play tactical first-person shooter (FPS) developed and published by Riot Games. Officially released on June 2, 2020, the game combines precise gunplay with unique agent abilities, offering a dynamic and competitive experience.'
        },
        {
          section: 'Game Overview',
          content: 'In Valorant, players assume the role of "agents," each with unique abilities and divided into classes like Duelists, Initiators, Sentinels, and Controllers. The main game modes include Standard (Unrated and Competitive), Deathmatch, Spike Rush, Escalation, Replication, Team Deathmatch, Snowball Fight, Swiftplay, The Range, and Onboarding, each offering different experiences and challenges.'
        },
        {
          section: 'Agents',
          content: 'Agents in Valorant are characters with unique abilities that influence gameplay. The main classes are Duelists (e.g., Jett, Phoenix), Initiators (e.g., Sova, Breach), Sentinels (e.g., Sage, Cypher), and Controllers (e.g., Omen, Brimstone).'
        },
        {
          section: 'Weapons',
          content: 'Valorant features a variety of weapons that players can purchase at the start of each round using credits earned for their actions, including Pistols (e.g., Classic, Ghost), Submachine Guns (e.g., Spectre, Stinger), Rifles (e.g., Vandal, Phantom), Machine Guns (e.g., Odin, Ares), Shotguns (e.g., Judge, Bucky), and Sniper Rifles (e.g., Operator, Marshal).'
        },
        {
          section: 'Strategy and Coordination',
          content: 'Team coordination, strategic use of abilities, and economic management are crucial for success in Valorant. Communication and teamwork are essential for winning matches and progressing in the competitive ranking system.'
        },
        {
          section: 'Maps',
          content: 'Valorant features a variety of maps where teams of agents compete in different scenarios. Each map offers unique layouts, choke points, and strategic opportunities to plant or defuse the Spike, or to eliminate the opposing team.'
        }
      ]
    }
  },

  created() {
    
  },

  methods: {
    
  },

  computed: {

  }


}).mount('#infoHtml')