const fs = require('fs')
const { resolve } = require('path')
const path = './users.json'

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

function initUsers() {
    try {
        const data = JSON.stringify(arrUser, null, 2)
        fs.writeFileSync(path, data, 'utf8')
        console.log("users data success!")
    } catch (err) {
        console.log("users data error!")
    }
}

function readUsers() {
    return new Promise((resolve,reject)=>{
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                return reject(err)
            }
            const users = JSON.parse(data)
            resolve(users)
        })
    })
}



function printUsers(callback) {
    readUsers().then((users)=>{
        for (const u of users)
            console.log(JSON.stringify(u, null, 2))
    })
    .catch((err)=>console.log(err))
}

function UserTakeBook(id) {
    return new Promise((resolve,reject)=>{
        readUsers().then((users)=>{
            const user = users.find(u => u.id == id)
            if (!user) {
                return reject(new Error(`user with code ${id} not found! `))
            }
            resolve(user)
        })
        .catch((err)=>reject(err))
    })
    
}

module.exports = { printUsers, UserTakeBook, initUsers }