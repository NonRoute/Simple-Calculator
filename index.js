let output = 0
let mem = 0
let operation = 0
let outputEl = document.getElementById("display")

function num(x) {
    outputEl.innerText = outputEl.innerText*10 + x
}

function op(x) {
    mem = parseFloat(outputEl.innerText)
    outputEl.innerText = 0
    operation = x
}

function enter() {
    switch(operation) {
        case 0: //reset
            outputEl.innerText = 0
            break;
        case 1: //+
            outputEl.innerText = mem + parseFloat(outputEl.innerText)
            break;
        case 2: //-
            outputEl.innerText = mem - parseFloat(outputEl.innerText)
            break;
        case 3: //*
            outputEl.innerText = mem * parseFloat(outputEl.innerText)
            break;
        case 4: //divide
            outputEl.innerText = mem / parseFloat(outputEl.innerText)
            break;
    }
    operation = 0
}