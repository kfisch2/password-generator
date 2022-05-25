// Assignment code here
// var numbers array
var numbers = [
  "1",
  "2",
  "3",
  "4", 
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
];

// var uppercase array
var upperCase = [
  "A", 
  "B", 
  "C", 
  "D", 
  "E", 
  "F", 
  "G", 
  "H", 
  "I", 
  "J", 
  "K", 
  "L", 
  "M", 
  "N", 
  "O", 
  "P", 
  "Q", 
  "R", 
  "S", 
  "T", 
  "U", 
  "V", 
  "W", 
  "X", 
  "Y", 
  "Z"
];

// var lowercase array
var lowerCase = [
  "a", 
  "b", 
  "c", 
  "d", 
  "e", 
  "f", 
  "g", 
  "h", 
  "i", 
  "j", 
  "k", 
  "l", 
  "m", 
  "n", 
  "o", 
  "p", 
  "q", 
  "r", 
  "s", 
  "t", 
  "u", 
  "v", 
  "w", 
  "x", 
  "y", 
  "z"
];

// special characters array

var specialChar = [
  "!",
  "@",
  "#", 
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
  "/",
  ",",
  "<",
  ">",
  ".",
  "?",
  "/"
];


function getCharType() {
  // prompt for length of password between 8 and 128 characters
  var length = parseInt(
    window.prompt("How long would you like the password to be? Minimum of 8 and maximum of 128 characters required."));

  // if length does not meet requirements
  if (length < 8 || length > 128) {
      window.alert("Please choose a number between 8 and 128. Try again.");
      return getCharType();
  };

  // if user input is NaN, prompt user to enter a number
  if(isNaN(length)) {
    window.alert("Please enter a number.");
    return getCharType();
  };

  console.log("Password is " + length + " characters long.")

  // confirm whether user to include special characters
  var specialCharacters = 
    window.confirm("Would you like special characters?");
  if (specialCharacters) {
    console.log("User prefers to include special characters.");
  } else {
    console.log("Special characters not preferred.");
  };

  // confirm whether user prefers lowercase
  var lowerCase = 
    window.confirm("Would you like to include lowercase letters?");
    if (lowerCase) {
      console.log("User prefers to include lowercase letters");
    };
    
  // confirm whether user prefers to include uppercase letters
  var upperCase = 
    window.confirm("Would you like to include uppercase letters?");
  if (upperCase) {
    console.log("User prefers to include uppercase letters"); 
  } else {
    console.log("Uppercase letters not preferred.");
  };

  // confirm whether user prefers to include numbers
  var numbers = 
    window.confirm("Would you like to include numbers?");
  if (numbers) {
    console.log("User prefers to include numbers");
  } else {
    console.log("Numbers not preferred.");
  };

  // create password based on user prompts


  // if user does not select any character type statement
  if (
    lowerCase === false &&
    upperCase === false && 
    specialCharacters === false && 
    numbers === false
    ) {
      window.alert("Please choose at least one option to make your password unique.")
      return getCharType();
  };

  // object to track user preferences
  var preferences = {
    length: length,
    upperCase: upperCase,
    lowerCase: lowerCase,
    specialChar: specialChar,
    numbers: numbers
  };

  return preferences;
};


// generate password function
function generatePassword() {
  var userPreference = getCharType();
  var preferredChar = []; 
  var otherChar = [];

  // call to preferences object
  // add character type to rand
  // random lowercase
  
  function passLength() {
    if (userPreference.lowerCase) {
      var randEl = lowerCase[Math.floor(Math.random() * lowerCase.length)];
      preferredChar.push(randEl);
    };
  
      // random uppercase
    if (userPreference.upperCase) {
      var randEl = upperCase[Math.floor(Math.random() * upperCase.length)];
      preferredChar.push(randEl);  
    };
    
    // random number
    if (userPreference.numbers) {
      var randEl = numbers[Math.floor(Math.random() * numbers.length)];
      preferredChar.push(randEl);   
    };
    
    // random special character
    if (userPreference.specialChar) {
      var randEl = specialChar[Math.floor(Math.random() * specialChar.length)];
      preferredChar.push(randEl);
    };
  
    console.log(preferredChar);
    console.log(preferredChar.join(''));
  }

  passLength();
}; // end of generate password function

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
