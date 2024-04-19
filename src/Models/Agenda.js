import { Queue } from "./Queue.js"

export class Agenda {
    contacto

    constructor() {
        this.contacto = new Queue()
    }

    agregarContacto(nombre, telefono) {
        this.contacto.enqueue({ nombre, telefono })
    }

    verContactos() {
        return this.contacto.printQueue()
    }

    buscarContacto(nombre) {
        let encontrado = false
        let contacto = ""
        let tempQueue = new Queue()

        while (!this.contacto.isEmpty()) {
            let contact = this.contacto.dequeue()
            if (contact.nombre === nombre) {
                contacto = contact.nombre + " " + contact.telefono
                encontrado = true
                return contacto
            }
            tempQueue.enqueue(contact)
        }

        while (!tempQueue.isEmpty()) {
            this.contacto.enqueue(tempQueue.dequeue())
        }

        if (!encontrado) {
            return "contacto no encontrado"
        }
    }

    eliminarFIFO() {
        this.contacto.dequeue()
    }
}