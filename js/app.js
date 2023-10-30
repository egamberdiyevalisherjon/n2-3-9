// Functions
// 1) function declaration => aniqlamoq
// function declaration
// function nimadir() {
//   let a = 1;
//   console.log(a + 2);
// }

// function expression
// let adder = function (num1, num2) {
//   if (!num1) {
//     num1 = 1;
//   }

//   if (!num2) {
//     num2 = 2;
//   }

//   return num1 + num2;
// };

// arrow
// let greeting = () => {
//   let str1 = "Hammaga ";
//   let str2 = "Salom!";
//   return str1 + str2;
// };

// 2) function invocation => uygotmoq, ishiga tushirmoq
// nimadir();
// let a = adder(4);

// console.log(a);

// console.log(greeting());

// parameter = b, c
// function a(b, c) {}

// argument = "d", "e"
// a("d", "e");

// function test(val, val) {
//   console.log(val);
// }

// test(1, 2);

// function isPositive(num) {
//   if (num > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isNegative(num) {
//   if (num < 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPositive(0));
// console.log(isNegative(0));

// let i = 0;

// function logger() {
//   i++;
//   console.log("Ishga tushdi", i);
// }

// logger();
// let tId = setTimeout(logger, 1000);
// let iId = setInterval(logger, 1000);

// console.log(tId, iId);
// clearTimeout(tId);
// setTimeout(() => {
//   clearInterval(iId);
// }, 10_000);

// Arithmetic operators => +, -, *, /, ...
// Comparison operators => >, < ...
// Logical operators => &&, ||, !
// Unary operators => ++, --, **
// Assignment operators => =, +=, -=, *=, /=, %=, **=

// =
// let a = 1;
// let b = a + 2;
// a = 2;

// console.log(a);
// a = a + 4;
// console.log(a);
// a += 4;
// console.log(a);
// a = a - 4;
// console.log(a);
// a -= 4;
// console.log(a);
// a = a * 4;
// console.log(a);
// a *= 4;
// console.log(a);
// a = a / 4;
// console.log(a);
// a /= 4;
// console.log(a);

// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }

// function adder(num1 = 1, num2 = 2) {
// num1 ||= 1;
// num2 ||= 2;

// num1 = num1 || 1;
// num2 = num2 || 2;

// if (!num1) {
//   num1 = 1;
// }

// if (!num2) {
//   num2 = 2;
// }

//   return num1 + num2;
// }

let red = "Qizil";
let yellow = "Sariq";
let green = "Yashil";

function redLight() {
  document.body.innerHTML = red;
}

function yellowLight() {
  document.body.innerHTML = yellow;
}

function greenLight() {
  document.body.innerHTML = green;
}

function tl() {
  redLight();

  setTimeout(() => {
    yellowLight();

    setTimeout(() => {
      greenLight();

      setTimeout(yellowLight, 5_000);
    }, 2_000);
  }, 5_000);
}

tl();
setInterval(tl, 14_000);
