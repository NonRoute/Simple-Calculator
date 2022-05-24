let output = 0
let mem = 0
let operation = 0
let outputEl = document.getElementById("display")
let calEl = document.getElementById("calculation")

function num(x) {
    if (outputEl.innerText >= 0)
        outputEl.innerText = parseInt(outputEl.innerText)*10 + x
    else {
        outputEl.innerText = parseInt(outputEl.innerText)*10 - x
    }
    switch(operation) {
        case 0: //reset
            calEl.textContent = "History : "
            break;
        case 1: //+
            calEl.textContent = "History : " + mem + " + " + outputEl.innerText
            break;
        case 2: //-
            calEl.textContent = "History : " + mem + " - " + outputEl.innerText
            break;
        case 3: //*
            calEl.textContent = "History : " + mem + " x " + outputEl.innerText
            break;
        case 4: //divide
            calEl.textContent = "History : " + mem + " / " + outputEl.innerText
            break;
    }
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
            calEl.textContent = "History : "
            break;
        case 1: //+
            outputEl.innerText = mem + parseFloat(outputEl.innerText)
            calEl.textContent += " = " + outputEl.innerText
            break;
        case 2: //-
            outputEl.innerText = mem - parseFloat(outputEl.innerText)
            calEl.textContent += " = " + outputEl.innerText
            break;
        case 3: //*
            outputEl.innerText = mem * parseFloat(outputEl.innerText)
            calEl.textContent += " = " + outputEl.innerText
            break;
        case 4: //divide
            outputEl.innerText = (mem / parseFloat(outputEl.innerText)).toFixed(4)
            calEl.textContent += " = " + outputEl.innerText
            break;
    }
    operation = 0
}