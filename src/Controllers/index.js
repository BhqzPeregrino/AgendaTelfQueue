import { agenda } from "./dependencies.js"

const add = document.getElementById("add")
add.addEventListener("click", () => {
    let nombre = document.getElementById("name").value
    let tel = document.getElementById("tel").value

    agenda.agregarContacto(nombre, tel)
    console.log(agenda.verContactos())
})

const search = document.getElementById("search")
search.addEventListener("click", () => {
    let nombre = document.getElementById("nameSearch").value
    let viewContact = document.getElementById("viewContact")
    viewContact.innerText = agenda.buscarContacto(nombre)
})

const view = document.getElementById("view")
view.addEventListener("click", () => {
    let windowElement = document.getElementById("window")
    windowElement.innerText = agenda.verContactos()
})

const delFifo = document.getElementById("delFifo")
delFifo.addEventListener("click", () => {
    agenda.eliminarFIFO()
})