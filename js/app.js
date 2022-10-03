/* ------------------------------------
---------------------------------------
GLOBAL VARIABLES
---------------------------------------
------------------------------------ */
const result = document.getElementById("result");
const copyBtn = document.getElementById("copy");
const copyText = document.getElementById("copy-text");
const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbersDOM = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const form = document.getElementById("passwordGeneratorForm");
const lengthNum = document.getElementById("length-num");
const tooWeak = document.querySelector(".too-weak");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
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
  const characterAmount = length.value;
  const includeUppercase = uppercase.checked;
  const includeLowercase = lowercase.checked;
  const includeNumbers = numbersDOM.checked;
  const includeSymbols = symbols.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );
  result.value = password;
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
  let generatedPassword = passwordCharacters.join("");
  let val = generatedPassword;
  // TOO WEAK STRENGTH PASSWORD
  if (
    (val.match(alphabet) && val.length === 8) ||
    (val.match(numbers) && val.length >= 8 && val.length <= 10) ||
    (val.match(scharacters) && val.length >= 8 && val.length <= 10)
  ) {
    tooWeak.classList.add("active");
    tooWeak.classList.remove("non-active");
    weak.classList.remove("active");
    weak.classList.add("non-active");
    medium.classList.remove("active");
    medium.classList.add("non-active");
    strong.classList.remove("active");
    strong.classList.add("non-active");
    levelOne.classList.add("too-weak-active");
    levelOne.classList.remove("weak-active");
    levelOne.classList.remove("medium-active");
    levelOne.classList.remove("strong-active");
    levelTwo.classList.remove("weak-active");
    levelTwo.classList.remove("medium-active");
    levelTwo.classList.remove("strong-active");
    levelThree.classList.remove("medium-active");
    levelThree.classList.remove("strong-active");
    levelFour.classList.remove("strong-active");
  }

  // WEAK STRENGTH PASSWORD
  if (
    (val.match(alphabet) && val.length > 8 && val.length <= 12) ||
    (val.match(numbers) && val.length > 10 && val.length < 16) ||
    (val.match(scharacters) && val.length > 10 && val.length < 16) ||
    (val.match(alphabet) &&
      val.match(numbers) &&
      val.length >= 8 &&
      val.length <= 12) ||
    (val.match(alphabet) &&
      val.match(scharacters) &&
      val.length >= 8 &&
      val.length <= 12) ||
    (val.match(numbers) &&
      val.match(scharacters) &&
      val.length >= 10 &&
      val.length < 16)
  ) {
    tooWeak.classList.remove("active");
    tooWeak.classList.add("non-active");
    weak.classList.add("active");
    weak.classList.remove("non-active");
    medium.classList.remove("active");
    medium.classList.add("non-active");
    strong.classList.remove("active");
    strong.classList.add("non-active");
    levelOne.classList.remove("too-weak-active");
    levelOne.classList.add("weak-active");
    levelOne.classList.remove("medium-active");
    levelOne.classList.remove("strong-active");
    levelTwo.classList.add("weak-active");
    levelTwo.classList.remove("medium-active");
    levelTwo.classList.remove("strong-active");
    levelThree.classList.remove("medium-active");
    levelThree.classList.remove("strong-active");
    levelFour.classList.remove("strong-active");
  }

  // MEDIUM STRENGTH PASSWORD
  if (
    (val.match(alphabet) && val.length > 12) ||
    (val.match(numbers) && val.length === 16) ||
    (val.match(scharacters) && val.length === 16) ||
    (val.match(alphabet) && val.match(numbers) && val.length > 12) ||
    (val.match(alphabet) && val.match(scharacters) && val.length > 12) ||
    (val.match(numbers) && val.match(scharacters) && val.length === 16) ||
    (val.match(alphabet) &&
      val.match(numbers) &&
      val.match(scharacters) &&
      val.length >= 8 &&
      val.length <= 12)
  ) {
    tooWeak.classList.remove("active");
    tooWeak.classList.add("non-active");
    weak.classList.remove("active");
    weak.classList.add("non-active");
    medium.classList.add("active");
    medium.classList.remove("non-active");
    strong.classList.remove("active");
    strong.classList.add("non-active");
    levelOne.classList.remove("too-weak-active");
    levelOne.classList.remove("weak-active");
    levelOne.classList.add("medium-active");
    levelOne.classList.remove("strong-active");
    levelTwo.classList.remove("weak-active");
    levelTwo.classList.add("medium-active");
    levelTwo.classList.remove("strong-active");
    levelThree.classList.add("medium-active");
    levelThree.classList.remove("strong-active");
    levelFour.classList.remove("strong-active");
  }

  // STRONG STRENGTH PASSWORD
  if (
    val.match(alphabet) &&
    val.match(numbers) &&
    val.match(scharacters) &&
    val.length > 12
  ) {
    tooWeak.classList.remove("active");
    tooWeak.classList.add("non-active");
    weak.classList.remove("active");
    weak.classList.add("non-active");
    medium.classList.remove("active");
    medium.classList.add("non-active");
    strong.classList.add("active");
    strong.classList.remove("non-active");
    levelOne.classList.remove("too-weak-active");
    levelOne.classList.remove("weak-active");
    levelOne.classList.remove("medium-active");
    levelOne.classList.add("strong-active");
    levelTwo.classList.remove("weak-active");
    levelTwo.classList.remove("medium-active");
    levelTwo.classList.add("strong-active");
    levelThree.classList.remove("medium-active");
    levelThree.classList.add("strong-active");
    levelFour.classList.add("strong-active");
  }
  return generatedPassword;
};

/* ------------------------------------
---------------------------------------
Copy Password
---------------------------------------
------------------------------------ */
copyBtn.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  const passwordToCopy = result.value;

  // Edge Case when Password is Empty
  if (!passwordToCopy) return;

  // Copy Functionality
  textArea.value = passwordToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  copyText.classList.remove("hidden");
});

/* ------------------------------------
---------------------------------------
UPDATE #LENGTH-NUM ON RANGE INPUT VALUE CHANGE
---------------------------------------
------------------------------------ */
function rangeChange(data) {
  lengthNum.innerHTML = data;
}

/* ------------------------------------
---------------------------------------
CHECK GENERATED PASSWORD'S STRENGTH
---------------------------------------
------------------------------------ */
// generateBtn.addEventListener("click", () => {

// });

/* ------------------------------------
---------------------------------------
CHANGE COLOR OF RANGE INPUT BEFORE THUMB
---------------------------------------
------------------------------------ */
document.getElementById("length").oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #a4ffaf 0%, #a4ffaf " +
    value +
    "%, #18171f " +
    value +
    "%, #18171f)";
};
