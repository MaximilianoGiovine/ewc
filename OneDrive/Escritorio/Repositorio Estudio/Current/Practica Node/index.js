const Contenedor = []

class personaje {
    constructor (nombre, status, libro, autor) {
        this.nombre = nombre
        this.status = status
        this.libro = libro
        this.autor = autor
    }
}

function insertarPersonaje (nombre, status, libro, autor) {
    const personajeDelLibro = new personaje(nombre, status, libro, autor)

    Contenedor.push(personajeDelLibro)

    console.log(Contenedor)
}

