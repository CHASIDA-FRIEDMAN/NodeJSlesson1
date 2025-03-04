let count = 0

class Book {

    code
    name
    type
    status

    constructor(name, type, status) {
        count +=1
        this.code = count
        this.name = name
        this.type = type
        this.status = status
    }

    toString() {
        return `code: ${this.code} name: ${this.name} type: ${this.type} status: ${this.status}`
    }
}

const arrBook = [
    new Book("aaa", "thriller", true),
    new Book("bbb", "drama", false),
    new Book("ccc", "emotion", false)]

function printBooks() {
    for (const b of arrBook)
        console.log(b.toString())
}

function takeBook(c) {
    for (const b of arrBook) {
        if (b.code == c)
            return b
    }
    throw new Error(`book with code ${c} not found! `)
}
module.exports = { printBooks, takeBook }