import Component from "./component.js";

export default class Image extends Component {
  constructor(parentElement, className, src, alt) {
    super(parentElement, className, "img");
    this.src = src;
    this.alt = alt;
    this.element.setAttribute("src", src);
    this.element.setAttribute("atl", alt);
  }
}
