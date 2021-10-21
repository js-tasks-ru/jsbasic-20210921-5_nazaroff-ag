import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor() {
    this.elem = this.render();
    this.container = document.querySelector(".container");
  }

  open() {
    document.body.classList.add("is-modal-open");
    this.container.appendChild(this.elem);
    const closeButton = document.querySelector(".modal__close");
    closeButton.addEventListener("click", this.close);
    document.addEventListener("keydown", (event) => {
      event.preventDefault();
      if (event.code === "Escape") {
        this.close();
      }
    });
  }

  render() {
    const modal = createElement(`
    <div class="modal">
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img
              src="../..//assets/images/icons/cross-icon.svg"
              alt="close-icon"
            />
          </button>

          <h3 class="modal__title"> Title</h3>
        </div>

        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>
    </div>
    `);

    return modal;
  }

  setTitle(title) {
    document.querySelector(".modal__title").innerHTML = title;
  }

  setBody(bodyData) {
    const modalBody = document.querySelector(".modal__body");
    modalBody.innerHTML = "";
    modalBody.appendChild(bodyData);
  }

  close() {
    const modal = document.querySelector(".modal");
    if (modal) {
      document.body.classList.remove("is-modal-open");
      modal.remove();
    }
  }
}
