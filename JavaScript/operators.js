//%

const itemPrice=90;
if (itemPrice%2===0){
    console.log("Even");
}else{
    console.log("Odd");
    
}

// "+" and "-"

const shipingCost=20;
const discount=5;

const grandTotal=itemPrice+shipingCost-discount;

console.log(grandTotal);

//assigment operator ("+=","-=","*=","++","--")

let number=2;

if(number%2===0){
    number+=2; // number=number+2;
}else{
    number++;  // number=number+1;
}

//comparison operation

let boolean;
let first=1;
let last=2;

if(first===last){
    boolean=true;
}else if(first!==last){
    boolean=false;
}

if(first<=last){
    console.log(`${first} Less than ou equal to ${last}`);
}else if(first>=last){
    console.log(`${first} Greater than or equal to ${last}`);
}

//Logical Operators

//AND
const hasTicket=true;
const isAgeValid=true;

let canEnterEvent=hasTicket+isAgeValid; //true

//OR

const hasCreditCard=false;
const hasCash=true;
const canPay=hasCreditCard || hasCash; //true

//Not

const isBlocked=false;
const canAcessSystem=!isBlocked; //true


//Ternary Operators

const acountBalance=150;
const productPrice=200;

const paymentStatus=acountBalance>=productPrice?"Approved":"Insfufficient funds"

console.log(paymentStatus);



