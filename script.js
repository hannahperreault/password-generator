var startButton = document.querySelector("#start");
startButton.addEventListener("click", askQuestions);
var generateBtn = document.querySelector("#generate");

var passwordFinal = [];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["~", "!", "@", "#", "$", "&", "^", "*", "(", ")", "-", "_"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var totalArray = [];




function askQuestions() {
    function checkPrompt() {
        howManyCheck = prompt("How many characters do you want? (8-128)");
        if (howManyCheck < 8 || howManyCheck > 128) {
            alert("Please choose a number 8-128");
            checkPrompt();
        }
    }

    checkPrompt();

    var howMany = howManyCheck;
    var specialCharacters = confirm("Do you want special characters?");
    var wantUpperCase = confirm("Do you want uppercase letters?");
    var wantNumbers = confirm("Do you want numbers?");
    var wantLowercase = confirm("Do you want lowercase letters?")
    var chosenLength = parseInt(howMany);
    // var totalArray1;

    function generatePassword() {
        if (specialCharacters) {
            var totalArray1 = totalArray.concat(special);
        } if (specialCharacters && wantUpperCase) {
            var totalArray1 = totalArray.concat(special, uppercase);
        } if (specialCharacters && wantUpperCase && wantNumbers) {
            var totalArray1 = totalArray.concat(special, uppercase, numbers);
        }
        if (specialCharacters && wantUpperCase && wantNumbers && wantLowercase) {
            var totalArray1 = totalArray.concat(special, uppercase, numbers, lowercase);
        }
        else if (specialCharacters && wantNumbers && wantLowercase) {
            var totalArray1 = totalArray.concat(special, numbers, lowercase);
        }
        else if (wantUpperCase && wantNumbers && wantLowercase) {
            var totalArray1 = totalArray.concat(uppercase, numbers, lowercase);
        }
        else if (wantUpperCase && wantNumbers) {
            var totalArray1 = totalArray.concat(uppercase, numbers);
        }
        else if (wantUpperCase) {
            var totalArray1 = totalArray.concat(uppercase);
        }
        else if (wantNumbers && wantLowercase) {
            var totalArray1 = totalArray.concat(numbers, lowercase);
        }
        else if (wantNumbers) {
            var totalArray1 = totalArray.concat(numbers);
        }
        else if (wantLowercase) {
            var totalArray1 = totalArray.concat(lowercase);
        }

        else if (specialCharacters === false && wantUpperCase === false && wantNumbers === false && wantLowercase === false) {
            alert("Select at least one type of character");
            askQuestions();
        }



        // console.log(totalArray1);
        var password = [];
        for (var i = 0; i < chosenLength; i++) {
            var totalCharacters = totalArray1[Math.floor(Math.random() * totalArray1.length)];
            password.push(totalCharacters);
        }
        // console.log(password);

        passwordFinal.push(password.join(""));
        // console.log(passwordFinal);
    }
    generatePassword();

}

function showPassword() {
    document.getElementById("password").innerHTML = passwordFinal;
}

generateBtn.addEventListener("click", showPassword);





