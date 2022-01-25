import Component from "./component.js";

export default class MetaData extends Component {
  answersInfoCategories;
  infoCategories;
  sonsList;
  constructor(parentElement, className, infoCategories, answersInfoCategories) {
    super(parentElement, className, "div");
    this.infoCategories = infoCategories;
    this.answersInfoCategories = answersInfoCategories;
    this.generateCategoriesNumber();
    this.generateListAndSons();
    console.log("done");
  }

  generateListAndSons() {
    this.element.innerHTML = `<ul class="list-unstyled">
                  ${this.sonsList}
                </ul>
                <div class="character__actions"></div>`;
  }

  generateCategoriesNumber() {
    const numElements = this.infoCategories.length;
    this.sonsList = ``;
    for (let i = 0; i < numElements; i++) {
      this.sonsList = `${this.sonsList}
      <li>${this.infoCategories[i]}: ${this.answersInfoCategories[i]}`;
    }
  }
}
