//get all the selectors
//
//create event handlers for all the buttons
//
let screenStr = ''
let leftStr = ''
let rightStr = ''
let holdingStr = ''

let currentOperator

const screen = document.querySelector('.screen')
screen.textContent = screenStr



function processNumber(val){
    val = val !== 'zero' ? val : '0'
    updateResultStr(val)
    holdingStr = holdingStr += val
}

function processOperator(op){
    let check = checkIfOperatorIsAllowed()
    if(!check){return}

    if(op === 'equals'){
        evaluate(Number(leftStr),Number(holdingStr),currentOperator)
        return
    }

    if(currentOperator){

    }
    else{
        leftStr = holdingStr
        holdingStr = ''
        currentOperator = op
    }

    switch(op){
        case 'add':
            updateResultStr('+')

            break
        case 'subtract':
            updateResultStr('-')
            break
        case 'multiply':
            updateResultStr('x')
            break
        case 'divide':
            updateResultStr('/')
            break
    }
}

function processFunctionKey(fn){
    console.log(fn)
    switch(fn){
        case 'clear':
            screenStr = ''
            holdingStr = ''
            screen.textContent = ''
            break

        case 'backspace':

        case 'modulo':

    }
}

function updateResultStr(newVal){
    screenStr = screenStr += newVal
    if(screenStr.length > 11){
        
    }
    screen.textContent = screenStr
}

function evaluate(val1,val2,op){
    let result
    switch(op){
        case 'add':
            result = val1 + val2
            break
        case 'subtract':
            result = val1 - val2
            break
        case 'multiply':
            result = val1 * val2
            break
        case 'divide':
            result = val1 / val2
            break
    }
    screenStr = ''
    updateResultStr(result)
    holdingStr = toString(result)
    currentOperator = ''
    console.log(`Result is ${result}`)
}

function checkIfOperatorIsAllowed(){
    if(screenStr.length === 0){
        return false
    }
    
    if(isNaN(screenStr.slice(-1))){
        return false
    }

    return true
}