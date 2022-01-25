import ButtonComponent from "./components/button.js";
import CardBody from "./components/card-body.js";
import Card from "./components/card.js";
import Emoji from "./components/emoji.js";
import Image from "./components/image.js";
import MetaData from "./components/metadata.js";
import personajesGrupo from "./charactersLogic/personajes.js";

const arrayofCategories = [
  "Years ass king",
  "Weapon",
  "Skill",
  "Stack",
  "Loyal to",
  "Serves to",
];

const arrayofAnswers = ["a"];

const nameFamily = "Polansky";
const age = 28;
const state = true;

const emoji = ":)";

const characterCard = document.querySelector(".character__card");

const imageCard = new Image(
  characterCard,
  "character__picture card-img-top",
  "static/no-one.jpg"
);

const cardBody = new CardBody(
  characterCard,
  "card-body",
  nameFamily,
  age,
  state
);

const cardInfo = document.querySelector(".card-body");
const MetadataCard = new MetaData(
  cardInfo,
  "character__overlay",
  arrayofCategories,
  arrayofAnswers
);

const emojiType = new Emoji(characterCard, "emoji", emoji);

const metadataSelected = document.querySelector(".character__actions");

const buttonTalk = new ButtonComponent(
  metadataSelected,
  "character__action btn",
  "talk",
  () => console.log("it works")
);

const buttonDie = new ButtonComponent(
  metadataSelected,
  "character__action btn",
  "die",
  () => console.log("still works")
);

// Creation entire Card
const daddyUnorderedList = document.querySelector(".characters-list");

const [King, Fighter, Asesor, Squire] = personajesGrupo;
const joffrey = new King("Joffrey", "Baratheon", 16, 2);
const jaime = new Fighter("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Fighter("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Squire("Bronn", "AguasNegras", 54, 0, jaime);

const kingImgData = ["static/joffrey.jpg", "King image"];
const kingCardBodyData = [
  `${joffrey.nombre} ${joffrey.familia}`,
  joffrey.edad,
  joffrey.vivo,
];
const kingArrayCategories = ["Years as king"];
const kingArrayData = [joffrey.anyosReinado];

const joffreyCard = new Card(
  daddyUnorderedList,
  kingImgData,
  kingCardBodyData,
  ">:C",
  kingArrayCategories,
  kingArrayData,
  "king"
);

const jaimeImgData = ["static/jaime.jpg", "Jaimi Image"];
const jaimeCardBodyData = [
  `${jaime.nombre} ${jaime.familia}`,
  jaime.edad,
  jaime.vivo,
];
const jaimeArrayCategories = ["Weapon", "Skill"];
const jaimeArrayData = [jaime.arma, jaime.destreza];

const jaimeCard = new Card(
  daddyUnorderedList,
  jaimeImgData,
  jaimeCardBodyData,
  ">:)",
  jaimeArrayCategories,
  jaimeArrayData,
  "jaime"
);
