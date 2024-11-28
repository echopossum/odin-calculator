//get all the selectors
//
//create event handlers for all the buttons
//
const container = document.querySelector('.container')
container.addEventListener('click',(e) =>{
    if (e.target.classList.contains('button')){
        switch(true){
            case e.target.classList.contains('numbers'):
                console.log('number presssed')
                break
            case e.target.classList.contains('operatorButton'):
                console.log('operator pressed')
                break
        }
    }
})

function processNumer(id){

}

function processOperator(id){

}

function processFunctionKey(id){

}

