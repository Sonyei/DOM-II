// Your code goes here

const busImg = document.querySelector('.intro img')
 const letsGo = document.querySelector('.text-content h2')
 const parColor = document.querySelector('.intro p')
const navAll = document.querySelector('nav a')
const body = document.querySelector('body')

busImg.addEventListener('mouseover', function(event){
    busImg.style.width = '50%';
})

busImg.addEventListener('mouseleave', function(event){
    busImg.style.width = '100%';
})

parColor.addEventListener('mouseout', function(event){
    parColor.style.color = 'blue';
})

document.addEventListener('keyup', (event) => {
    body.style.backgroundColor = "pink"
})

 document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      navAll.style.color = "white";
    }
})

let navBar = document.querySelector('nav')
navBar.addEventListener("click", function( event){
    event.preventDefault();
 });

 letsGo.addEventListener('dblclick',function(event){
    letsGo.style.fontSize = '500%'
 })

window.addEventListener('scroll', function(event){
    parColor.style.opacity 
})

window.addEventListener('load', function(event) {
    alert('Hello World')
    console.log('Hello World')
});

window.addEventListener('resize', function(event) {
    console.log('Resizing \'cause we blind')
})