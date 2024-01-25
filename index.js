const display = document.getElementById("inputForDisplayOfCalcualtions");

function toDisplay(input){
    display.value += input;
}

function toClearTheDisplay(){
    display.value = '';
}

function toCalculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}