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
    progress.style.width = "0%";
    slider.appendChild(progress);
    const steps = this.sliderSteps();
    slider.appendChild(steps);

    this.initSlider(progress, slider, value, thumb);
    this.initDrag();
    thumb.ondragstart = () => false;

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
        let left = event.clientX - this.elem.getBoundingClientRect().left;
        let leftRelative = left / slider.offsetWidth;
        let segments = this.steps - 1;
        let approximateValue = leftRelative * segments;
        let thumbValue = Math.round(approximateValue);
        value.innerText = thumbValue;

        const steps = document.querySelectorAll("SPAN");
        for (let step of steps) {
          if (step.dataset.id > thumbValue) {
            step.classList.remove("slider__step-active");
          } else {
            step.classList.add("slider__step-active");
          }
        }
        document
          .querySelector(".slider__steps")
          .children[thumbValue].classList.add("slider__step-active");

        let valuePercents = (thumbValue / segments) * 100;
        thumb.style.left = `${valuePercents}%`;
        progress.style.width = `${valuePercents}%`;
        this.sliderChange(thumbValue);
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

  initDrag() {
    document.addEventListener("DOMContentLoaded", () => {
      const slider = document.querySelector(".slider");
      const thumb = document.querySelector(".slider__thumb");
      const progress = document.querySelector(".slider__progress");
      const value = document.querySelector(".slider__value");

      thumb.onmousedown = function (event) {
        event.preventDefault();
        slider.classList.add("slider_dragging");

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);

        function onMouseMove(event) {
          const steps = document.querySelectorAll("SPAN[data-id]").length;

          let left = event.clientX - slider.getBoundingClientRect().left;
          let leftRelative = left / slider.offsetWidth;
          if (leftRelative < 0) {
            leftRelative = 0;
          }
          if (leftRelative > 1) {
            leftRelative = 1;
          }
          let leftPercents = leftRelative * 100;

          let segments = steps - 1;
          console.log(segments);
          let approximateValue = leftRelative * segments;

          let newValue = Math.round(approximateValue);
          value.innerText = newValue;
          thumb.style.left = `${leftPercents}%`;
          progress.style.width = `${leftPercents}%`;
        }

        function onMouseUp(newValue) {
          let getVal = new CustomEvent("slider-change", {
            detail: newValue,
            bubbles: true,
          });
          slider.dispatchEvent(getVal);
          slider.classList.remove("slider_dragging");
          document.removeEventListener("mouseup", onMouseUp);
          document.removeEventListener("mousemove", onMouseMove);
        }
      };
    });
  }
}
