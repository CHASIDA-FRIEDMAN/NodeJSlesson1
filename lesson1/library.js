//const codeBook = 2
//const userId = 1234567

const { takeBook, printBooks, initBooks } = require('./books')
const { printUsers, UserTakeBook, initUsers } = require('./users')

//initBooks()
//initUsers()

// קבל קלט משורת הפקודה
const args = process.argv.slice(2)
const codeBook = parseInt(args[0])
const userId = parseInt(args[1])

printBooks()
printUsers()

async function library() {
    const book = takeBook(codeBook)
    try {
        const user = await UserTakeBook(userId)

        let can = true

        if (book.type === user.type) {
            can = false
            console.log("the book's type match to the user's type")
        }

        if (book.status) {
            can = false
            console.log("the book is already taken! ")
        }

        if (user.status) {
            can = false
            console.log("the user already has another book! ")
        }

        if (can) {
            book.status = true
            user.status = true
            console.log("the user successfully took this book! ")
        }

       // printBooks()
        //printUsers()

        console.log(JSON.stringify(book, null, 2)) // הדפס את הספר כ-JSON
        console.log(JSON.stringify(user, null, 2)) // הדפס את המשתמש כ-JSON

    } catch (err) {
        console.log("error:", err)
    }

}
library()