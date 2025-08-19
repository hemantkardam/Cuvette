// 1. Basics - OOPs? Four Pillar of OOP
// => Class based and Functional based.

// Object Oriented Programming
// Class and Object

// 1. Encapsulation - Bundling data and method.

const person = {
  name: "Cuvette",
  address: "Bengluru",
  started: 2015,
  greet() {
    console.log(`Hello, my name is ${this.name} and comes from ${this.address}`)
  }
}

// this = person
this.name = person.name // "Cuvette"
window.name = "Cuvette"

person.greet()

// this - refers to the current pointing object.


// 2. Abstraction (Hiding Details)

function createCounter() {
  let count = 0; // Private Variable
  return {
    increment: function() {
      count++ // count = count + 1 // Incremental Operator
      console.log(count)
    },
    getCount: function() {
      return count
    }
  }
}

// let obj = {
//   a: 3,
//   b: 5
// }

const counter = createCounter()
counter.increment()
counter.increment()
counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
console.log(counter.getCount())


// Factories and Factory Functions

function createPerson(name, age) {
  return {
    name,
    age,
    greet(){
      console.log(`Hi, I'm ${this.name}`)
    }
  }
}

const student1 = createPerson("Suraj", 25)
console.log(student1)
const student2 = createPerson("Spoorthi", 23)
console.log(student2)

student2.greet()


// Constructor
// SurajKumar - Pascal Case



function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hi, I'm ${this.name}`)
  }
}

const person1 = new Person("Shubham", 29)
console.log(person1)


// Dynamic Nature of Objects

// Property Added

const user = { name: "Alex" }
user.age = 30;
console.log(user)

const product = { id: 1, name: "Laptop", price: 999 }
delete product.price
console.log(product)


// Everything in JavaScript is an object expect primitive datatypes.

console.log(typeof [1, 2,23, 234234])


function sayHello() {
  console.log("Hello!")
}

sayHello.language = "English"
console.log(sayHello.language)


const sampleObject = {
  name: "Sample",
  age: 33,
  isIndian: true,
  address: {
    city: "Noida", 
    state: "U.P",
    pin: 201222
  },
  hobbies: ["dancing", "Singing", "Coding"]
}

console.log(sampleObject.hobbies[2])

// Value and Reference Types

// Primitives - Value
// Objects - Reference

// Primitives

let a = 10;
let b = a;
console.log(b)
b = 20;
console.log(b)
console.log(a)


const obj1 = { data: 10 }
const obj2 = obj1
obj2.data = 20;
console.log(obj1.data)


// Enumerating Properties

// for...in

const userz = { name: "Hemant", age: 25 }
for (let key in userz) {
  console.log(key, userz[key])
}

const keys = Object.keys(userz) // Array returns
console.log(keys)

// Math

console.log(Math.max(10, 30, 34))
console.log(Math.random() * 2) // 0 - 1

// Date

const date = new Date()
console.log(date.getFullYear())


function hello(name = "Pranathi") {
  console.log(`Hello, ${name}!`)
}

hello("Shubham")


// this keyword = refers to the object executing the current function.

const sampleObjectt = {
  name: "Suman",
  age: 32,
  greet() {
    console.log(`Hello, I'm ${this.name}`)
  }
}

sampleObjectt.greet()

function showThis() {
  console.log(this)
  console.log(this === window)
}

showThis()

// Global Object in Browser is Window.
// Global Object in Node is Global.


// Error Handling


// try, catch, finally block

// try {
  // const data = JSON.parse('{name": "Shubham"}');
  // console.log(data)
// } catch (error) {
//   console.log("Error", error.message)
// } finally {
//   console.log("Execution Completed")
// }



function divide(a, b) {
  if(b === 0) throw new Error("Cannot divide by Zero")
  return a / b
}

try {
  console.log(divide(10, 2));
} catch (err) {
  console.log(err.message)
}

console.log("Helllllloooooooo")



// this

// call(), apply(), bind()
// => call() => calls a function with that this.

const userr1 = { name: "Shubhammmmmm" }
const userr2 = { name: "Bob" }
function greeet() {
  console.log(`Hello, ${this.name}`)
}

greeet.call(userr1)
greeet.call(userr2)

// bind()

const greetBob = greeet.bind(userr2)
console.log(greetBob)
// this.name = window.


function introduce(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`)
}

introduce.apply(userr1, ["Helllooo", "!"])





// Prototypes & Inheritance

// => Prototype:- Template Object that other objects inherits from.


function Animal(name) {
  this.name = name

  // eat() {
  //   console.log(`${this.name} is eating.`)
  // }
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`)
}

const dog = new Animal("Joe")
const cat = new Animal("Joey")
// console.log(dog)
// console.log(`Hello, I am cute ${dog.name}`)
dog.eat()
cat.eat()


// let obj = { name: "asddsf"}
// obj.age = 20
// obj.dance = "belly"
// obj.hahah = function() {
//   console.log("sadfghmj")
// }
// console.log(obj)


function Dog(name) {
  Animal.call(this, name)
}

Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.bark = function() {
  console.log(`${this.name} is barking.`)
}

const pitbull = new Dog("Raja")
pitbull.bark()
pitbull.eat()


// const document = {
//   html: {
//     head: {
//       title: "ssdfsdgsd"
//     },
//     body: {
//       div: {
//         h1: "sfsdfdsf"
//       }
//     }

//   }
// }

// document.html.head.title











