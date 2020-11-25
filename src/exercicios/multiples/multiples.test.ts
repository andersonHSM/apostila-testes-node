import { multiples } from "./multiples";

describe("Testes exercício 1", () => {
  test("soma dos valores múltiplos de 3 ou 5 abaixo de 1000", () => {
    expect(multiples().threeOrFive).toBe(233168);
  });

  test("soma dos valores múltiplos de 3 e 5 abaixo de 1000", () => {
    expect(multiples().threeAndFive).toBe(33165);
  });

  test("soma dos valores múltiplos de (3 ou 5) e 7 abaixo de 1000", () => {
    expect(multiples().threeOrFiveAndSeven).toBe(33173);
  });
});
