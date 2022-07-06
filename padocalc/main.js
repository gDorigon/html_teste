const displayElement = document.querySelector("#display")
const buttonsElement = document.querySelectorAll(".btn")
let display = "0";

buttonsElement.forEach(
    (buttonElement) => {
        buttonElement.onclick = onButtonClickEvent
    })

function onButtonClickEvent(event){
    const buttonElement = event.target

    switch (buttonElement.innerText) {
        case "C":
            limparDisplay()
            break;
        case "=":
            calcularResultado()
            break;
        default:
            adicionarCaracter(buttonElement.innerText)
            break;
    }
    updateDisplay()
}

function limparDisplay(){
    display = "0"
}

function calcularResultado(){
    try{
        display = eval(display)
    }catch(erro){
        display = "error"
    }
}

function adicionarCaracter(text){
    if(display === "0" && text !== "." || display === "error."){
        display = ""
    }
    display += text
}


function updateDisplay(){
    displayElement.innerText = display
}