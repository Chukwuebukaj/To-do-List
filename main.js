let addToDoButton = document.getElementById("addToDo")
let toDoContainer = document.getElementById("toDoContainer")
let inputField = document.getElementById("inputfield")

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value
    toDoContainer.appendChild(paragraph)
    inputField.value = ''
    let firstClick = true
    paragraph.addEventListener('click', function() {
        if (firstClick) {
            paragraph.style.textDecoration = "line-through"
            firstClick = false
        } else {
            paragraph.style.textDecoration = "none"
            firstClick = true
        }
    })
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph)
    })
})

