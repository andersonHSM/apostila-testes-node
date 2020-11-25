import { multiplesOf3Or5, multiplesOf3And5, multiplesOf3Or5And7 } from "./multiples";

describe("Testes exercício 1", () => {
  test("soma dos valores múltiplos de 3 ou 5 abaixo de 1000", () => {
    expect(multiplesOf3Or5()).toBe(233168);
  });

  test("soma dos valores múltiplos de 3 e 5 abaixo de 1000", () => {
    expect(multiplesOf3And5()).toBe(33165);
  });

  test("soma dos valores múltiplos de (3 ou 5) e 7 abaixo de 1000", () => {
    expect(multiplesOf3Or5And7()).toBe(33173);
  });
});
