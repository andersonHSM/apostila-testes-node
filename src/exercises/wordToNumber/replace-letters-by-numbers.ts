const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const replaceLettersByNumbers = (word: string) => {
  const characters = word.split("");

  const charactersIndexes = characters.map(
    (character) => alphabet.indexOf(character) + 1
  );

  return charactersIndexes;
};

export default replaceLettersByNumbers;
