async function events(userName) {
    
    const response = await fetch(`https://api.github.com/users/${userName}/events?per_page=10`);
    return await response.json()
}

export { events }

