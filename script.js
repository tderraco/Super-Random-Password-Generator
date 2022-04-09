
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passNumbers = "0123456789" 
var sym = "!@#$%^&*()_+"
var final = ""
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passWord = prompt ("password length")
  console.log("start");
  if (passWord > 8 && passWord < 128) {
    var isLowercase = confirm ("Do you want lowercase letters? Hit Cancel for NO, OK for Yes");
    var isUppercase = confirm ("Do you want uppercase letters? Hit Cancel for NO, OK for Yes.");
    var isSymbols = confirm ("Do you want symbols? Hit Cancel for NO, OK for Yes.");
    var isNumbers = confirm ("Do you want numbers? Hit Cancel for No, OK for Yes")
    for (var i = 0; i<passWord; i++) {


    if (isLowercase === true && final.length < passWord) {
      var index = Math.floor (Math.random()*lowercase.length)
      final = final + lowercase[index]

    }
    if (isUppercase === true && final.length < passWord) {
      var index = Math.floor (Math.random() *uppercase.length)
      final = final + uppercase[index]
    }
    if (isSymbols === true && final.length < 
    passWord) {
      var index = Math.floor (Math.random()*sym.length)
      final = final + sym[index]
    }
    if (isNumbers === true && final.length <
    passWord) {
      var index = Math.floor (Math.random()*passNumbers.length)
      final = final + passNumbers[index]
    }
  }

  } else {
    alert ("Invalid. Please choose a length between 8 - 128 characters. ")
  }
  return final; 
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
