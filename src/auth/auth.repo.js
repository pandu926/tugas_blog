const { user } = require("../database/models");

const getUsersByUsername = async(username) => {
    return await user.findOne({
        where: { username: username },
        raw: true
    });
}
const repo = {
    getUsersByUsername,
}

module.exports = repo;