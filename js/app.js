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

