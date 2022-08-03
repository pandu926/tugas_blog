const { user } = require("../database/models");

const getUsersAll = async() => {
    return await user.findAll();
}

const repoRegister = async({ fullname, username, password }) => {
    return await user.create({
        fullname: fullname,
        username: username,
        password: password,
    });
}
const getUsersByUsername = async(username) => {
    return await user.findOne({
        where: { username: username }
    });
}
const repo = {
    repoRegister,
    getUsersByUsername,
    getUsersAll,
}

module.exports = repo;