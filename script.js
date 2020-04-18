// Assignment Code
var howMany = prompt("How many characters do you want?");
var specialCharacters = confirm("Do you want special characters?");
var wantUpperCase = confirm("Do you want uppercase letters?");
var wantNumbers = confirm("Do you want numbers?");


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
