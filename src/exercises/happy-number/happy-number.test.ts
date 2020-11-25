import calculateNumberDigitsPowSum from "./calculate-number-digits-pow-sum";
import happyNumber from "./happy-number";
import verifyIfHappyNumber from "./verify-if-happy-number";

describe("Teste dos exercícios 2", () => {
  test(`deve retornar 'true' caso valor informado seja '1'`, () => {
    expect(happyNumber(1)).toBe(true);
  });

  test(`deve retornar a soma dos quadrados dos dígitos do número informado`, () => {
    expect(calculateNumberDigitsPowSum(8)).toEqual(64);

    expect(calculateNumberDigitsPowSum(12)).toEqual(5);

    expect(calculateNumberDigitsPowSum(21)).toEqual(5);

    expect(calculateNumberDigitsPowSum(25)).toEqual(29);
  });

  test(`deve verificar se o número atual não viola a regra para um númeo feliz`, () => {
    expect(verifyIfHappyNumber([1, 15, 23, 19], 12)).toBe(true);

    expect(verifyIfHappyNumber([1, 15, 23, 19], 19)).toBe(false);
  });

  test("deve verificar se um dado número é feliz ou não", () => {
    expect(happyNumber(7)).toBe(true);

    expect(happyNumber(1)).toBe(true);

    expect(happyNumber(8)).toBe(false);

    expect(happyNumber(10)).toBe(true);
  });
});
