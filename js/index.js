// Your code goes here
const nav = document.querySelector(".nav")
const links = document.querySelectorAll(".nav-link")
const buttons = document.querySelectorAll(".btn")
console.log(links)

const xContainer = document.querySelector(".container")
console.log(xContainer)

xContainer.addEventListener ('keydown', (event) => {
if (event.key === 'Tab') {
    xContainer.style.backgroundColor = "turquoise"
    }
})

links.forEach((ele) => {
    ele.addEventListener('mouseover', (event) => {
    event.target.style.color = "white"
    })
});

links.addEventListener((ele) => {
    ele.addEventListener('focus', (event) => {
    event.target.style.color = "purple"
    })
});

