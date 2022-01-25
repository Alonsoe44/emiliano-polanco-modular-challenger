import Component from "./component.js";

export default class Communicate extends Component {
  constructor(parentElement, className, phraseCharacter, imgCharacter) {
    super(parentElement, className, "div");
    this.phraseCharacter = phraseCharacter;
    [this.imgSrc, this.alt] = imgCharacter;

    this.createSons();
  }

  createSons() {
    this.element.innerHTML = `<p class="comunications__text display-1">${this.phraseCharacter}</p>
      <img
        class="comunications__picture"
        src=${this.imgSrc}
        alt=${this.alt}
      />`;
  }
}
