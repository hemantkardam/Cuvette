function sayHello() {
  alert('Hello World');
}

// ? In JavaScript, we can use the reserved keywords - for, function, if, else, while, do, switch, case, break, continue, return, throw, try, catch, finally, etc.


// * JavaScript Variables
// ! Variables are used to store data.
// ! We can declare a variable using the var, let, const keywords.
// ! var is the old way to declare a variable.
// ! let and const are the new ways to declare a variable.
// ! let is used to declare a variable that can be reassigned.
// ! const is used to declare a variable that cannot be reassigned.

// var myName = "John";
// let myAge = 20;
// const myCity = "New York";


// var myName = 21123;
// var myName = "John";

// let myName = "John";
// myName = "Smith";

// console.log(myName);

// const myJob = "Developer";
// myJob = "Teacher";
// console.log(myJob)

// 1. Declaration
// 2. Assignment
// 3. Re-declaration
// 4. Re-assignment


// * Scoping
// ? Global Scope - var
// ? Local Scope - var
// ? Block Scope - let, const



// let myVar = 10;

// function myFunc() {
//   let myVar = 20;
//   console.log(myVar);
// }

// myFunc();

// {
//   let myVar = 30;
// }






// * JavaScript Data Types
// ? Primitive Data Types
// ? String - "Hello World@242637#$%^&*(", 'Hello World', 'ertttrdeg764564', `dfgksdfgiushgeuihiesur$%^&*()`
// ? Number - 10, 10.5, 10.5e2
// ? Boolean - true, false
// ? Null - null // Intentionally
// ? Undefined - undefined
// ? Symbol - Symbol()
// ? BigInt - BigInt()



function variableScopeDemo() {
  if (true) {
    var funcScopeVar = 10;
    let blockScopeVar = 20;
    console.log(blockScopeVar);
  }
  console.log(funcScopeVar);
  console.log(blockScopeVar);
}

variableScopeDemo();


// * Compound Data Types
// ? Array - [1, 2, 3, 4, 5]
// ? Object - {name: "John", age: 20}
// ? Function - function() {}




