import User from "./user";

describe("User test", () => {
  let user: User;

  beforeEach(() => {
    user = new User("Anderson", "49900000");
  });

  test(`o getter 'name' deve retornar o nome corretamente`, () => {
    expect(user.name).toBe("Anderson");
  });

  test(`o setter 'name' deve alterar o nome corretamente`, () => {
    expect(user.name).toBe("Anderson");

    const name = "João";
    user.name = name;

    expect(user.name).toBe(name);
  });

  test(`o getter 'name' deve retornar o nome corretamente`, () => {
    expect(user.cep).toBe("49900000");
  });

  test(`o setter 'cep' deve alterar o nome corretamente`, () => {
    expect(user.cep).toBe("49900000");

    const cep = "49030270";
    user.cep = cep;

    expect(user.cep).toBe(cep);
  });
});
