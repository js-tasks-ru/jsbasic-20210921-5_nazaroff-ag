function initCarousel() {
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
}
