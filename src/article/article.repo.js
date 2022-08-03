const { post } = require("../database/models");

const getArticleAll = async(user_id) => {
    return await post.findAll({
        where: { user_id: user_id }
    });
}

const repo = {
    getArticleAll,
}

module.exports = repo;