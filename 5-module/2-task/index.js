function toggleText() {
  let button = document.querySelector("button");
  let text = document.querySelector("#text");

  button.addEventListener("click", () => {
    text.toggleAttribute("hidden");
  });
}
