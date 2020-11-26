import happyNumber from "../happy-number/happy-number";
import isPrimeNumber from "./is-prime-number";
import removeNonLetterCharacters from "./remove-non-letter-characters";
import replaceLettersByNumbers from "./replace-letters-by-numbers";
import isMultipleOf3Or5Fn from "../multiples/is-multiple-of-three-or-five";

const wordToNumber = (word: string) => {
  const cleanWord = removeNonLetterCharacters(word);

  const wordCharactersNumbers = replaceLettersByNumbers(cleanWord);

  const charactersSum = wordCharactersNumbers.reduce(
    (acc, current) => acc + current,
    0
  );

  const isHappy = happyNumber(charactersSum);
  const isPrime = isPrimeNumber(charactersSum);
  const isMultipleOf3Or5 = isMultipleOf3Or5Fn(charactersSum);

  return { isHappy, isPrime, isMultipleOf3Or5 };
};

export default wordToNumber;
