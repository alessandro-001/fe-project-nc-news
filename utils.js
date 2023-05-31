import axios from "axios";

const articlesApi = axios.create({
    baseURL: 'https://nc-news-be-project.onrender.com/api'
})


//FUNCTIONS

function fetchArticles() {
    return articlesApi
        .get('/articles')
        .then((res) => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        });
}

function fetchArticleCard(article_id) {
    return articlesApi
        .get(`/articles/${article_id}`)
        .then((res) => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        });
}


//EXPORTS
export {
    fetchArticles,
    fetchArticleCard
}