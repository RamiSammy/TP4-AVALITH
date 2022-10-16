
const User = require("../../models/Users")

 const getAllUsers = () => {
    const users = User.getAllUsers()
    return users
}

 const getOneUser = (name) => {
    const user = User.getOneUser(name)
    return user
}

 const createUser = (newUser) => {
    const user = User.createUser(newUser)
    return user
}

 const updateUser = (id, newUser) => {
    const user = User.updateUser(id, newUser)
    return user
}

 const deactiveUser = (id) => {
    const user = User.deactiveUser(id)
    return user
}

 const activeUser = (id) => {
    const user = User.activeUser(id)
    return user
}


module.exports = {
    getAllUsers, 
    getOneUser , 
    createUser ,
    updateUser,
    deactiveUser,
    activeUser


}