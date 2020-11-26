import Product from "./product";

class CartProduct {
  constructor(private _product: Product, private _quantity: number) {}

  public get product(): Product {
    return this._product;
  }

  public set product(v: Product) {
    this._product = v;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public set quantity(v: number) {
    this._quantity = v;
  }
}

export default CartProduct;
