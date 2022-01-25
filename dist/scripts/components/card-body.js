import Component from "./component.js";

export default class CardBody extends Component {
  nameFamily;
  age;
  state;
  stateAlive = "<i class='fas fa-thumbs-up'></i>";
  stateDead = "<i class='fas fa-thumbs-down'></i>";
  constructor(parentElement, className, nameFamily, age, state) {
    super(parentElement, className, "div");
    this.nameFamily = nameFamily;
    this.age = age;
    this.state = state ? this.stateAlive : this.stateDead;
    this.createSons();
  }

  createSons() {
    this.element.innerHTML = `<h2 class="character__name card-title h4">${this.nameFamily}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Age: ${this.age} years</li>
                  <li>
                    State:
                    ${this.state}
                  </li>
                </ul>
              </div>`;
  }
}
