async function apiCreateTask(description, complete) {
    const url = 'http://localhost:3000/tasks'
    const newTask = { description, complete }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }

    const response = await fetch(url, options);

    return await response.json();
}



async function apiUpdateTask(id) {
    const url = 'http://localhost:3000/tasks/' + id
    const taskPut = {description: "task before PUT", complete: true}
    
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskPut)
    }

    const response = await fetch(url, options);
    return await response.json();
    
}

async function apiDeleteTask(id) {
    const url = 'http://localhost:3000/tasks'
    
}

async function apiGetTask() {
}


apiCreateTask("task after PUT", false);
apiUpdateTask(30)