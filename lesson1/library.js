const codeBook = 2
const userId = 1234567

const { takeBook, printBooks } = require('./books')
const { printUsers, UserTakeBook } = require('./users')

printBooks()
printUsers()

console.log(takeBook(codeBook))
console.log(UserTakeBook(userId))


const book = takeBook(codeBook)
const user = UserTakeBook(userId)

let b = true

if (book.type === user.type) {
    b = false
    console.log("the book's type match to the user's type")
}

if (book.status) {
    b = false
    console.log("the book is taked! ")
}

if (user.status) {
    b = false
    console.log("the user taked other book! ")
}

if(b)
{
    book.status = true
    user.status = true
    console.log("the user taked this book! ")
}

printBooks()
printUsers()