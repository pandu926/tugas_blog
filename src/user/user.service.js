const repo = require("./user.repo");
const bcrypt = require("bcrypt");

const register = async({ fullname, username, password }) => {
    const hashPassword = await bcrypt.hash(password, 10);
    const usersExist = await repo.getUsersByUsername(username);
    if (!usersExist) {
        return await repo.repoRegister({ fullname, username, password: hashPassword });
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