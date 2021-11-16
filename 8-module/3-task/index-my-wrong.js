export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (
      product === null ||
      product === "" ||
      product === undefined ||
      product.length
    )
      return;
    let cartItem;
    if (!this.cartItems.length) {
      cartItem = { product: product, count: 1 };
      this.cartItems.push(cartItem);
    } else {
      let sum = 0;
      for (let p of this.cartItems) {
        p.product.name == product.name ? (p.count += 1) : (sum += 1);
      }
      cartItem = { product: product, count: 1 };
      sum > this.cartItems.length - 1 ? this.cartItems.push(cartItem) : "";
    }
    console.log(this.cartItems);
    this.onProductUpdate(cartItem);
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

  onProductUpdate() {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}
