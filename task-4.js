

/**
 * Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. */
 


function  count_zero (para){
    console.log('Parameter os string : ',para);
    
    return para.split('0').length-1;
} 


let values = '01100101010100110';

let rest = count_zero(values);

console.log('The element of string count :' ,rest ," time");


