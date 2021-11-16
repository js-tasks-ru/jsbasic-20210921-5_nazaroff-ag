import createElement from "../../assets/lib/create-element.js";
import ProductCard from "../../6-module/2-task/index.js";

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.render();
    this.filteredProducts = [];
    this.newFilters = {};
    this.vegetarianOnlyControl = document.querySelector(
      "[data-vegetarian-only]"
    );
    this.categoryControl = document.querySelector("[data-category]");
    this.maxSpicinessControl = document.querySelector("[data-max-spiciness]");
    this.noNutsControl = document.querySelector("[data-no-nuts]");
  }
  render() {
    this.elem = createElement(`
      <div class="products-grid">
      </div>
    `);

    let innerElem = this.cartRender(this.products);

    this.elem.appendChild(innerElem);

    return this.elem;
  }

  cartRender(productArray) {
    const inner = createElement(`
      <div class="products-grid__inner">
      </div>
    `);

    for (let product of productArray) {
      const card = new ProductCard(product);
      inner.appendChild(card.elem);
    }
    return inner;
  }

  updateFilter(filters) {
    this.filters = filters;
    for (let f in filters) {
      const value = filters[f];
      document.querySelector(".products-grid__inner").remove();
      f === "noNuts"
        ? (f = "nuts")
        : f === "vegeterianOnly"
        ? (f = "vegeterian")
        : f === "maxSpiciness"
        ? (f = "spiciness")
        : (f = "category");
      this.newFilters[f] = value;
      this.filterProducts();
      let innerElem = this.cartRender(this.filteredProducts);
      this.elem.appendChild(innerElem);
    }
  }

  filterProducts() {
    this.filteredProducts = [];

    if (
      this.noNutsControl.checked ||
      this.vegetarianOnlyControl.checked ||
      this.maxSpicinessControl.checked ||
      this.categoryControl.checked
    ) {
      this.noNutsControl.checked
        ? (this.filteredProducts = this.filteredProducts.concat(
            this.products.filter((p) => !p.nuts)
          ))
        : "";
      this.vegetarianOnlyControl.checked
        ? (this.filteredProducts = this.filteredProducts.concat(
            this.products.filter((p) => p.vegeterian)
          ))
        : "";
      this.maxSpicinessControl.checked
        ? (this.filteredProducts = this.filteredProducts.concat(
            this.products.filter(
              (p) => p.spiciness <= this.newFilters.spiciness
            )
          ))
        : "";
      this.categoryControl.checked
        ? (this.filteredProducts = this.filteredProducts.concat(
            this.products.filter((p) => p.category === this.newFilters.category)
          ))
        : "";

      // удаляет из массива повторяющиеся элементы
      this.filteredProducts = [...new Set(this.filteredProducts)];
    } else {
      this.filteredProducts = this.products;
    }
  }
}
