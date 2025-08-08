
/**
 * Task-3
Write a function called make_avg() which will 
take an array of integers and the size of that array
 and return the average of those values.
 */

 function arrayGor (number){
    console.log(number);
    let sum = 0;
    for(let count of number){
        sum = sum + count;
    }
    return sum / number.length;
}


 let font = [22,33,44,87,12];

 let result = arrayGor(font);

 console.log('Average of those array : ' ,result);