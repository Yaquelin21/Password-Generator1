// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var passwordnumbers = "0123456789";
    var passwordlowcase = "abcdefghijklmnopqrstuvwxyz"
    var passwordupcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwordChars = "#@*!%&()/"
    var passempty = ""
    var randPwLen = parseInt(prompt("Please Enter Password Lenght"));
    while (randPwLen < 8 || randPwLen > 128) {
        randPwLen = parseInt(prompt("Please Enter Password Lenght (it should be between 8 to 128)"))
    }
    if (confirm("Would you like to use number")) {
        passempty += passwordnumbers;
    }
    if (confirm("Would you like to use uppercase letter")) {
        passempty += passwordupcase;
    }
    if (confirm("Would you like to use lowercase letters")) {
        passempty += passwordlowcase;
    }
    if (confirm("Would you like to use characters")) {

        passempty += passwordChars;
    }
    var passwordText = Array(randPwLen).fill(passempty).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return passwordText;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);