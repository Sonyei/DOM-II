// Your code goes here
const firstLink = document.querySelector(".nav-link")
console.log(firstLink)

const xContainer = document.querySelector(".nav")
console.log(xContainer)

firstLink.addEventListener ('keydown', (event) => {
if (event.key === 'a') {
    xContainer.style.backgroundColor = "pink"
    }
})

firstLink.addEventListener('mouseover', function(event)  {
    event.target.style.color = "white"
})

firstLink.addEventListener('focus', function(event) {
    event.target.style.color = "purple"
})