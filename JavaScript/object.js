//1-creating
const userProfile={
    firstName:"Alex",
    lastName:"Developer",
    age:28,
    isActive: true,
    skills: ["java", "javascript","Spring boot"]
}

//2.1-Dot Notion
console.log(userProfile.skills[1]);
//2.2-Bracket Notation
console.log(userProfile["lastName"]);

//3-Modifying, Adding and Removing

const computerConfig={
    brand:"Dell",
    ram: "16 gb",

    printInfo: function(){
        return `${this.brand} : ${this.ram}`
    }
};

console.log(computerConfig.printInfo());


//Modifying
computerConfig.brand="Think Pad"
console.log(computerConfig.brand);

//Adding
computerConfig.storage="512 SSD";
console.log(computerConfig.storage);

//Removing
delete computerConfig.brand;
console.log(computerConfig.brand);




