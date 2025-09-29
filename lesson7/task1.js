const numbers = [0,-1,2,3,-4,5,6,7,-8,9,10];
let positive = 0;
let negative = 0;
let numberZero = 0;

for (const number of numbers) {
  if (number > 0) {
    positive++;
  } else if (number < 0) {
    negative++;
  } else {
    numberZero++;
  }
}
console.log('Positive ' + positive);
console.log('Negative ' + negative);
console.log('Zero ' + numberZero);