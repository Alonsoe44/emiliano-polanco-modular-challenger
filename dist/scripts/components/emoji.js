import Component from "./component.js";

export default class Emoji extends Component {
  constructor(parentElement, className, typeEmoji) {
    super(parentElement, className, "i");
    this.element.textContent = typeEmoji;
  }
}
