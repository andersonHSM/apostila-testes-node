import isMultipleOf3And5 from "./is-multiple-of-three-and-five";
import isMultipleOf3Or5 from "./is-multiple-of-three-or-five";
import isMultipleOf3Or5And7 from "./is-multiple-of-three-or-five-and-seven";
import multiples  from "./multiples";

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

  test("verifica se a função retorna corretamente um número múltiplo de 3 ou 5", () => {
    expect(isMultipleOf3Or5(9)).toBe(true);

    expect(isMultipleOf3Or5(5)).toBe(true);

    expect(isMultipleOf3Or5(4)).toBe(false);
  });

  test("verifica se a função retorna corretamente um número múltiplo de 3 e 5", () => {
    expect(isMultipleOf3And5(9)).toBe(false);

    expect(isMultipleOf3And5(5)).toBe(false);

    expect(isMultipleOf3And5(15)).toBe(true);
  });

  test("verifica se a função retorna corretamente um número múltiplo de (3 ou 5) e 7", () => {
    expect(isMultipleOf3Or5And7(7)).toBe(false);
    
    expect(isMultipleOf3Or5And7(14)).toBe(false);
    
    expect(isMultipleOf3Or5And7(21)).toBe(true);
    
    expect(isMultipleOf3Or5And7(42)).toBe(true);
  });
});
