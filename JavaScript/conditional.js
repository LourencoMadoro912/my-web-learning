const userAge = 20;

if (userAge < 13) {
  console.log("Category: Child");
} else if (userAge >= 13 && userAge < 18) {
  console.log("Category: Teenager");
} else {
  console.log("Category: Adult");
}


const userRole = "editor";

switch (userRole) {
  case "admin":
    console.log("Access granted to all system settings.");
    break; // O break impede que o código continue executando os próximos casos

  case "editor":
    console.log("Access granted to create and edit content.");
    break;

  case "viewer":
    console.log("Access granted to read content only.");
    break;

  default:
    console.log("Unknown role. Access denied.");
}