// ? 1. DOM Fundamentals & Selectors.
// ! 2. DOM Manipulation & Styling.
// * 3. DOM Events & Event Handling.
// Todo 4. Creating and Adding Elements Dynamically.
// 5. Callback Functions in DOM Context.


// ? 1. DOM Fundamentals & Selectors.
// DOM Nodes - Element, Attribute, Content.
// DOM Selectors.


// ! Select by ID
// const divId = document.getElementById("divId")
// console.log(divId)

// ? Select by class
// const pClass = document.getElementsByClassName("pClass")
// console.log(pClass) // Array

// * Select by Tag
// const h1Tag = document.getElementsByTagName("h1")
// console.log(h1Tag) // Array

// ? Modern Selectors
// const ele = document.querySelector("#divId")
// console.log(ele)

// const elements = document.querySelectorAll("h1")
// console.log(elements)


const h1Element = document.getElementById("h1Id")
console.log(h1Element)
console.log(h1Element.innerHTML)
console.log(h1Element.innerText)


h1Element.style.background = "orange"
h1Element.style.fontSize = "30px"
h1Element.style.fontWeight = "bold"

h1Element.classList.add("sampleClass")


function toggleTheme() {
  let activeClass = document.body.classList.toggle("active")
  console.log(activeClass)
  if(activeClass) {
    document.body.style.backgroundColor = "red"
    h1Element.textContent = "Hey Guys! Good Evening..."
  } else {
    document.body.style.backgroundColor = "#000"
    h1Element.textContent = "esertfyghujiolpoiuygkt"
  }
}



// setTimeout(() => alert("Hellllooooooo"), 5000)

// DOM Events and Handling

// ? Event = User or System Interaction.
// Event Listeners = Function that runs when event occur.


const button = document.querySelector("#myButton")
console.log(button)
button.addEventListener("click", function(e) {
  console.log("Button Clicked!", e,  e.target)
})

button.onclick = function(e) {
  console.log("Button Clicked!", e,  e.target)
}

// ? Event Delegation

document.querySelector("ul").addEventListener("click", (e) => {
  if(e.target.tagName === "LI") {
    console.log("List item Clicked:", e.target.textContent)
  }
})


// Creating & Adding Elements Dynamically.

const newDiv = document.createElement("div")
console.log(newDiv)
newDiv.textContent = "Hello, DOM, We added a div element."
console.log(newDiv)


document.body.appendChild(newDiv)
newDiv.remove()

// Callback Functions

setTimeout(() => {
  const alertBox = document.createElement("h1")
  alertBox.textContent = "Timeout completed!"
  document.body.appendChild(alertBox)
}, 5000)