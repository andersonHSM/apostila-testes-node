import CartProduct from "./cart-product";
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
}

export default Cart;
