import createElement from "../../assets/lib/create-element.js";
import ProductCard from "../../6-module/2-task/index.js";

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.render();
    this.filteredProducts = [];
    this.newFilters = {};
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
      document.querySelector(".products-grid__inner").remove();
      this.newFilters[f] = this.filters[f];
      this.filterProducts(f);
      let innerElem = this.cartRender(this.filteredProducts);
      this.elem.appendChild(innerElem);
    }
  }

  filterProducts(filter) {
    if (filter === undefined) {
      this.filteredProducts = this.products;
      return this.filteredProducts;
    } else if (filter === "noNuts") {
      if (this.newFilters.noNuts) {
        this.filteredProducts = this.filteredProducts.concat(
          this.products.filter((p) => p.nuts || !p.hasOwnProperty("nuts"))
        );
      } else {
        this.filteredProducts = this.products;
      }
      return this.filteredProducts;
    } else if (filter === "vegeterianOnly") {
      console.log(this.newFilters);
      console.log(this.filteredProducts);

      if (this.newFilters.vegeterianOnly) {
        this.filteredProducts = this.filteredProducts.concat(
          this.products.filter((p) => p.vegeterian)
        );
      } else {
        this.filteredProducts = this.products;
      }
      return this.filteredProducts;
    } else if (filter === "maxSpiciness") {
      if (this.newFilters.maxSpiciness === 2) {
        this.filteredProducts = this.filteredProducts.concat(
          this.products.filter((p) => p.spiciness <= this.filters.maxSpiciness)
        );
      } else {
        this.filteredProducts = this.products;
      }
      return this.filteredProducts;
    } else if (filter === "category") {
      if (this.newFilters.category === "soups") {
        this.filteredProducts = this.filteredProducts.concat(
          this.products.filter(
            (p) => p.category === this.filters.category || p.category === ""
          )
        );
      }
      return this.filteredProducts;
    }
  }
}
