class Product {
  constructor(private _name: string, private _value: number) {}

  public get value(): number {
    return this._value;
  }

  public set value(v: number) {
    this._value = v;
  }

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }
}

export default Product;
