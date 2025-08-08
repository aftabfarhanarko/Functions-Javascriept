/**
 * Objective : write a function to give me sum of all array
 */

function SumOfAll(number) {
    let sum = 0;
 
    for (let point of number) {
        sum = point + sum;
   
  }
   return sum;
}

const variable = SumOfAll([33, 44, 555, 11, 22, 99]);
console.log(variable);
