import { LinkedList } from "./LinkedList.js"

export class Queue {

  list

  constructor() {
    this.list = new LinkedList()
  }

  enqueue(element) {
    this.list.push(element)
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow"
    }
    return this.list.shift()
  }

  front() {
    if (this.isEmpty()) {
      return "No elements in Queue"
    }
    return this.list.head.data
  }

  isEmpty() {
    return this.list.size === 0
  }

  size() {
    return this.list.size
  }


  printQueue() {
    let str = ""
    let current = this.list.head
    while (current) {
      let i = 0
      str += "\n"+current.data.nombre + " " + current.data.telefono
      current = current.next
    }
    return str.trim()
  }
}

