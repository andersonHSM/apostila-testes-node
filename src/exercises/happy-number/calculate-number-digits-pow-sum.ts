const calculateNumberDigitsPowSum = (number: number) => {
  const numberToString = number
    .toString()
    .split("")
    .map((string) => Math.pow(+string, 2))
    .reduce((acc, current) => {
      return acc + current;
    }, 0);

  return numberToString;
};

export default calculateNumberDigitsPowSum;
