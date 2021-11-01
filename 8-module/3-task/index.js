export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (product === null || product === "") return;
    if (!this.cartItems.length) {
      this.cartItems.push({ product: product, count: 1 });
    } else {
      let sum = 0;
      for (let p of this.cartItems) {
        p.product.name == product.name ? (p.count += 1) : (sum += 1);
      }
      sum > this.cartItems.length - 1
        ? this.cartItems.push({ product: product, count: 1 })
        : "";
    }
    console.log(this.cartItems);
    this.onProductUpdate(this.cartItems);
  }

  updateProductCount(productId, amount) {
    for (let p of this.cartItems) {
      p.product.id == productId ? (p.count += amount) : "";
      p.count <= 0 ? this.cartItems.splice(this.cartItems.indexOf(p), 1) : "";
    }
    this.onProductUpdate(this.cartItems);
  }

  isEmpty() {
    return !!this.cartItems.length;
  }

  getTotalCount() {
    let sum = 0;
    for (let p of this.cartItems) {
      sum += p.count;
    }
    return sum;
  }

  getTotalPrice() {
    let sum = 0;
    for (let p of this.cartItems) {
      sum += p.product.price * p.count;
    }
    return sum;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}
