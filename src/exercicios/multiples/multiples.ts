export const isMultipleOf3Or5 = (index: number) => {
  return index % 3 === 0 || index % 5 === 0;
};

export const isMultipleOf3And5 = (index: number) => {
  return index % 3 === 0 && index % 5 === 0;
};

export const isMultipleOf3Or5And7 = (index: number) => {
  return (index % 3 === 0 || index % 5 === 0) && index % 7 === 0;
};

export const multiples = () => {
  let multiples = {
    threeAndFive: [],
    threeOrFive: [],
    threeOrFiveAndSeven: [],
  };

  for (let index = 0; index < 1000; index++) {
    if (isMultipleOf3Or5(index)) {
      multiples.threeOrFive = multiples.threeOrFive.concat(index);
    }

    if (isMultipleOf3And5(index)) {
      multiples.threeAndFive = multiples.threeAndFive.concat(index);
    }

    if (isMultipleOf3Or5And7(index)) {
      multiples.threeOrFiveAndSeven = multiples.threeOrFiveAndSeven.concat(index);
    }
  }

  multiples.threeOrFive = multiples.threeOrFive.reduce(
    (acc, current) => acc + current,
    0
  );

  multiples.threeAndFive = multiples.threeAndFive.reduce(
    (acc, current) => acc + current,
    0
  );

  multiples.threeOrFiveAndSeven = multiples.threeOrFiveAndSeven.reduce(
    (acc, current) => acc + current,
    0
  );

  return multiples;
};

