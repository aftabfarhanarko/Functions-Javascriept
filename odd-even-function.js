/**
 * Creat FUnction That Will Return Odd and Even Number 
 * Total Sun Odd and Even NUmber 
 */

function totatSum (number){
    let total = 0;
    for(let count of number){
        if(count % 2 === 0){
         total =  total + count;
        }else{
               
        }
    }
    return total;
}


const values = [21,22,66,44,33,99];

 const result = totatSum(values);
console.log('Total Even Number sum :',result);


function evenArray (number){
   let even = [];
    for(let NUmber of number){
        if(NUmber % 2 === 0){
            even.push(NUmber);
           
        }
    }
     return even;
}

let vArt =  evenArray(values);

console.log('Even Number Array is : ',vArt);