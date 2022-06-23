var botao = document.querySelector("#botao")
const valor = document.querySelector("#number")

botao.onclick = () => {
    valor.textContent = parseInt(valor.textContent) + 1
}