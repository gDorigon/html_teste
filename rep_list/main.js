const lista = document.querySelector(".repo_list");

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url ='https://api.github.com/users/gdorigon/repos';

fetch(url)
.then((resp) => resp.json())
.then((repositorios) => {
    repositorios.forEach(repositorio => {
        console.log(repositorio.name);
    })
})
.catch(function(error) {
  console.log(error);
});


lista.innerHTML(repositorio.name);