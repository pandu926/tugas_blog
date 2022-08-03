const repo = require("./auth.repo");

const dataUser = async(username) => {
    return await repo.getUsersByUsername(username);
}

const service = {
    dataUser,
}

module.exports = service;