async function apiCreateTask(description, complete) {

    const newTask = { description, complete }

    const url = 'http://localhost:3000/tasks';
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }
    const response = await fetch(url, options);

    return await response.json();
}

async function apiGetTasks() {
    const url = 'http://localhost:3000/tasks';
    const response = await fetch(url);
    return await response.json();
}

async function apiUpdateTask(id, task) {

    const url = `http://localhost:3000/tasks/${id}`;
    fetch(url, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
}

async function apiDeleteTask(id) {

    const url = `http://localhost:3000/tasks/${id}`
    fetch(url, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

// apiUpdateTask(116, {
//     description: "Dorigas",
//     complete: true,
// })


const addElement = querySelector("#add");
addElement.onclick = async => {
    
    console.log("teste")
    const tarefa = document.createElement("div");
    tarefa.classList.add("itens");
    
    tarefa.innerText = "teste"
    
    document.getElementById("lista").appendChild(tarefa);
}



// var cb = document.querySelector(".checkbox-tarefa");
// cb.setAttribute("checked", "checked");



