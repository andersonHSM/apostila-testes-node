import CartProduct from "./cart-product";
import Product from "./product";
import User from "./user";

class Cart {
  constructor(private _cartProducts: CartProduct[], private _user: User) {}

  public get cartProducts(): CartProduct[] {
    return this._cartProducts;
  }

  public set cartProducts(v: CartProduct[]) {
    this._cartProducts = v;
  }

  public get user(): User {
    return this._user;
  }

  public set user(v: User) {
    this._user = v;
  }

  public get value(): number {
    if (this._cartProducts.length === 0) return 0;

    return this._cartProducts.reduce((acc, current) => {
      return acc + current.product.value * current.quantity;
    }, 0);
  }

  public addProducts(...cartProducts: CartProduct[]) {
    cartProducts.forEach((cartProduct) => {
      const existingCartProductIndex = this.serchCartProdutIndex(cartProduct);

      if (existingCartProductIndex !== -1) {
        return (this.cartProducts[existingCartProductIndex].quantity +=
          cartProduct.quantity);
      }

      this.cartProducts = [...this.cartProducts, cartProduct];
    });
  }

  public removeProducts(...cartProducts: CartProduct[]) {
    cartProducts.forEach((cartProduct) => {
      const existingCartProductIndex = this.serchCartProdutIndex(cartProduct);

      if (existingCartProductIndex === -1)
        throw new Error("CartProduct not found");

      this.cartProducts.splice(existingCartProductIndex, 1);
    });
  }

  public increaseProductQuantity(product: Product, quantity: number) {
    const cartProductIndex = this.searchProductIndex(product);

    this.cartProducts[cartProductIndex].quantity += quantity;
  }

  public decreaseProductQuantity(product: Product, quantity: number) {
    const cartProductIndex = this.searchProductIndex(product);

    if (this.cartProducts[cartProductIndex].quantity <= quantity) {
      this.removeProducts(this.cartProducts[cartProductIndex]);
      return;
    }

    this.cartProducts[cartProductIndex].quantity -= quantity;
  }

  private searchProductIndex(product: Product) {
    const cartProductIndex = this.cartProducts.findIndex(
      (cp) => cp.product.name === product.name
    );

    if (cartProductIndex === -1) throw new Error("Produto não encontrado");

    return cartProductIndex;
  }

  private serchCartProdutIndex(cartProduct: CartProduct) {
    const existingCartProductIndex = this.cartProducts.findIndex(
      (fnCartProduct) => cartProduct.product.name === fnCartProduct.product.name
    );

    return existingCartProductIndex;
  }
}

export default Cart;
