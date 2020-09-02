// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordCharacterCount = prompt(
    "How many characters would you like your password to contain?"
  );
  if (passwordCharacterCount <= 128 && passwordCharacterCount >= 8) {
    confirm("Click OK to confirm including special characters");
  } else if (passwordCharacterCount < 8) {
    alert("Password must be at least 8 characters");
  } else if (passwordCharacterCount > 128) {
    alert("Password cannot be longer than 128 characters");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
