

function Sum (number){
    console.log('The array of : ',number);

    let sum = 0;
    for(let numbers of number){
        sum = sum +numbers;
    }
    return sum;

}


const values = Sum([22,33,444,555,666,7,7,7,78]);
console.log(values);