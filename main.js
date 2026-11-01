//grades النقطة الاولى //

let input = prompt("Enter your degree:");
let degree = Number(input);

if (input === null || input.trim() === "" || isNaN(degree) || degree < 0 || degree > 100) {
  console.log("Invalid degree");
} else if (degree >= 90) {
  console.log("Excellent");
} else if (degree >= 80) {
  console.log("Very Good");
} else if (degree >= 70) {
  console.log("Good");
} else if (degree >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//calculator النقطة الثانية//

let a = Number(prompt("Enter first number:"));
let op = prompt("Enter operator (+ - * / %):");
let b = Number(prompt("Enter second number:"));

switch (op) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    if (b === 0) {
      console.log("Cannot divide by zero");
    } else {
      console.log(a / b);
    }
    break;
  case "%":
    if (b === 0) {
      console.log("Cannot divide by zero");
    } else {
      console.log(a % b);
    }
    break;
  default:
    console.log("Unknown operator");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//leap year النقطة الثالثة//

let year = Number(prompt("Enter a year:"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Multiplication table//

let n = Number(prompt("Enter a number:"));

for (let i = 1; i <= 12; i++) {
  console.log(n + " x " + i + " = " + n * i);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Even and Odd Sum النقطة الرابعة//

let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log("Even sum: " + evenSum);
console.log("Odd sum: " + oddSum);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//fizz buzz النقطة الخامسة//

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Login with 3 Attempts النقطة السادسة//

let correctPassword = "js2026";
let ATTEMPTS = 0;

while (attempts < 3) {
  let password = prompt("Enter password:");

  if (password === correctPassword) {
    console.log("Welcome");
    break;
  }

  attempts++;

  if (attempts === 3) {
    console.log("Account locked");
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Reverse a Number النقطة السابعة//

let num = 12345;
let reversed = 0;

while (num > 0) {
  let lastDigit = num % 10;
  reversed = reversed * 10 + lastDigit;
  num = (num - lastDigit) / 10;
}

console.log(reversed);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////