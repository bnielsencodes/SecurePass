/* ------------------------------------
---------------------------------------
GLOBAL VARIABLES
---------------------------------------
------------------------------------ */
const resultDOM = document.getElementById("result");
const copybtnDOM = document.getElementById("copy");
const copyText = document.getElementById("copy-text");
const lengthDOM = document.getElementById("length");
const uppercaseDOM = document.getElementById("uppercase");
const lowercaseDOM = document.getElementById("lowercase");
const numbersDOM = document.getElementById("numbers");
const symbolsDOM = document.getElementById("symbols");
const generatebtn = document.getElementById("generate");
const form = document.getElementById("passwordGeneratorForm");
const lengthNum = document.getElementById("length-num");
const displayBadge = document.querySelector(".displayBadge");
const displayBadge2 = document.querySelector(".displayBadge2");
const displayBadge3 = document.querySelector(".displayBadge3");
const displayBadge4 = document.querySelector(".displayBadge4");
const levelOne = document.getElementById("level-one");
const levelTwo = document.getElementById("level-two");
const levelThree = document.getElementById("level-three");
const levelFour = document.getElementById("level-four");
let alphabet = /[a-zA-Z]/;
let numbers = /[0-9]/;
let scharacters = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/;

/* ------------------------------------
---------------------------------------
Character Code Generating Function
---------------------------------------
------------------------------------ */
let arrayFromLowToHigh = (low, high) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

/* ------------------------------------
---------------------------------------
Generating Character Codes
---------------------------------------
------------------------------------ */
const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

/* ------------------------------------
---------------------------------------
Checking the options that are selected and setting the password
---------------------------------------
------------------------------------ */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = lengthDOM.value;
  const includeUppercase = uppercaseDOM.checked;
  const includeLowercase = lowercaseDOM.checked;
  const includeNumbers = numbersDOM.checked;
  const includeSymbols = symbolsDOM.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );
  resultDOM.value = password;
});

/* ------------------------------------
---------------------------------------
Password Generating Function
---------------------------------------
------------------------------------ */
let generatePassword = (
  characterAmount,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) => {
  let charCodes = [];
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
  if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
    copyText.classList.add("hidden");
  }
  return passwordCharacters.join("");
};

