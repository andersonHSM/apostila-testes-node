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
    cartProduct3 = new CartProduct(product3, 3);
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

  test(`a função 'addProduct' deve adicionar um novo produto à lista se não existir`, () => {
    cartProducts = [cartProduct1];
    const cart = new Cart(cartProducts, user);

    expect(cart.cartProducts).toStrictEqual(cartProducts);

    cart.addProduct(cartProduct2);

    expect(cart.cartProducts).toStrictEqual([...cartProducts, cartProduct2]);
  });

  test(`a função 'addProduct' deve adicionar à quantidade do produto caso ele já exista`, () => {
    cartProducts = [cartProduct1];
    const cart = new Cart(cartProducts, user);

    expect(cart.cartProducts).toStrictEqual(cartProducts);

    cart.addProduct(cartProduct1);

    let [product] = cartProducts;

    product.quantity += cartProduct1.quantity;

    expect(cart.cartProducts).toStrictEqual([product]);
  });

  test(`a função 'increaseProductQuantity' deve aumentar a quantidade de um produto pelo valor informado`, () => {
    cartProducts = [cartProduct1];

    const cart = new Cart(cartProducts, user);

    expect(cart.cartProducts[0].quantity).toBe(2);

    cart.increaseProductQuantity(product1, 2);

    expect(cart.cartProducts[0].quantity).toBe(4);
  });

  test(`a função 'increaseProductQuantity' deve retornar um erro ao tentar adicionar um produto que não existe`, () => {
    cartProducts = [cartProduct1];

    const cart = new Cart(cartProducts, user);

    expect(cart.cartProducts[0].quantity).toBe(2);

    expect(() => cart.increaseProductQuantity(product2, 2)).toThrow();
  });
});
