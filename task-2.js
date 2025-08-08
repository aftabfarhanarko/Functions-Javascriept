
/**
 * Task-2
Take a number if the number is odd multiply it 
by 2 and return the result. If the number is even divide it by two and return the result.
 */

function evenNumber (number){
   console.log('The Number is :',number);
    if(number % 2 === 0){
        return number / 2;
    }else{
        return number * 2;
    }
}


let number = 33;

let result = evenNumber(number);
console.log(result);