let numbers = (arr) => 
{
  let numbers = [0];
  let alph = [0];
  let endArr = [0];

  numbers = arr.filter((val) => typeof val === "number");

  alph = arr.filter((val) => typeof val === "string");

  endArr = [...numbers, ...alph];

  return endArr;
};

let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];

console.log(numbers(arr));