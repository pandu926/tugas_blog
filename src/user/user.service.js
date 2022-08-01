const repo = require("./user.repo");

const register = async(fullname, username, password) => {
    const usersExist = await repo.getUsersByUsername(username);
    if (!usersExist) {
        return await repo.repoRegister(fullname, username, password);
    } else {
        return "user sudah ada";
    }
}

const getUsersAll = async() => {
    return await repo.getUsersAll();
}

const service = {
    register,
    getUsersAll,
}

module.exports = service;