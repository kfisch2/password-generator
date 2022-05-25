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

var specialCharacters = [
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

// function to get user input
// exclude lowercase?

function getCharType() {
  // prompt for length of password between 8 and 128 characters
  var length = parseInt(
    window.prompt("How long would you like the password to be? Minimum of 8 and maximum of 128 characters required.")
  );

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
  }

  // object for user input 
  var passwordChar = {
    length: length,
    upperCase: upperCase,
    specialCharacters: specialCharacters,
    numbers: numbers
  };

  return passwordChar;
};


// function to randomize element from an array
function random(array) {
  var randomEl = Math.floor(Math.random(array));
  return randomEl;
};

function generatePassword() {
  
  // if user prefers type, add it to array of possible characters which starts as emtpy
  var preferences = getCharType();  

  var possibleChar = [];
  var guaranteedChar = [];

  if (preferences.numbers) {
   possibleChar = possibleChar.concat(numbers);
   guaranteedChar.push(random(possibleChar));
  };

  if (preferences.upperCase) {
    possibleChar = possibleChar.concat(upperCase);
    guaranteedChar.push(random(possibleChar));
  };

  if (preferences.specialCharacters) {
    possibleChar = possibleChar.concat(specialCharacters);
    guaranteedChar.push(random(possibleChar));
  };

  console.log(possibleChar);
  console.log(guaranteedChar);


  // for loop; 

  for (i=0; i < preferences.length; i++) {
    var possibleChar = random(possibleChar);
  };

  for (i=0; i < possibleChar.length; i++) {
    var guaranteedChar = random(guaranteedChar);
  };
};




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
