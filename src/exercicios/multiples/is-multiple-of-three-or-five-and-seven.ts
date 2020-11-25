import isMultipleOf3And5 from "./is-multiple-of-three-and-five";

const isMultipleOf3Or5And7 = (index: number) => {
    return (index % 3 === 0 || index % 5 === 0) && index % 7 === 0;
  };

  export default isMultipleOf3Or5And7;