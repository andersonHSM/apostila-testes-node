const removeNonLetterCharacters = (word: string) => {
  const exp = /[^a-zA-z]/g;

  return word.replace(exp, "");
};

export default removeNonLetterCharacters;
