let numbers = document.querySelectorAll('.button_hover_green');
let operators = document.querySelectorAll('.button_hover_yellow');
let clearBtns = document.querySelectorAll('.clear_btns');
let resultBtn = document.getElementById('result');
let dot = document.getElementById('dot');
let display = document.getElementById('display');
let memoryCurrentNumber = 0;
let memoryNewNumber = false;
let memoryPendingOperation = '';


//Добавление ивентов
for (let i = 0; i < numbers.length; i++){ 
    let number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
};

for (let i = 0; i < operators.length; i++){ 
    let operator = operators[i];
    operator.addEventListener('click', function(e) {
        operation(e.target.textContent);
    });
};

for (let i = 0; i < clearBtns.length; i++){ 
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function (e) {
        clear(e.srcElement.id);
        
    });
};

resultBtn.addEventListener('click', result);

dot.addEventListener('click', decimal);

//Фунцкии
function numberPress(number) {
if (memoryNewNumber){
    display.value = number;
    memoryNewNumber = false;
} 
else {

    if(display.value === '0'){
        display.value = number;
    } else {
        display.value += number;
        };
    };
};

function operation(op) {
let localOperationMemory = display.value;

if (memoryNewNumber && memoryPendingOperation !== '='){
    display.value = memoryCurrentNumber
} else {
    memoryNewNumber = true;
if (memoryPendingOperation === '+') {
        memoryCurrentNumber += parseFloat(localOperationMemory);
    } 
    else if (memoryPendingOperation === '-') {
        memoryCurrentNumber -= parseFloat(localOperationMemory);
    }
    else if (memoryPendingOperation === '*') {
        memoryCurrentNumber *= parseFloat(localOperationMemory);
    }
    else if (memoryPendingOperation === '/') {
        memoryCurrentNumber /= parseFloat(localOperationMemory);
    } 
    else {
        memoryCurrentNumber = localOperationMemory;
    }
    display.value = memoryCurrentNumber;
    memoryPendingOperation = op;
    }
};

function decimal() {
    let localDecimalMemory = display.value;
    if (memoryNewNumber) {
        localDecimalMemory = '0.';
        memoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        }
    }
    display.value = localDecimalMemory;
};

function clear(id) {
if (id === 'ce') {
    display.value = '0';
    memoryCurrentNumber = 0;
    memoryNewNumber = true;
    memoryPendingOperation = '';
} else if (id === 'c') {
    display.value = '0';
    memoryNewNumber = true;
}
};
