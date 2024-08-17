function iterateAndSum(array) {
  return array.reduce((acc, current) => acc + current, 0);
}

const array1 = [1, 2, 3];
const sum1 = iterateAndSum(array1);
console.log(sum1); // Output: 6

const array2 = [10, 10, 10, 10];
const sum2 = iterateAndSum(array2);
console.log(sum2); // Output: 40
