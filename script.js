//get all the selectors
//
//create event handlers for all the buttons
//
let slots = [
    {inUse: false, value: 0},
    {inUse: false, value: 0}
]
let resultStr = ''

const screen = document.querySelector('.screen')
screen.textContent = resultStr

const container = document.querySelector('.container')
container.addEventListener('click',(e) =>{
    if (e.target.classList.contains('button')){
        switch(true){
            case e.target.classList.contains('numbers'):
                console.log('number presssed')
                processNumber(e.target.id)
                break
            case e.target.classList.contains('operatorButton'):
                console.log('operator pressed')
                processOperator(e.target.id)
                break
            case e.target.classList.contains('funcButton'):
                console.log('function pressed')
                break
        }
    }
})

function processNumber(val){
    updateResultStr(val)
}

function processOperator(op){
    switch(op){
        case 'add':
            updateResultStr('+')

            break
        case 'subtract':
            updateResultStr('-')
            break
        case 'multiply':
            updateResultStr('X')
            break
        case 'divide':
            updateResultStr('\u00F7')
            break
        case 'equals':
    }
}

function processFunctionKey(fn){

}

function updateResultStr(newVal){
    newVal = newVal !== 'zero' ? newVal : '0'
    resultStr = resultStr += newVal
    screen.textContent = resultStr
}

function evaluate(){

}

