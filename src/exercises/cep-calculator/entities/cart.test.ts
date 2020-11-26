import Cart from "./cart";
import CartProduct from "./cart-product";
import Product from "./product";
import User from "./user";

describe("Cart test", () => {
  let user: User;

  let product1: Product,
    product2: Product,
    product3: Product,
    cartProduct1: CartProduct,
    cartProduct2: CartProduct,
    cartProduct3: CartProduct,
    cartProducts: CartProduct[] = [];

  beforeEach(() => {
    user = new User("Anderson", "49900000");

    product1 = new Product("Produto 1", 50);
    product2 = new Product("Produto 2", 100);
    product3 = new Product("Produto 3", 150);

    cartProduct1 = new CartProduct(product1, 2);
    cartProduct2 = new CartProduct(product2, 1);
    cartProduct3 = new CartProduct(product2, 3);
  });

  test(`deve retornar '0' se o carrinho não tiver nenhum item`, () => {
    const cart = new Cart(cartProducts, user);

    expect(cart.value).toBe(0);
  });

  test(`'cartProducts' retorna a instância correta dos produtos`, () => {
    cartProducts = [cartProduct1, cartProduct2];

    const cart = new Cart(cartProducts, user);

    expect(cart.cartProducts).toStrictEqual(cartProducts);
  });

  test(`o setter 'cartProducts' altera corretamente a instância`, () => {
    cartProducts = [cartProduct1, cartProduct2];

    const cart = new Cart(cartProducts, user);

    expect(cart.cartProducts).toStrictEqual(cartProducts);

    const newCartProducts = [...cartProducts, cartProduct3];

    cart.cartProducts = newCartProducts;

    expect(cart.cartProducts).toStrictEqual(newCartProducts);
  });

  test(`o getter 'user' deve retornar a instância de usuário correta`, () => {
    const cart = new Cart(cartProducts, user);

    expect(cart.user).toStrictEqual(user);
  });

  test(`o setter 'user' deve alterar a instância de usuário correta mente`, () => {
    const cart = new Cart(cartProducts, user);

    expect(cart.user).toStrictEqual(user);

    const newUser = new User("João", "49020587");

    cart.user = newUser;

    expect(cart.user).toStrictEqual(newUser);
  });

  test(`deve retornar o valor correto quando o carrinho tiver pelo menos um produto`, () => {
    cartProducts = [cartProduct1, cartProduct2];

    const cart = new Cart(cartProducts, user);

    expect(cart.value).toBe(200);
  });
});
