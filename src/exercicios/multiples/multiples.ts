export const multiplesOf3Or5 = () => {
  let multiples = [];

  for (let index = 0; index < 1000; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      multiples = multiples.concat(index);
    }
  }

  return multiples.reduce((acc, current) => acc + current, 0);
};

export const multiplesOf3And5 = () => {
  let multiples = [];

  for (let index = 0; index < 1000; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      multiples = multiples.concat(index);
    }
  }

  return multiples.reduce((acc, current) => acc + current, 0);
};

export const multiplesOf3Or5And7 = () => {
  let multiples = [];

  for (let index = 0; index < 1000; index++) {
    if ((index % 3 === 0 || index % 5 === 0) && index % 7 === 0) {
      multiples = multiples.concat(index);
    }
  }

  return multiples.reduce((acc, current) => acc + current, 0);
};
