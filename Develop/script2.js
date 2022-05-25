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


function generatePassword() {
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
    return generatePassword();
  };

  console.log("Password is " + length + " characters long.")

  // confirm whether user to include special characters
  var hasSpecialChar = 
    window.confirm("Would you like special characters?");
  if (hasSpecialChar) {
    console.log("User prefers to include special characters.");
  } else {
    console.log("Special characters not preferred.");
  };

  // confirm whether user prefers lowercase
  var hasLowerCase = 
    window.confirm("Would you like to include lowercase letters?");
    if (hasLowerCase) {
      console.log("User prefers to include lowercase letters");
    };
    
  // confirm whether user prefers to include uppercase letters
  var hasUpperCase = 
    window.confirm("Would you like to include uppercase letters?");
  if (hasUpperCase) {
    console.log("User prefers to include uppercase letters"); 
  } else {
    console.log("Uppercase letters not preferred.");
  };

  // confirm whether user prefers to include numbers
  var hasNumbers = 
    window.confirm("Would you like to include numbers?");
  if (hasNumbers) {
    console.log("User prefers to include numbers");
  } else {
    console.log("Numbers not preferred.");
  };

  if (
    lowerCase === false &&
    upperCase === false && 
    specialCharacters === false && 
    numbers === false
   ) {
      window.alert("Please choose at least one option to make your password unique.")
      return getCharType();
  };
  // arrays based on user input
  var options = [];
  var preferredChar = [];

  // if user clicks 'OK', elements are pushed to options array
  if (hasNumbers) {
    for (i = 0; i < numbers.length; i++)
      options.push(numbers[i]);
  };
  
  if (hasUpperCase) {
    for (i = 0; i < upperCase.length; i++)
      options.push(upperCase[i]);
  };

  if (hasLowerCase) {
    for (i = 0; i < lowerCase.length; i++)
      options.push(lowerCase[i]);
  };

  if (hasSpecialChar) {
    for (i = 0; i < specialChar.length; i++)
      options.push(specialChar[i]);
  };

  // if user clicks 'OK', randomly selects from array and pushes to preferredChar array
  function randEl(array) {
    var randomEl = Math.floor(Math.random(array) * array.length);
    return randomEl;
  };

  if (hasNumbers) {
    var num = numbers[Math.floor(Math.random() * numbers.length)]
    preferredChar.push(num);
  };

  if (hasUpperCase) {
    var upperEl = upperCase[Math.floor(Math.random() * upperCase.length)];
    preferredChar.push(upperEl);
  };

  if (hasLowerCase) {
    var lowerEl = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    preferredChar.push(lowerEl);
  };

  if (hasSpecialChar) {
    var specialEl = specialChar[Math.floor(Math.random() * specialChar.length)];
    preferredChar.push(specialEl);
  };

  // add random elements from options array
  while (preferredChar.length < length) {
    var possibleChar = options[Math.floor(Math.random() * options.length)];
    preferredChar.push(possibleChar);
  };

  // turn array into string
  return preferredChar.join('');
};


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
