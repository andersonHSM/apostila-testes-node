import { mocked } from "ts-jest/utils";
import Cart from "./cart";
import CartProduct from "./cart-product";
import CepCalculator from "./cep-calculator";

import CorreiosService from "./correios-service";
import Product from "./product";
import User from "./user";
jest.mock("./correios-service");

const mockedCorreiosService = mocked(CorreiosService, true);

describe("CEP Calculator", () => {
  let cepCalculator: CepCalculator,
    product: Product,
    cartProduct: CartProduct,
    user: User,
    cart: Cart;

  beforeEach(() => {
    mockedCorreiosService.mockClear();
    mockedCorreiosService.mockImplementation(() => {
      return {
        getCepValue: () => 50,
      };
    });

    product = new Product("Produto 1", 40);
    user = user = new User("Anderson", "49900000");
    cartProduct = new CartProduct(product, 2);
    cart = new Cart([cartProduct], user);

    cepCalculator = new CepCalculator(new CorreiosService());
  });

  test(`deve retornar o valor dos produtos acrescido de frete quando menor que '100'`, () => {
    expect(cepCalculator.calculateShipping(cart)).toBe(130);
  });

  test(`deve retornar apenas o  valor dos produtos quando maior que '100'`, () => {
    const product = new Product("Produto 2", 80);
    const cartProduct = new CartProduct(product, 1);

    cart.cartProducts = [...cart.cartProducts, cartProduct];
    expect(cepCalculator.calculateShipping(cart)).toBe(160);
  });
});
