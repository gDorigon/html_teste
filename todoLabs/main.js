async function apiCreateTask (description, complete){

    const newTask = {description, complete}


    const url = 'http://localhost:3000/tasks';
    const options = {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }
    const response = await fetch(url, options);


    return await response.json();
}

async function apiGetTasks(){
    const url = 'http://localhost:3000/tasks';
    const response = await fetch(url);
    return await response.json();
}

async function apiUpdateTask(id, task){

    const url = `http://localhost:3000/tasks/${id}`;
    fetch (url, {
       method: "PUT",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })


} 



async function apiDeleteTask(id){

    const url = `http://localhost:3000/tasks/${id}`
    fetch (url, {
       method: "DELETE",
        headers:{
            'Content-Type': 'application/json'
        },

    })

}
 
// apiCreateTask("DAVIZAO", true);

apiGetTasks();

apiUpdateTask(116, {
    description: "Dorigas",
    complete: true,

})

// apiDeleteTask(62)
