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
  {id: 2,name: "Lapdsd", inStock: false},
  {id: 3,name: "Lasdsd", inStock: true},
]

const available = products.find(p => p.inStock) 
console.log(available)

const itemIndex = products.findIndex(p => p.name === "Laptop")
console.log(itemIndex)












