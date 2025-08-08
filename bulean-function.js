

// bulean-function.js

function  bulean (number , Doublea){

    // console.log(number, Doublea);
    if(Doublea === true){
        const result = number *3;
        return result;
    }else{
        const restule = number *5;
        return restule;
    }
}


const newre = bulean(5 , true);
console.log('True valus',newre);
const newers = bulean(75 , false);
console.log('Falues Values ',newers);