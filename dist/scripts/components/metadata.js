import Component from "./component.js";

export default class MetaData extends Component {
  answersInfoCategories;
  infoCategories;
  constructor(parentElement, className, infoCategories, answersInfoCategories) {
    super(parentElement, className, "div");
    this.infoCategories = infoCategories;
    this.answersInfoCategories = answersInfoCategories;

    this.generateListAndSons();
    console.log("done");
  }

  generateListAndSons() {
    this.element.innerHTML = `<ul class="list-unstyled">
                  <li>${this.infoCategories[0]}: ${this.answersInfoCategories[0]}</li>
                  <li>${this.infoCategories[1]}: ${this.answersInfoCategories[1]}</li>
                  <li>${this.infoCategories[2]}: ${this.answersInfoCategories[2]}</li>
                  <li>${this.infoCategories[3]}: ${this.answersInfoCategories[3]}</li>
                  <li>${this.infoCategories[4]}: ${this.answersInfoCategories[4]}</li>
                  <li>${this.infoCategories[5]}: ${this.answersInfoCategories[5]}</li>
                </ul>
                <div class="character__actions"></div>`;
  }
}
