import calculateNumberDigitsPowSum from "./calculate-number-digits-pow-sum";
import verifyIfHappyNumber from "./verify-if-happy-number";

const happyNumber = (number: number) => {
  let result = true;

  if (number === 1) {
    return result;
  }

  let processedNumbers = [number];

  let currentNumber = number;


  while (currentNumber !== 1) {
    currentNumber = calculateNumberDigitsPowSum(currentNumber);
    
    result = verifyIfHappyNumber(processedNumbers, currentNumber);

    if (!result) break;

    processedNumbers = [...processedNumbers, currentNumber];

  }

  return result;
};


export default happyNumber;
