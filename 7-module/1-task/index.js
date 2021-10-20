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

    document.addEventListener("DOMContentLoaded", () => this.initMenu());

    return menu;
  }

  innerElement() {
    const innerMenu = createElement(`
      <nav class="ribbon__inner">
      </nav>
    `);

    for (let element of this.categories) {
      const menuItem = createElement(`
      <a href="#" class="ribbon__item " data-id="${element.id}">${element.name}</a>
      `);
      innerMenu.appendChild(menuItem);
    }

    return innerMenu;
  }

  leftArrow() {
    const leftArrow = createElement(`
    <button class="ribbon__arrow ribbon__arrow_left ">
        <img src="../../assets/images/icons/angle-icon.svg" alt="icon" />
    </button>
    `);

    return leftArrow;
  }

  rightArrow() {
    const rightArrow = createElement(`
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="../../assets/images/icons/angle-icon.svg" alt="icon" />
    </button>

    `);

    return rightArrow;
  }

  initMenu() {
    const arrowRight = document.querySelector(".ribbon__arrow_right");
    const arrowLeft = document.querySelector(".ribbon__arrow_left");
    const ribbonInner = document.querySelector(".ribbon__inner");

    arrowRight.addEventListener("click", () => {
      ribbonInner.scrollBy(350, 0);
    });

    arrowLeft.addEventListener("click", () => {
      ribbonInner.scrollBy(-350, 0);
    });

    ribbonInner.addEventListener("scroll", () => {
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      scrollLeft === 0
        ? arrowLeft.classList.remove("ribbon__arrow_visible")
        : arrowLeft.classList.add("ribbon__arrow_visible");

      scrollRight < 3
        ? arrowRight.classList.remove("ribbon__arrow_visible")
        : arrowRight.classList.add("ribbon__arrow_visible");
    });

    ribbonInner.addEventListener("click", (event) => {
      for (let i = 0; i < event.currentTarget.children.length; i++) {
        event.currentTarget.children[i].classList.remove("ribbon__item_active");
      }
      event.target.classList.add("ribbon__item_active");
      this.ribbonSelect(event.target.dataset.id);
    });
  }

  ribbonSelect(id) {
    let getID = new CustomEvent("ribbon-select", {
      detail: id,
      bubbles: true,
    });
    this.elem.dispatchEvent(getID);
  }
}
