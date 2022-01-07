// Assignment Code
var generateBtn = document.querySelector("#generate");

//establishing array values
var numbers = Array.from(Array(10).keys());
var alpha = Array.from(Array(26)).map((e, i) => i + 65);
var alphabet = alpha.map((x) => String.fromCharCode(x));
var lowercase = alphabet.toString().toLowerCase();
var special = ["!","","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","|","{","}","~"];


//logging array variable values
console.log(numbers);
console.log(alphabet);
console.log(lowercase);
console.log(special);

//password generator function

function generatePassword() {
  //WRITE THE GENERATOR HERE
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
