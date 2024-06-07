import './less/index.less'

// Your code goes here!

// Mouseover
const navLinkElement = document.querySelector('.nav');

function mouseOverHandler(event) {
    if (event.target.nodeName === 'A') {
        event.target.style.color = 'white';
        event.target.style.backgroundColor = 'pink'; ;    
    }
}

navLinkElement.addEventListener('mouseover', mouseOverHandler)

// keydown
function keyDownHandler() {
    document.body.style.backgroundColor = 'lime'
}
document.querySelector('body').addEventListener('keydown', keyDownHandler)

// wheel
function wheelHandler() {
    document.querySelector('.main-navigation').style.fontWeight = 'bold';
}
document.querySelector('body').addEventListener('wheel', wheelHandler)

// load
function loadHandler() {
    alert("Loaded!")
}
window.addEventListener('load', loadHandler)

// focus
function focusHandler(event) {
    event.target.style.border = '2px solid skyBlue'
    event.target.style.padding = '5px 10px';
}
document.querySelector('.nav-link').addEventListener('focus', focusHandler)

// click
function clickHandler(event) {
    event.target.style.color = 'brown';
}
document.querySelector('h2').addEventListener('click', clickHandler);

// scroll
function scrollHandler() {
    console.log('scrolling')
}
document.addEventListener('scroll', scrollHandler)

// select
function selectHandler() {
    document.getSelection().focusNode.parentElement.style.backgroundColor = 'salmon';
}
document.addEventListener("selectionchange", selectHandler)

// dblclick
function dbClickHandler() {
    // alert('You double clicked!')
    console.log('Dobule clicking!')
}
document.querySelector('img').addEventListener('dblclick', dbClickHandler)

// drag / drop
const draggedElement = document.querySelector('h2')
draggedElement.draggable = true;
const dropZone = document.querySelector('img')

draggedElement.addEventListener('dragstart', function(event){

})
dropZone.addEventListener('dragover', (event) => {event.preventDefault()})
dropZone.addEventListener('drop', function(event){
    dropZone.prepend(draggedElement)
})