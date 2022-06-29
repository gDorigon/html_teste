let flag = 0;
let vSec = 0;
let vMin = 0;
let vHora = 0;
let temp = 0;

var botao = document.querySelector(".botao-start");

const hora = document.querySelector(".hora");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function timer() {

    ++vSec
    if (vSec > 59) {
        vSec = 0;
        ++vMin
        if (vMin > 59) {
            vMin = 0;
            ++vHora
            if (vHora > 23) {
                vHora = 0;
            }
        }
    }
    sec.innerHTML = vSec;
    min.innerHTML = vMin;
    hora.innerHTML = vHora;
}

botao.onclick = () => {
    flag += 1;

    switch (flag) {

        case 1:
            temp = setInterval(timer, 1000);

            botao.classList.remove("botao-start");
            botao.classList.add("botao-pause");
            botao.innerHTML = "STOP"
        break;

        case 2:
            clearInterval(temp);

            botao.classList.remove("botao-pause");
            botao.classList.add("botao-reset");
            botao.innerHTML = "RESET"
        break;


        case 3:
            vSec = 0;
            vMin = 0;
            vHora = 0;
            flag = 0;
            
            sec.innerHTML = vSec;
            min.innerHTML = vMin;
            hora.innerHTML = vHora;
            
            botao.classList.remove("botao-reset");
            botao.classList.add("botao-start");
            botao.innerHTML = "START"
        break;

    }


}



