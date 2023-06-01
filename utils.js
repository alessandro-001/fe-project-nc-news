import axios from "axios";


const articlesApi = axios.create({
    baseURL: 'https://nc-news-be-project.onrender.com/api'
})


/*  FUNCTIONS  */
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

function fetchComments(article_id) {
    return articlesApi
        .get(`/articles/${article_id}/comments`)
        .then((res) => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        }); 
}

/*-------afternoon work-------*/
function upVoteArticle(article_id) {
    const patchBody = {inc_votes: 1}
    return articlesApi
        .patch(`/articles/${article_id}`, patchBody)
        .then(({data}) => data)
        .catch(err => {
            console.log(err)
        });
}

function downVoteArticle(article_id) {
    const patchBody = {inc_votes: -1}
    return articlesApi
        .patch(`/articles/${article_id}`, patchBody)
        .then(({data}) => data)
        .catch(err => {
            console.log(err)
        });
}   


/*  EXPORTS  */
export {
    fetchArticles,
    fetchArticleCard,
    fetchComments,
    upVoteArticle,
    downVoteArticle
}