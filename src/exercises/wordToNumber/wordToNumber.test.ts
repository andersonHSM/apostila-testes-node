import isPrimeNumber from "./is-prime-number";
import removeNonLetterCharacters from "./remove-non-letter-characters";
import replaceLettersByNumbers from "./replace-letters-by-numbers";
import wordToNumber from "./wordToNumber";

describe("Testes exercício 3", () => {
  describe("removeNonLetterCharacters", () => {
    test(`deve retornar 'abcd' para a string 'a1b2c3d4'`, () => {
      expect(removeNonLetterCharacters("a1b2c3d4")).toBe("abcd");
    });

    test(`deve retornar 'z9x8c4a7s5' para a string 'zxcas'`, () => {
      expect(removeNonLetterCharacters("z9x8c4a7s5")).toBe("zxcas");
    });
  });

  describe("replaceLetterByNumbers", () => {
    test(`deve retornar '[1, 2, 3]' para a string 'abc'`, () => {
      expect(replaceLettersByNumbers("abc")).toStrictEqual([1, 2, 3]);
    });

    test(`deve retornar '[26, 52]' para a string 'zZ'`, () => {
      expect(replaceLettersByNumbers("zZ")).toStrictEqual([26, 52]);
    });
  });

  describe("isPrimeNumber", () => {
    test(`deve retornar 'false' para o número '1'`, () => {
      expect(isPrimeNumber(1)).toBe(false);
    });

    test(`deve retornar 'false' para o número '4'`, () => {
      expect(isPrimeNumber(4)).toBe(false);
    });

    test(`deve retornar 'false' para o número '15'`, () => {
      expect(isPrimeNumber(15)).toBe(false);
    });

    test(`deve retornar 'true' para o número '2'`, () => {
      expect(isPrimeNumber(2)).toBe(true);
    });

    test(`deve retornar 'true' para o número '7'`, () => {
      expect(isPrimeNumber(7)).toBe(true);
    });

    test(`deve retornar 'true' para o número '41'`, () => {
      expect(isPrimeNumber(41)).toBe(true);
    });
  });

  describe("wordToNumber", () => {
    test(`deve retornar '{isPrime: true, isHappy: true, isMultipleOf3Or5: false}' for string 'cd'`, () => {
      expect(wordToNumber("cd")).toStrictEqual({
        isPrime: true,
        isHappy: true,
        isMultipleOf3Or5: false,
      });
    });

    test(`deve retornar '{isPrime: true, isHappy: false, isMultipleOf3Or5: false}' for string 'cdd'`, () => {
      expect(wordToNumber("cdd")).toStrictEqual({
        isPrime: true,
        isHappy: false,
        isMultipleOf3Or5: false,
      });
    });

    test(`deve retornar '{isPrime: false, isHappy: false, isMultipleOf3Or5: false}' for string 'abc'`, () => {
      expect(wordToNumber("abc")).toStrictEqual({
        isPrime: false,
        isHappy: false,
        isMultipleOf3Or5: true,
      });
    });
  });
});
