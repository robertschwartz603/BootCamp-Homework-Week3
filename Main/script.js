// Assignment Code
var generateBtn = document.querySelector("#generate");

//alphabet generator & logger <---commented out for a simpler fix (program returning undefined values in finalPassword array)
//var alpha = Array.from(Array(26)).map((e, i) => i + 65);
//var alphabet = alpha.map((x) => String.fromCharCode(x));
//console.log(alphabet);

// other var values
var numbers = "0123456789".split("");
//var upperCase = alphabet.toString().split(""); <---commented out for a simpler fix (program returning undefined values in finalPassword array)
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//var lowerCase = alphabet.map(alphabet => alphabet.toLowerCase()); <---commented out for a simpler fix (program returning undefined values in finalPassword array)
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var special = "~!@#$%^&*()_+=".split("");
var passwordLength = 0
var options = [];
var finalPassword = [];

//randvalue for each input
var numberRand = Math.floor(Math.random() * numbers.length);
var letterRand = Math.floor(Math.random() * upperCase.length);
var specialRand = Math.floor(Math.random() * special.length);

//debug logging array variable values
console.log(numbers);
console.log(upperCase);
console.log(lowerCase);
console.log(special);

//debug logging array rand numbers
console.log(numberRand);
console.log(letterRand);
console.log(specialRand);

//password generator function
function generatePassword() {

  //series of concatenating prompts that populates the options array
  if (confirm("Do you want to include numbers")) {
    options = options.concat(numbers[numberRand]);
  }

  if (confirm("Do you want to include uppercase letters")) {
    options = options.concat(upperCase[letterRand]);
  }

  if (confirm("Do you want to include lowercase letters")) {
    options = options.concat(lowerCase[letterRand]);
  }

  if (confirm("Do you want to include special characters")) {
    options = options.concat(special[specialRand]);
  }

  //getting password length input
  var passwordLength = window.prompt("length of password?");

  //validates password length parameters
  if (passwordLength == '' || passwordLength < 8 || passwordLength > 128) {
    alert('please enter a password length of at least 8 and no more than 128');
    var passwordLength = window.prompt("length of password?");
  } else {
    alert('this password length is acceptable')
  }

  //applies password length to the array
  options.length = passwordLength

  //password length debuging loggers
  console.log(passwordLength);
  console.log(options.length);

  //loop array with password length
  for (i = 0; i < passwordLength; i++) {
    finalPassword[i] = options[Math.floor(Math.random() * options.length)];
  }

  //PERSONAL BONUS: randomize array values (Fisher-Yates Algorithm)
  // -------- couldnt get this to work right. -----------
  // function shuffle(options){
  //   for (let i = options.length - 1; i > 0; i--){
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [options[i], options[j]] = [options[j], options[i]];
  //   }
  //    return options;
  //  }

  console.log(finalPassword);

  //return password value at end of function and removes array commas
  return finalPassword.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//unused extra - refeshes page for repeat uses. couldn't find a proper place for it that wouldn't break anything
//window.location.reload();