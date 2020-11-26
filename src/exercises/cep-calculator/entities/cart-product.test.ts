import CartProduct from "./cart-product";
import Product from "./product";
import User from "./user";

describe("Cart Product Test", () => {
  let product1: Product,
    product2: Product,
    cartProduct: CartProduct,
    user: User;

  beforeEach(() => {
    user = new User("Anderson", "49900000");

    product1 = new Product("Produto 1", 50);
    product2 = new Product("Produto 2", 100);

    cartProduct = new CartProduct(product1, 2);
  });

  test(`o getter 'product' deve retornar a instância correta do produto`, () => {
    expect(cartProduct.product).toStrictEqual(product1);
  });

  test(`o setter 'product' deve alterar a instância do produto corretamente`, () => {
    expect(cartProduct.product).toStrictEqual(product1);

    cartProduct.product = product2;

    expect(cartProduct.product).toStrictEqual(product2);
  });

  test(`o getter 'quantity' deve retornar a quantidade correta`, () => {
    expect(cartProduct.quantity).toBe(2);
  });

  test(`o setter 'quantity' deve alterar corretamente a quantidade`, () => {
    expect(cartProduct.quantity).toBe(2);

    cartProduct.quantity = 3;

    expect(cartProduct.quantity).toBe(3);
  });
});
