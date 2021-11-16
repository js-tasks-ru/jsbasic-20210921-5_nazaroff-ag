// import createElement from "../../assets/lib/create-element.js";

// export default class Carousel {
//   constructor(slides) {
//     this.slides = slides;
//     this.elem = this.render();
//   }

//   render() {
//     const slider = createElement(`
//       <div class="carousel">
//         <div class="carousel__arrow carousel__arrow_right">
//           <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
//         </div>
//         <div class="carousel__arrow carousel__arrow_left">
//           <img src="../../assets/images/icons/angle-left-icon.svg" alt="icon">
//         </div>
//       </div>
//     `);

//     const slideWrapper = createElement(`
//     <div class="carousel__inner">
//     </div>
//     `);

//     for (let product of this.slides) {
//       const slide = createElement(`
//       <div class="carousel__slide" data-id="${product.id}">
//         <img src="../../assets/images/carousel/${
//           product.image
//         }" class="carousel__img" alt="slide">
//         <div class="carousel__caption">
//           <span class="carousel__price">€${product.price.toFixed(2)}</span>
//           <div class="carousel__title">${product.name}</div>
//           <button type="button" class="carousel__button">
//             <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
//           </button>
//         </div>
//       </div>
//       `);

//       slideWrapper.appendChild(slide);
//     }

//     slider.appendChild(slideWrapper);

//     document.addEventListener("DOMContentLoaded", () => this.initCarousel());

//     return slider;
//   }

//   initCarousel() {
//     const arrowRight = document.querySelector(".carousel__arrow_right");
//     const arrowLeft = document.querySelector(".carousel__arrow_left");
//     const carouselInner = document.querySelector(".carousel__inner");
//     let imgWidth = document.querySelector(".carousel__slide").offsetWidth;
//     const slidesQuantity = document.querySelectorAll(".carousel__slide");

//     let currentSlideNumber = 0;

//     arrowLeft.style.display = "none";

//     arrowRight.addEventListener("click", () => {
//       arrowLeft.style.display = "";
//       currentSlideNumber -= 1;
//       carouselInner.style.transform = `translateX(${
//         imgWidth * currentSlideNumber
//       }px)`;
//       if (currentSlideNumber === -(slidesQuantity.length - 1)) {
//         arrowRight.style.display = "none";
//       }
//     });

//     arrowLeft.addEventListener("click", () => {
//       arrowRight.style.display = "";
//       currentSlideNumber += 1;
//       carouselInner.style.transform = `translateX(${
//         imgWidth * currentSlideNumber
//       }px)`;
//       if (currentSlideNumber === 0) {
//         arrowLeft.style.display = "none";
//       }
//     });

//     const slider = document.querySelector(".carousel__inner");
//     slider.addEventListener("click", (event) => {
//       if (event.target.parentElement.className === "carousel__button") {
//         console.log("plus");
//         this.addProduct(event.path[3].dataset.id);
//       }
//     });
//   }

//   addProduct(id) {
//     let getID = new CustomEvent("product-add", {
//       detail: id,
//       bubbles: true,
//     });
//     this.elem.dispatchEvent(getID);
//   }
// }

import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
    this.initCarousel();
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

    return slider;
  }

  initCarousel() {
    const arrowRight = this.elem.querySelector(".carousel__arrow_right");
    const arrowLeft = this.elem.querySelector(".carousel__arrow_left");
    const carouselInner = this.elem.querySelector(".carousel__inner");
    const slidesQuantity = this.elem.querySelectorAll(".carousel__slide");

    let currentSlideNumber = 0;

    arrowLeft.style.display = "none";

    this.elem.addEventListener("click", (ev) => {
      let imgWidth = this.elem.offsetWidth;

      if (!ev.target.closest(".carousel__arrow_right")) {
        return;
      }
      currentSlideNumber += 1;
      carouselInner.style.transform = `translateX(-${
        imgWidth * currentSlideNumber
      }px)`;

      if (currentSlideNumber === slidesQuantity.length - 1) {
        arrowRight.style.display = "none";
      } else {
        arrowLeft.style.display = "";
      }
    });

    this.elem.addEventListener("click", (ev) => {
      let imgWidth = this.elem.offsetWidth;

      if (!ev.target.closest(".carousel__arrow_left")) {
        return;
      }
      arrowRight.style.display = "";
      currentSlideNumber -= 1;
      carouselInner.style.transform = `translateX(-${
        imgWidth * currentSlideNumber
      }px)`;
      if (currentSlideNumber === 0) {
        arrowLeft.style.display = "none";
      }
    });

    const slider = this.elem.querySelector(".carousel__inner");
    slider.addEventListener("click", (event) => {
      this.addProduct(event.target.closest("[data-id]").dataset.id);
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
