//1-function declaration

function showWelcomeMessage(){
    console.log("WELCOME TO JAVASCRIPT REPOSITORY");
}

showWelcomeMessage();

//2-function with parameters

function greetUser(userName,role){
    console.log(`hello ${userName} your role is ${role}`);
}

greetUser("lourenco", "admin")


//3-Return 
 
function calculateRectangleArea(width, height){
    const area=width*height;
    return area;
}

let roomArea=calculateRectangleArea(2,3);
console.log(roomArea);


//Arrow function

const multiply=(number1,number2)=>{
  return number1*number2;
}

//Function Expression

const calculateDiscount=function(originalPrice,discountPercentage){
    const discountAmount=originalPrice*(discountPercentage/100);
    return originalPrice-discountAmount;
}

const finalPrice=calculateDiscount(1500.00,10);
console.log(finalPrice);

