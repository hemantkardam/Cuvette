// ? 1. DOM Fundamentals & Selectors.
// ! 2. DOM Manipulation & Styling.
// * 3. DOM Events & Event Handling.
// Todo 4. Creating and Adding Elements Dynamically.
// 5. Callback Functions in DOM Context.


// ? 1. DOM Fundamentals & Selectors.
// DOM Nodes - Element, Attribute, Content.
// DOm Selectors.


// // Select by ID
// const divId = document.getElementById("divId")
// console.log(divId)

// // Select by class
// const pClass = document.getElementsByClassName("pClass")
// console.log(pClass)

// // Select by Tag
// const h1Tag = document.getElementsByTagName("h1")
// console.log(h1Tag)

// // Mordern Selectors
// const ele = document.querySelector("#divId")
// console.log(ele)

// const elements = document.querySelectorAll("h1")
// console.log(elements)


const h1Element = document.getElementById("h1Id")
console.log(h1Element)
console.log(h1Element.innerHTML)
console.log(h1Element.innerText)
h1Element.textContent = "Hey Guys! Good Evening..."


h1Element.style.background = "orange"
h1Element.style.fontSize = "30px"

h1Element.classList.add("sampleClass")


function toggleTheme() {
  let activeClass = document.body.classList.toggle("active")
  if(activeClass) {
    document.body.style.backgroundColor = "red"
  } else {
    document.body.style.backgroundColor = "#000"
  }
}