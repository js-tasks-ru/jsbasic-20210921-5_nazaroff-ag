export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.render();
  }

  render() {
    const slider = document.createElement("DIV");
    slider.classList.add("slider");
    const thumb = document.createElement("DIV");
    thumb.classList.add("slider__thumb");
    const value = document.createElement("SPAN");
    value.classList.add("slider__value");
    value.innerText = 0;
    thumb.appendChild(value);
    slider.appendChild(thumb);
    const progress = document.createElement("DIV");
    progress.classList.add("slider__progress");
    slider.appendChild(progress);
    const steps = this.sliderSteps();
    slider.appendChild(steps);

    this.initSlider(progress, slider, value, thumb);

    return slider;
  }

  sliderSteps() {
    const slider_steps = document.createElement("DIV");
    slider_steps.classList.add("slider__steps");

    for (let i = 0; i < this.steps; i++) {
      const step = document.createElement("SPAN");
      step.dataset.id = i;
      slider_steps.appendChild(step);
    }
    return slider_steps;
  }

  initSlider(progress, slider, value, thumb) {
    document.addEventListener("DOMContentLoaded", () => {
      slider.addEventListener("click", (event) => {
        const x = event.offsetX;
        if (x <= 33) {
          value.innerText = 0;
        } else if (x > 34 && x <= 120) {
          value.innerText = 1;
        } else if (x > 121 && x <= 210) {
          value.innerText = 2;
        } else if (x > 211 && x <= 280) {
          value.innerText = 3;
        } else if (x > 281) {
          value.innerText = 4;
        }
        const steps = document.querySelectorAll("SPAN");
        for (let step of steps) {
          if (step.dataset.id > value.innerText)
            step.classList.remove("slider__step-active");
        }
        document
          .querySelector(".slider__steps")
          .children[value.innerText].classList.add("slider__step-active");
        thumb.style.left = `${x}px`;
        progress.style.width = `${x}px`;
        this.sliderChange(value.innerText);
      });
    });
  }

  sliderChange(val) {
    let getVal = new CustomEvent("slider-change", {
      detail: val,
      bubbles: true,
    });
    this.elem.dispatchEvent(getVal);
  }
}
