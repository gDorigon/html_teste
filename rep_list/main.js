const repositorios = { user: 'gdorigon'};

fetch('https://api.github.com/users/gdorigon/repos', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/vnd.github+json',
    },
    body: JSON.stringify(repositorios),
})