import Product from "./product";

describe("Product Test", () => {
  let product: Product;

  beforeEach(() => {
    product = new Product("Produto teste", 50);
  });

  test(`o getter name deve retornar corretamente o nome do produto`, () => {
    expect(product.name).toBe("Produto teste");
  });

  test(`o setter 'name' deve alterar corretamente o nome do produto`, () => {
    expect(product.name).toBe("Produto teste");

    const name = "Produto teste editado";
    product.name = name;

    expect(product.name).toBe(name);
  });

  test(`o getter value deve retornar corretamente o nome do produto`, () => {
    expect(product.value).toBe(50);
  });

  test(`o setter 'value' deve alterar corretamente o nome do produto`, () => {
    expect(product.value).toBe(50);

    const value = 100;
    product.value = value;

    expect(product.value).toBe(value);
  });
});
