function countAandB(input){
    count=0
    input.forEach(function(value) {
        if (value == 'a'||value =='b'){
            count+=1;
        }
    });
    return count;
}
function toNumber(input){
    let result=[];
    transfer={'a':1,'b':2,'c':3,'d':4,'e':5};
    input.forEach(function(value){
        result.push(transfer[value]);
    });
    return result;
}

let input1 = ['a','b','c','a','c','a','c'];
let input2 = ['e','d','c','d','e'];
console.log(countAandB(input1));
console.log(toNumber(input1));
console.log(countAandB(input2));
console.log(toNumber(input2))