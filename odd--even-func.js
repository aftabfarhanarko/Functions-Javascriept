
//string-even/odd-func.js


function stringEven (name){
    console.log(name, name.length);
    if(name.length % 2 === 0){
        return true;
    }
    return false;

}


const names = "JavaScripetr";
console.log(names.length);
const restule = stringEven(names);
const restule2 = stringEven("Receat");
console.log(restule);