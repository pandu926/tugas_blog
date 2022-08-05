const repo = require("../article/article.repo");


const getArticle = async(user_id) => {
    return await repo.getArticleAll(user_id);
}
const getSingle = async(id, user_id) => {
    const data = await repo.getSingleArticle(id);
    if (data.user_id == user_id) {
        return data;
    }
    return "bukan milikmu";

}
const addPost = async({ user_id, title, body, post_image }) => {
    return await repo.createPostRepo({ user_id, title, body, post_image });
}

const updatePost = async({ id, user_id, title, body, post_image }) => {
    const data = await repo.getSingleArticle(id);
    if (data.user_id == user_id) {
        return await repo.updatePostRepo({ id, title, body, post_image });
    }
    return "anda bukan penulisnya";
}

const deletePost = async({ id, user_id }) => {
    const data = await repo.getSingleArticle(id);
    if (data.user_id === user_id) {
        return await (repo.deletePostRepo(id), repo.getArticleAll(user_id));
    }
    return "bukan milikmu";
}

const service = {
    getArticle,
    addPost,
    updatePost,
    getSingle,
    deletePost
}

module.exports = service;