// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
var upperArray = ["A","B","C",]
var numbArray = ["1","2", "3",]
  var passwordLength = 8
 // ask user atttributes of password
// var includeUppercase = confirm("would you like Uppercase letters in your password?")
// var includeLowercase = confirm ("would you like Lowercase letters in your password?")
// var includeSpecialchar = confirm("would you like Specail Characters in your password?")
// var includeDigits = confirm ("Would you like Digits in your password?")
// build password based on attributes inputs
var retunedPassword = ""
for (let index = 0; index < passwordLength; index++) {retunedPassword = retunedPassword+upperArray[1]
console.log (index)
  
}


// return completed password
  return retunedPassword
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
