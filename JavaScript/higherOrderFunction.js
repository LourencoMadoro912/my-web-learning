const processNumber=(numberArray,operationNumber)=>{
const resut=[];

for(let number of numberArray){
    resut.push(operationNumber(number));
}

return resut;
}

let numberList=[2,4,6,8,10];
const doubeNumber=(number)=>number*2;
const squareNumber=(number)=>number*number;

const doubleList=processNumber(numberList,doubeNumber);
const squareList=processNumber(numberList,squareNumber);

console.log(doubleList);
console.log(squareList);