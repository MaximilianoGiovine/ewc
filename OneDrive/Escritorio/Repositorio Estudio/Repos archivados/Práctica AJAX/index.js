const addUserButton = document.getElementById('addUserButton')

let i = 1

class user {
    constructor(id, name, username, email) {
        this.id = id
        this.name = name
        this.username = username
        this.email = email
    }
}

class repository {
    constructor() {
        this.users = []
    }
    createUser ({ id, name, username, email }) {
        const newUser = new user(id, name, username, email)
        this.users.push(newUser)
    }
}
const repositorio = new repository

const refresh = () => {
    const usersContainer = document.getElementById('usersContainer')
    usersContainer.innerHTML= '';
    
    const users = repositorio.users;
    const htmlUsers = users.map((user) => {
        const name = document.createElement('h3')
        const email = document.createElement('p')

        name.innerHTML = user.name
        email.innerHTML = user.email

        const card = document.createElement('div')
        card.appendChild(name)
        card.appendChild(email)

        return card
    })

    htmlUsers.forEach(card =>{
        usersContainer.appendChild(card)
    })
}

const addUser = () => {
    if (i > 10) return alert('No hay más usuarios')
    $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data, status) =>{
        i++
        repositorio.createUser(data)
        refresh()
    })
}


addUserButton.addEventListener('click', addUser)