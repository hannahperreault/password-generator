// Assignment Code
var howMany = prompt("How many characters do you want?");
var specialCharacters = confirm("Do you want special characters?");
var wantUpperCase = confirm("Do you want uppercase letters?");
var wantNumbers = confirm("Do you want numbers?");


var generateBtn = document.querySelector("#generate");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var totalArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["~", "!", "@", "#", "$", "&", "^", "*", "(", ")", "-", "_"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var chosenLength = parseInt(howMany);
// var totalArray = [];
var totalArray1;
var passwordFinal = [];
function generatePassword() {
    if (specialCharacters) {
        var totalArray1 = totalArray.concat(special);
    } if (specialCharacters && wantUpperCase) {
        var totalArray1 = totalArray.concat(special, uppercase);
    } if (specialCharacters && wantUpperCase && wantNumbers) {
        var totalArray1 = totalArray.concat(special, uppercase, numbers);
    }
    if (specialCharacters && wantNumbers) {
        var totalArray1 = totalArray.concat(special, numbers);
    }

    if (wantUpperCase) {
        var totalArray1 = totalArray.concat(uppercase);
    }
    if (wantUpperCase && wantNumbers) {
        var totalArray1 = totalArray.concat(uppercase, numbers);
    }
    if (wantNumbers) {
        var totalArray1 = totalArray.concat(numbers);
    }



    console.log(totalArray1);
    var password = [];
    for (var i = 0; i < chosenLength; i++) {
        var totalCharacters = totalArray1[Math.floor(Math.random() * totalArray1.length)];
        password.push(totalCharacters);
    }
    console.log(password);

    passwordFinal.push(password.join(""));
    console.log(passwordFinal);

}


generatePassword();

console.log(passwordFinal);


function showPassword() {
    document.getElementById("password").innerHTML = passwordFinal;
}

generateBtn.addEventListener("click", showPassword);









// Write password to the #password input

//function writePassword() {

//}

// writePassword();



// function writePassword() {
//     var length = howMany;
//    var characters = "abcdefghijklmnop";
``
// }

// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

