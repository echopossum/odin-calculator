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
                break
            case e.target.classList.contains('funcButton'):
                console.log('function pressed')
                break
        }
    }
})

function processNumber(val){
    console.log(val)
}

function processOperator(id){

}

function processFunctionKey(id){

}

