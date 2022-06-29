let num =0;

var botao1 = document.querySelector("#botao1");
var botao2 = document.querySelector("#botao2");
var botao3 = document.querySelector("#botao3");
var reset = document.querySelector("#reset");
const valor = document.querySelector("#num");

botao1.onclick = () => {
    valor.textContent = parseInt(valor.textContent) + 1
}

botao2.onclick = () => {
    valor.textContent = parseInt(valor.textContent) + 10
}

botao3.onclick = () => {
    valor.textContent = parseInt(valor.textContent) + 100
}

reset.onclick = () => {
    valor.textContent = parseInt(valor.textContent) + Math.floor(Math.random() * 100)
}

setInterval(function () {
    valor.innerHTML = num++;
},10000);

/*                    FUNÇÂO TROCAR CSS                       */

const fruta = document.querySelector(".fruta-verde");

function amaduraFruta(fruta){
    fruta.classList.remove("fruta-verde");
    fruta.classList.add("fruta-madura");
}

setTimeout(() => {
    amaduraFruta(fruta);
}, 5000);