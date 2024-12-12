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
        processOperator(element.id)
    })
})

function processOperator(op){
    console.log(op)
}
