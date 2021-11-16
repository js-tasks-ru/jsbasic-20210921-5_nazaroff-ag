function initCarousel() {
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  const carouselInner = document.querySelector(".carousel__inner");
  let imgWidth = document.querySelector(".carousel__slide").offsetWidth;

  let currentSlideNumber = 0;

  arrowLeft.style.display = "none";

  arrowRight.addEventListener("click", () => {
    arrowLeft.style.display = "";
    currentSlideNumber -= 1;
    carouselInner.style.transform = `translateX(${
      imgWidth * currentSlideNumber
    }px)`;
    if (currentSlideNumber === -3) {
      arrowRight.style.display = "none";
    }
  });

  arrowLeft.addEventListener("click", () => {
    arrowRight.style.display = "";
    currentSlideNumber += 1;
    carouselInner.style.transform = `translateX(${
      imgWidth * currentSlideNumber
    }px)`;
    if (currentSlideNumber === 0) {
      arrowLeft.style.display = "none";
    }
  });
}
