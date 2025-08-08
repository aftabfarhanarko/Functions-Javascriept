
// Functions in Arry argumete

function arrayes (number){
     const result = number;
     result[3]=555;
     result[0]=0;
     result.pop();
     result.push(982);
     result.sort();
     return result;
}

const values = arrayes([44,55,66,22,88,99,121]);
console.log(values);