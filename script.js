// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate password function
function generatePassword() {
  var passwordCharacterCount = prompt(
    "How many characters would you like your password to contain?"
  );

  passwordCharacterCount = parseInt(passwordCharacterCount);

  // Number success path
  if (passwordCharacterCount <= 128 && passwordCharacterCount >= 8) {
    

    // Confirm list
    var specialCharactersConfirm = confirm(
      "Click OK to confirm including special characters"
    );
    var numericCharactersConfirm = confirm(
      "Click OK to confirm including numeric characters"
    );
    var lowercaseCharactersConfirm = confirm(
      "Click OK to confirm including lowercase characters"
    );
    var uppercaseCharactersConfirm = confirm(
      "Click OK to confirm including uppercase characters"
    );
    // End: Confirm list


    // Defining variables
    var specialCharacterList = "~!@#$%^&*()_+{}|:\"<>?,./;'[]\\";
    var numericCharacterList = "1234567890";
    var lowercaseCharacterList = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseCharacterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var emptyArray = [];

    confirmArray = [specialCharactersConfirm, numericCharactersConfirm, lowercaseCharactersConfirm, uppercaseCharactersConfirm];
    listArray = [specialCharacterList, numericCharacterList, lowercaseCharacterList, uppercaseCharacterList];
    // End: Defining variables


    // Created function
    function randomPasswordFormed(list) {
      var passwordString = "";

      for (var i = 0; i < passwordCharacterCount; i++) {
        passwordString += list.charAt(Math.floor(Math.random() * list.length));
      }
      
      return passwordString;
    }
    // End: Created function


    // for loop
    for (i = 0; i < confirmArray.length; i++) {
      if (confirmArray[i]) {
        emptyArray.push(listArray[i]);
      }
    }
    // End: for loop


    // Calling randomPassword formed to return the created password
    return randomPasswordFormed(emptyArray.join());
    // End: Calling randomPassword formed to return the created password   
  }
  //End: Number success path


  // Else if statements for: Number success path
   else if (passwordCharacterCount < 8) {
    alert("Password must be at least 8 characters");
  } else if (passwordCharacterCount > 128) {
    alert("Password cannot be longer than 128 characters");
  }
  // End

}
// End: Generate password function

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
