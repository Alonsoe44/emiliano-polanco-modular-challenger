import Component from "./component.js";
import Image from "./image.js";
import CardBody from "./card-body.js";
import Emoji from "./emoji.js";
import MetaData from "./metadata.js";
import ButtonComponent from "./button.js";

export default class Card extends Component {
  type;
  imageSrc;
  imageAlt;
  nameFamily;
  age;
  state;
  typeEmoji;
  arrayOfCategories;
  arrayOfAnswers;
  constructor(
    parentElement,
    imageData,
    cardBodyData,
    typeEmoji,
    arrayOfCategories,
    arrayOfAnswers,
    type
  ) {
    super(parentElement, `character col li--${type}`, "li");
    [this.imageSrc, this.imageAlt] = imageData;
    [this.nameFamily, this.age, this.state] = cardBodyData;
    this.typeEmoji = typeEmoji;
    this.arrayOfCategories = arrayOfCategories;
    this.arrayOfAnswers = arrayOfAnswers;
    this.type = type;
    this.createSonHtml();
    this.appendCardParts();
    this.appendOnCardBody();
    this.appendOnMetaData();
  }

  createSonHtml() {
    this.element.innerHTML = `<div class="card character__card card--${this.type}"></div>`;
  }

  appendCardParts() {
    const daddyCardContainer = document.querySelector(`.card--${this.type}`);
    new Image(
      daddyCardContainer,
      "character__picture card-img-top",
      this.imageSrc,
      this.alt
    );
    new CardBody(
      daddyCardContainer,
      `card-body body--${this.type}`,
      this.nameFamily,
      this.age,
      this.state
    );
    new Emoji(daddyCardContainer, "emoji", this.typeEmoji);
  }

  appendOnCardBody() {
    const daddyCardBody = document.querySelector(`.body--${this.type}`);
    new MetaData(
      daddyCardBody,
      `character__overlay overlay--${this.type}`,
      this.arrayOfCategories,
      this.arrayOfAnswers
    );
  }

  appendOnMetaData() {
    const daddyMetaData = document.querySelector(`.overlay--${this.type}`);
    new ButtonComponent(daddyMetaData, "character__action btn", "Talk", () => {
      console.log("easy");
    });
    new ButtonComponent(daddyMetaData, "character__action btn", "Die", () => {
      console.log("Hard");
    });
  }
}
