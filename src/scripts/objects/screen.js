const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML =  `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                            <div class="data"> 
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1> 
                                                <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                                                <p>👥Seguidores: ${user.followers}</p>
                                                <p>👤Seguindo: ${user.following}</p>                                            
                                            </div>
                                        </div>`

    let repositoriesItens = ''
    user.repositories.forEach((repo) => {
        
        repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">
        <div class="repo">
            <p class="repo-name">${repo.name}</p>
            
            <div class="repo-info">
                <p>🔋${repo.forks_count}</p>
                <p>⭐${repo.stargazers_count ?? `Não possui estrelas`}</p>
                <p>👀${repo.watchers_count}</p>
                <p>📕${repo.language ?? `🤷🏻`}</p>
            </div>
        </div>
        </a>
                                                                
    </li>`
    })
    
                                
    if(user.repositories.length > 0){
        this.userProfile.innerHTML +=  `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                        </div>`
        }
    
    let eventItens = ''
        user.events.forEach((event) => {
            
            if (event.type === "CreateEvent" || event.type === "PushEvent") {
                
                if (event.payload.commits) {
                    eventItens += `<li>${event.repo.name} - ${event.payload.commits[0].message}</li>`
                }else{
                    eventItens += `<li>${event.repo.name}</ - Evento do tipo Create</li>`
            }
        }})

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events">
                                            <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>
                                        </div>`
        }else {
            this.userProfile.innerHTML+='Este usuário não possui eventos!'
        }
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado 😥</h3>"
    }
}

export {screen}
