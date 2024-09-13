// votre code ici
function checkAge(age) {
  if (age < 18) {
    console.log("Vous êtes mineur.");
  } else if (age > 65) {
    console.log("Vous êtes senior.");
  } else {
    console.log("Vous êtes majeur.");
  }
}

checkAge(15); 

export default checkAge;

  


