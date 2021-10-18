import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
  }

  render() {
    const slider = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="../../assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        
      </div>
    `);

    const slideWrapper = createElement(`
    <div class="carousel__inner">
    </div>
    `);

    for (let product of this.slides) {
      const slide = createElement(`
      <div class="carousel__slide" data-id="${product.id}">
        <img src="../../assets/images/carousel/${
          product.image
        }" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${product.price.toFixed(2)}</span>
          <div class="carousel__title">${product.name}</div>
          <button type="button" class="carousel__button">
            <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `);

      slideWrapper.appendChild(slide);
    }

    slider.appendChild(slideWrapper);

    document.addEventListener("DOMContentLoaded", () => this.initCarousel());

    return slider;
  }

  initCarousel() {
    const arrowRight = document.querySelector(".carousel__arrow_right");
    const arrowLeft = document.querySelector(".carousel__arrow_left");
    const carouselInner = document.querySelector(".carousel__inner");
    let imgWidth = document.querySelector(".carousel__slide").offsetWidth;
    const fixedImgSize = imgWidth;
    imgWidth <= fixedImgSize
      ? (arrowRight.style.display = "none")
      : (arrowRight.style.display = "");

    arrowRight.addEventListener("click", () => {
      arrowLeft.style.display = "";
      imgWidth === fixedImgSize
        ? (imgWidth = imgWidth + 2 * fixedImgSize)
        : (imgWidth = imgWidth + fixedImgSize);

      carouselInner.style.transform = `translateX(${imgWidth}px)`;
      if (imgWidth === 0) {
        arrowRight.style.display = "none";
      }
    });

    arrowLeft.addEventListener("click", () => {
      arrowRight.style.display = "";
      imgWidth === fixedImgSize
        ? (imgWidth = imgWidth - 2 * fixedImgSize)
        : (imgWidth = imgWidth - fixedImgSize);
      carouselInner.style.transform = `translateX(${imgWidth}px)`;
      if (imgWidth === -fixedImgSize * 3) {
        arrowLeft.style.display = "none";
      }
    });

    const slider = document.querySelector(".carousel__inner");
    slider.addEventListener("click", (event) => {
      console.log(event.target.);
    });
  }

  addProduct(id) {
    let getID = new CustomEvent("product-add", {
      detail: id,
      bubbles: true,
    });
    this.elem.dispatchEvent(getID);
  }
}
