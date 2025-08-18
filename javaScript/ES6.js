// JavaScript Operators

// They help us to perform operations on values and variables.
// 1. Arithmetic Operators - +, -, *, /, %,...

let a = 10;
let b = 4;
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)


// Assignment Operators

let name = "Shubham"
let x = 10;
x += 2 // x = x + 2 // 12
x -= 4 // x = x - 4 // 8
x *= 4 // x = x * 4 // 32
x /= 4 // x = x / 4 // 32
console.log(x)

// Comparison Operators // Boolean

let p = 10
let q = 3
let r = "10"

console.log(p == q) // false
console.log(p == r) // true - Loose Equality
console.log(p === r) // false - Strict Equality
console.log(p !== r) //

// >, <, <=, >=

// Logical Operator
// AND &&
// OR ||
// NOT !

let isIndian = false
let Salary = 40000

// if(!isIndian && Salary > 30000) {
//   console.log("Welcome, you can survive in Bengluru!")
// } else {
//   console.log("Sorry...")
// }


// Ternary Operator
!isIndian && Salary > 30000 ? console.log("Welcome, you can survive in Bengluru!") : console.log("Sorry...")


// Closures

function createCounter() {
  let count = 0;
  return {
    increment() {
      count++
      console.log(count)
    }
  }
}

console.log(createCounter())
const counter = createCounter()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()


// Closure = After Execution, you do have the access of its lexical env. - variables.

// Type Coercion

console.log(1 == "1")
console.log(1 === "1")

console.log(10 - "5")


// Inheritance and Method Overriding

class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(`${this.name} makes a noise`)
  }
}

class Dog extends Animal {
  speak() {
    super.speak() // Call the parent method
    console.log(`${this.name} barks`)
  }
}

const pitbull = new Dog("Rex")
pitbull.speak()

// Method Overidding

class Bird{
  fly() {
    console.log("Flying high!")
  }
}

class Penguin extends Bird {
  fly() {
    console.log("Can't fly!")
  }
}

const pingu = new Penguin()
pingu.fly()