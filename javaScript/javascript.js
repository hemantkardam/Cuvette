// Variables
// Declaration and Assignment/Initialization
let name;
let userName = "Cuvette"
let age = 30
let isActive = true

console.log(userName)
console.log(age)
console.log(isActive)

// Reassignment
userName = "Shubham"
console.log(userName)

// Scoping - Global, Local (){}, Block {}
{
  let blockScoped = "I am inside a block"
  console.log(blockScoped)
}
// console.log(blockScoped)

// Hoisting

console.log(x)
var x = 30;
let y = 20;
console.log(y)
// var x = 10;

// ** not defined != undefined.
// ** EVENT - undefined = declaration done, but not defined.
// ** Hoisting - EVENT - Temporal Dead Zone (Time Duration)

// Types of Errors
// ! 1. ReferenceError - blockScoped is not defined.
// ! 2. TypeError: Assignment to constant variable.
// ! 3. SyntaxError: 


// ? const keyword for declaring varibales.
// ? 1. Block Scoped like let.

const pi = 3.14;
// pi = 123312.123
console.log(pi)

// Immutable and Mutable - the reference is constant, not the content.

const user = {
  name: "Alice",
  age: 28,
}

// user = { name: "Shubham"}

console.log(user.name)
user.age = 30;
console.log(user.age)

const colors = ["red", "blue"]
// colors = ["red", "blue", "green"]
colors.push("green")
console.log(colors)


let firstName = "Shubham"
let lastName = 'Shrivastava'
let greeting = `Hello, ${firstName} ${lastName}!` // Template Literal
console.log(greeting)

// Multi-line Strings

let address = `
ffsadfasdf
asddfasfdasf
asdfda
sfasddfasdf
asddf
`

// Dynamic Typing
// ? Variables can hold any type, and types can change.
// ? No need to specify type of data at the time declaring.
// ? Type is determined at the time of runtime.



let dynamicVar = "Hello"
console.log(typeof dynamicVar)
dynamicVar = 43;
console.log(typeof dynamicVar)
dynamicVar = true;
console.log(typeof dynamicVar)
dynamicVar = { name: "Suraj"}
console.log(typeof dynamicVar)

// Type Coercion

// => Implicit Coercion

let result = "5" +  2 //"2" String
let joke = "1" + 1 // Concatenation
let fullName = firstName + " " + lastName
console.log(joke)
console.log(result)
console.log(fullName)

let result2 = "5" - 2 // 5
console.log(result2)

// Explicit Coercion

let numStr = "123"
let actualNum = Number(numStr)
console.log(typeof numStr, typeof actualNum)

// ? Falsy Values:- 0, false, "", null, undefined, NaN
// ? Truthy Values:- 1, true, "asfdasas"

if([]){
  console.log("This won't print!")
} else {
  console.log("heyyyyy!")
}


// Arrays in JavaScript

// ! 1. Ordered Collection of Values (Can be of mix types).
// ! 2. Zero-Index, dynamic size.


// ? Creation of Array

const emptyFruits = []
const fruits = [ "Mango", "Apple", "Pear", "Grapes"]
const mixData = ["Hello", 23, 21.123, true, ["asdasd", 123], { name: "asdasd", age: 12}, undefined, null ]

// Array Constructor

const numbers = new Array(1, 2, 3, 4, 5)
console.log(numbers)
const empty = new Array(5)
console.log(empty)

console.log(fruits[1])
console.log(mixData.length)


// Adding/Removing Elements in Array

const colorss = ["red", "green"]
console.log(colorss)
colorss.push("purple") // Add to end
console.log(colorss)

colorss.unshift("yellow") // add to beginning
console.log(colorss)

colorss.splice(2, 0, "white") // inserts  at index 2
console.log(colorss)

colorss.splice(3, 1, "pink")//inserts at index 2
console.log(colorss)

// Removing Elements

const numberss= [1, 2, 3, 4, 5]
const last = numberss.pop() // removes last element
console.log(last)

const first = numberss.shift()
console.log(first)
console.log(numberss)

numberss.splice(1, 1)
console.log(numberss)


// Emptying an Array

// ? 1. Reassign to empty array (arr = []).
// ? 2. Set length to 0 (arr.length = 0).
// ? 3. splice() arr.splice(0)
// ? 4. pop() in loop.


let arr1 = [1, 2, 3]
let arr2=[1, 2, 3]
let arr3= [1, 2, 3]
let arr4= [1, 2, 3]

arr1 = []
console.log(arr1)

arr2.length = 0
console.log(arr2)

arr3.splice(0, arr3.length)
console.log(arr3)

while(arr4.length) arr4.pop()
  console.log(arr4)


// Finding Elements
// => indexOf() => return first index
// => lastIndexOf() => return last index
// => includes() => return boolean

const nums = [10, 20, 30, 40, 50, 30, 60, 30, 56]
console.log(nums.indexOf(30))
console.log(nums.indexOf(90))
console.log(nums.lastIndexOf(30))
console.log(nums.includes(90))

// find() and findIndex()

const products = [
  {id: 1, name: "Laptop", inStock: false},
  {id: 2,name: "TV", inStock: false},
  {id: 3,name: "Mobile", inStock: true},
]

const available = products.find(p => p.inStock) 
console.log(available)

const itemIndex = products.findIndex(p => p.name === "TV")
console.log(itemIndex)


// Array Transformation
// => 1. Arrow Functions in Array Methods

// Function is a machine which takes input and gives or returns desired output.

// Regular Function/ Normal Function

// function greet(name) {
//   return `Hello, ${name}`
// }

// console.log(greet("Cuvette"))

// Arrow Function - Simpler Syntax

// const greet = (name) => {
//   const sum = 2 + 3
//   console.log(sum)
//   return `Hello, ${name}`
// }
// console.log(greet("Cuvette"))

const numbs = [1, 2, 3, 4, 5]
// []
// [1, 4, ]
// Higher Order Functions
const squares1 = numbs.map(function(num) {
  return num * num
})

console.log(squares1)

const squares2 = numbs.map(num => num * num)
console.log(squares2)


// Combining and Slicing Arrays

const arr11 = [1, 2, 3]
const arr22 = [4, 5, 6]

// Concatenation
// const combinedArray = arr11.concat(arr22)
// console.log(combinedArray)

// Slicing - Extracting the Portion of Array
// const slice1 = combinedArray.slice(1, 4)
// console.log(slice1)

// Spread Operator

const combineWithSpread = [...arr11, ...arr22]
console.log(combineWithSpread)

// Iteration Array
// 1. for...of
// 2. forEach()
// 3. Traditional for loop

const animals = ["rabbit", "dog", "cat", "Lion"]

for(const animal of animals) {
  console.log(animal)
}

animals.forEach((animal, suraj) => {
  console.log(`${suraj + 1}: ${animal}`)
})


for(let i = 0; i < animals.length; i++) {
  console.log(animals[i])
}


// Array Sorting
// Lexicographical
const fruitsss = ["banana", "apple", "cherry"]
fruitsss.sort()
console.log(fruitsss)

// Numeric Sort

const numbers_ = [10, 5, 34, 12, 32, 11]
numbers_.sort((a, b) => a - b) // Ascending Order
console.log(numbers_)

// Filter

const _numbers_ = [1, 2, 3, 4, 5, 6, 7]
const evens = _numbers_.filter(n => n % 2 === 0)
console.log(evens)

// Reduce

const __numbers_ = [1, 2, 3, 4, 5, 6, 7, 8]
// Sum of all numbers in an array
const sum = __numbers_.reduce((acc, curr) => acc + curr, 0)
console.log(sum)

// Control Flow Deep Dive
// Loop Variations
// Function Fundamentals
// Advanced Function Concepts
// Error Handling & this Context.

// ? 1. Control Flow Deep Dive

// if-else

function getTemperatureComment(temp) {
  if(temp > 30) {
    return "Hot day! Stay Hydrated."
  } else if(temp > 20){
    return "Pleasant Weather."
  } else if(temp > 10){
    return "Cool, bring a jacket."
  } else {
    return "Cold! Bundle up."
  }
}

console.log(getTemperatureComment(19))

// Switch

function getDayType(day) {
  switch(day.toLowerCase()) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "Weekday"
    case "saturday":
    case "sunday":
      return "Weekend"
    default:
      return "Invalid day"      
  }
}

console.log(getDayType("Saturday"))


// Break

const __nums__ = [1, 2, "three", 4, 5, 6, 7]
for(let num of __nums__) {
  if(typeof num !== "number") {
    console.log('Non-number found, stopping')
    break;
  }
  console.log(num * 2)
}


for(let i = 0; i < 10; i++) {
  if(i % 2 === 0) continue;
  console.log(i)
}


// Functions

// 1. Function Declaration

// Regular or Normal

console.log(greet("Suraj"))

function greet(name) {
  return `Hello, ${name}`
}

// Anonymous Function
// Function Expression

let squareExpr = function(num) {
  return num * num
}
console.log(squareExpr(7))

function sumAll() {
  let total = 0;
  for(let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}
// arguments = [1, 2, 3, 4]
// arguments.length

console.log(sumAll(1, 2, 3, 4))

// const __numberss_ = [1, 2, 3, 4, 5, 6, 7, 8]

function sumAllRest(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}

console.log(sumAllRest(1, 2, 3))








