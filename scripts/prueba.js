//consumo de datos API
const urlEventos = "https://aulamindhub.github.io/amazing-api/events.json"

//url de la pagina actual
let urlDetails = window.location.href

//valor del value de la direccion
let valueUrlDetails = new URL(urlDetails).searchParams.get("value")
console.log(valueUrlDetails)

