class User {

    id
    name
    type
    status

    constructor(id, name, type, status) {
        this.id = id
        this.name = name
        this.type = type
        this.status = status
    }

    toString() {
        return `id: ${this.id} name: ${this.name} type: ${this.type} status: ${this.status}`
    }
}

const arrUser = [
    new User(1234567, "nnn", "emotion", false),
    new User(7654321, "hhh", "drama", false),
    new User(1237654, "sss", "thriller", true)]

function printUsers() {
    for (const u of arrUser)
        console.log(u.toString())
}

function UserTakeBook(id) {
    for (const u of arrUser) {
        if (u.id == id)
            return u
    }
    throw new Error(`user with code ${id} not found! `)
}

module.exports = { printUsers, UserTakeBook }