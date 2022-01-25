import Component from "./component.js";
import Image from "./image.js";
import CardBody from "./card-body.js";
import Emoji from "./emoji.js";
import MetaData from "./metadata.js";
import ButtonComponent from "./button.js";

export default class Card extends Component {
  imageSrc;
  imageAlt;
  nameFamily;
  age;
  state;
  typeEmoji;
  arrayOfCategories;
  arrayOfAnswers;
  type;
  constructor(parentElement, informationLoad, type) {
    super(parentElement, `character col li--${type}`, "li");
    [
      this.imageData,
      this.cardBodyData,
      this.typeEmoji,
      this.arrayOfCategories,
      this.arrayOfAnswers,
    ] = informationLoad;
    [this.imageSrc, this.alt] = this.imageData;
    [this.nameFamily, this.age, this.state] = this.cardBodyData;
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
