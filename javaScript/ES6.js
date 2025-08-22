// JavaScript Operators

// They help us to perform operations on values and variables.
// 1. Arithmetic Operators - +, -, *, /, %,...

let a = 10;
let b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Assignment Operators

let name = "Shubham";
let x = 10;
x += 2; // x = x + 2 // 12
x -= 4; // x = x - 4 // 8
x *= 4; // x = x * 4 // 32
x /= 4; // x = x / 4 // 32
console.log(x);

// Comparison Operators // Boolean

let p = 10;
let q = 3;
let r = "10";

console.log(p == q); // false
console.log(p == r); // true - Loose Equality
console.log(p === r); // false - Strict Equality
console.log(p !== r); //

// >, <, <=, >=

// Logical Operator
// AND &&
// OR ||
// NOT !

let isIndian = false;
let Salary = 40000;

// if(!isIndian && Salary > 30000) {
//   console.log("Welcome, you can survive in Bengluru!")
// } else {
//   console.log("Sorry...")
// }

// Ternary Operator
!isIndian && Salary > 30000
  ? console.log("Welcome, you can survive in Bengluru!")
  : console.log("Sorry...");

// Closures

function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      console.log(count);
    },
  };
}

console.log(createCounter());
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

// Closure = After Execution, you do have the access of its lexical env. - variables.

// Type Coercion

console.log(1 == "1");
console.log(1 === "1");

console.log(10 - "5");

// Inheritance and Method Overriding

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // Call the parent method
    console.log(`${this.name} barks`);
  }
}

const pitbull = new Dog("Rex");
pitbull.speak();

// Method Overidding

class Bird {
  fly() {
    console.log("Flying high!");
  }
}

class Penguin extends Bird {
  fly() {
    console.log("Can't fly!");
  }
}

const pingu = new Penguin();
pingu.fly();

// Boolean Coercion
// All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean(-0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// Logical operators:
// Logical operators in javascript, unlike operators in other programming languages, do not return true or false. They always return one of the operands.

// OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.

// AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.

// Example:

var x1 = 220;
var y1 = "Hello";
var z1 = undefined;

x1 || y1; // Returns 220 since the first value is truthy

x1 || z1; // Returns 220 since the first value is truthy

x1 && y1; // Returns "Hello" since both the values are truthy

y1 && z1; // Returns undefined since the second value is falsy

if (x1 && y1) {
  console.log("Code runs"); // This block runs because x1 && y1 returns "Hello" (Truthy)
}

if (x1 || z1) {
  console.log("Code runs"); // This block runs because x1 || z1 returns 220(Truthy)
}
