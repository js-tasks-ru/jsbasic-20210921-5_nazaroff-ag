import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }

  render() {
    const menu = createElement(`
    <div class="ribbon">
    </div>`);

    menu.appendChild(this.leftArrow());

    menu.appendChild(this.innerElement());

    menu.appendChild(this.rightArrow());

    return menu;
  }

  innerElement() {
    const innerMenu = createElement(`
      <nav class="ribbon__inner">
      </nav>

    
    `);
    return innerMenu;
  }

  leftArrow() {
    const leftArrow = createElement(`
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="../../assets/images/icons/angle-icon.svg" alt="icon" />
    </button>
    `);

    return leftArrow;
  }

  rightArrow() {
    const rightArrow = createElement(`
    <button class="ribbon__arrow ribbon__arrow_right">
        <img src="../../assets/images/icons/angle-icon.svg" alt="icon" />
    </button>

    `);

    return rightArrow;
  }
}
