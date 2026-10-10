//1
//string
let frontendTecnologies=["React","Javascript","Css", "Html"];
//NUMBER
let examscore=[10,13,14,17];

//2
console.log(frontendTecnologies[1]);
console.log(examscore[1]);

//"push()","pop()","shift()","unshift()"

let cartItem=["mouse","keyboard"]
cartItem.unshift("monitor");
cartItem.push("motherboard");

console.log(cartItem);

//"includes()", "indexof()"

let allowedUsers=["ALice","Bob", "Charlie"];

console.log(allowedUsers.includes("ALice"));
console.log(allowedUsers.indexOf("Bob"));
console.log(allowedUsers.indexOf("Charlie"));

//join()

let technologies=["Spring Boot", "Docker", "Kubernates"];
let techJoined=technologies.join(",");

console.log(techJoined);









