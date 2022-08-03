const repo = require("../article/article.repo");


const getArticle = async(user_id) => {
    return await repo.getArticleAll(user_id);
}

const service = {
    getArticle,
}

module.exports = service;