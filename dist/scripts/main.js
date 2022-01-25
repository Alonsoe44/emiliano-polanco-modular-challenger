import ButtonComponent from "./components/button.js";
import CardBody from "./components/card-body.js";
import Emoji from "./components/emoji.js";
import MetaData from "./components/metadata.js";

const arrayofCategories = [
  "Years ass king",
  "Weapon",
  "Skill",
  "Stack",
  "Loyal to",
  "Serves to",
];
const arrayofAnswers = [
  "69",
  "kunai",
  "Nice skin",
  "A lot",
  "His dog",
  "No one",
];

const nameFamily = "Polansky";
const age = 28;
const state = true;
// Daddys Selectors
const emoji = ":)";

const characterCard = document.querySelector(".character__card");

// Instacnes of components
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
