
//trim()
let rawInput="   loure@gmail.com   "
let clenInput=rawInput.trim();

console.log(rawInput);
console.log(clenInput)


//"length","toLowerCase()","toUpperCase()"

let productCode="PROD-365"
console.log(productCode.length);
console.log(productCode.toLowerCase());
console.log(productCode.toUpperCase());

//"includes","starsWith","endsWith"

const fileName="report_2026.pdf"
console.log(fileName.includes("2026"));  //true
console.log(fileName.startsWith("rep")); //true
console.log(fileName.endsWith(".jpg"));  //false

//"slice()", "replace()"

let fullsentence="i love you"
let programmingWord=fullsentence.slice(7,10);
console.log(programmingWord);


let customizedSentece=fullsentence.replace("you","me");
console.log(customizedSentece);


//split()

let csvTags="javascript,css,html"
let arrayTag=csvTags.split();
console.log(arrayTag);





