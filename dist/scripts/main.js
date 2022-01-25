/* eslint-disable no-unused-vars */

import Card from "./components/card.js";
import personajesGrupo from "./charactersLogic/personajes.js";

// Creation entire Card
const daddyUnorderedList = document.querySelector(".characters-list");

const [King, Fighter, Asesor, Squire] = personajesGrupo;
const {
  nombre: jofreyNombre,
  familia: familiaJofrey,
  edad: edadJofrey,
  vivo: estadoJofrey,
  anyosReinado: reinadoJofrey,
} = new King("Joffrey", "Baratheon", 16, 2);
const jaime = new Fighter("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Fighter("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Squire("Bronn", "AguasNegras", 54, 0, jaime);

new Card(
  daddyUnorderedList,
  [
    ["static/joffrey.jpg", "king image"],
    [`${jofreyNombre} ${familiaJofrey}`, edadJofrey, estadoJofrey],
    "👑",
    ["Years as king"],
    [reinadoJofrey],
  ],
  "king"
);
