const fs = require('fs')
const path = './books.json'

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

function initBooks(){
    try{
        const data = JSON.stringify(arrBook,null,2)
        fs.writeFileSync(path,data,'utf8')
        console.log("books data success!")
    } catch (err){
        console.log("books data error!")
    }
}

function readBooks(){
    try{
        const data = fs.readFileSync(path,'utf8')
        return JSON.parse(data)
    } catch(err){
        console.log("error reading books file:",err)
        return []
    }
}

function printBooks() {
    const books = readBooks()
    for (const b of books)
        console.log(JSON.stringify(b, null, 2)) // הדפס את הספר כ-JSON
}

function takeBook(c) {
    const books = readBooks()
    for (const b of books) {
        if (b.code == c)
            return b
    }
    throw new Error(`book with code ${c} not found! `)
}
module.exports = { printBooks, takeBook ,initBooks}