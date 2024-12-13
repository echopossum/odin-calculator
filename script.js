let number1 
let number2 
let currentOperator = ''
let decimalUsed = false
let screenStr = ''
let result = 0

const screen = document.querySelector('.screen')
screen.textContent = screenStr

const numbers = document.querySelectorAll('.numbers')
numbers.forEach(element => {
    element.addEventListener('click',() => {
        processNumber(element.id)
    })
});

function processNumber(num){
    if(num === '.' && !decimalUsed){
        console.log('decimal allowed')
        decimalUsed = true
        updateScreen(num)

    }
    else if(num !== '.'){
        console.log(num)
        updateScreen(num)
    }
}

const operators = document.querySelectorAll('.operatorButton')
operators.forEach(element => {
    element.addEventListener('click', () => {
        if(element.id === 'equals'){
            if(checkIfEvaluationNeeded()){
                operatorFunctions[element.id](element)
            }
            
        }
        else{
            if(checkIfOperatorIsAllowed()){
                currentOperator = element.id
                deselectOperators()
                element.classList.add('operatorSelected')
            }
            
        }
    })
})

const operatorFunctions = {
    add: function(val1,val2){
        console.log('add')
        return val1 + val2
    },
    subtract: function(val1,val2){
        console.log('subtract')
        return val1 - val2
    },
    multiply: function(val1,val2){
        console.log('multiply')
        return val1 * val2
    },
    divide: function(val1,val2){
        console.log('divide')
        return val1 / val2
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

const funcs = document.querySelectorAll('.funcButton')
funcs.forEach(element => {
    element.addEventListener('click', () => {
        funcFunctions[element.id](element)
    })
})

const funcFunctions = {
    clear: function(){
        number1 = 0
        number2 = 0
        currentOperator = ''
        decimalUsed = false
        screenStr = ''
        updateScreen('')
        deselectOperators()
    },
    backspace: function(){
        console.log('backspace')
    },
    modulo: function(){
        console.log('modulo')
    }
}

function updateScreen(val){
    if(screenStr.length < 11){
        screenStr = screenStr += val
        screen.textContent = screenStr
    }
}

function checkIfEvaluationNeeded(){
    if(number1 === undefined){
        return false
    }

    if(currentOperator === ''){
        return false
    }

    return true
}

function checkIfOperatorIsAllowed(){
    if(screenStr === ''){
        return false
    }
    return true
}