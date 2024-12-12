let number1 = 0
let number2 = 0
let currentOperator = ''
let decimalUsed = false
let screenStr = ''

const screen = document.querySelector('.screen')
screen.textContent = screenStr

const numbers = document.querySelectorAll('.numbers')
numbers.forEach(element => {
    element.addEventListener('click',() => {
        processNumber(element.id)
    })
});

function processNumber(num){
    console.log(num)
}

const operators = document.querySelectorAll('.operatorButton')
operators.forEach(element => {
    element.addEventListener('click', () => {
        deselectOperators()
        element.classList.add('operatorSelected')
        operatorFunctions[element.id](element)
    })
})

let operatorFunctions = {
    add: function(){
        console.log('add')
    },
    subtract: function(){
        console.log('subtract')
    },
    multiply: function(){
        console.log('multiply')
    },
    divide: function(){
        console.log('divide')
    },
    equals: function(element){
        console.log('equals')
        element.classList.remove('operatorSelected')
    }
}

function deselectOperators(){
    operators.forEach(element => {
        element.classList.remove('operatorSelected')
    })
}

