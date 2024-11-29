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

const container = document.querySelector('.container')
container.addEventListener('click',(e) =>{
    if (e.target.classList.contains('button')){
        switch(true){
            case e.target.classList.contains('numbers'):
                //console.log('number presssed')
                processNumber(e.target.id)
                break
            case e.target.classList.contains('operatorButton'):
                //console.log('operator pressed')
                processOperator(e.target.id)
                break
            case e.target.classList.contains('funcButton'):
                //console.log('function pressed')
                processFunctionKey(e.target.id)
                break
        }
    }
})

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
    updateResultStr(toString(result))
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


//evaluate(12,9,'add')