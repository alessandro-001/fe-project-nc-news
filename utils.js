import axios from "axios";

const articlesApi = axios.create({
    baseURL: 'https://nc-news-be-project.onrender.com/api'
})


/*  FUNCTIONS  */
function fetchArticles() {
    let query = '/articles'
    return articlesApi
      .get(query)
      .then((res) => {
        return res.data;
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

function voteArticle(article_id, number_votes) {
    const patchBody = {inc_votes: number_votes}
    return articlesApi
        .patch(`/articles/${article_id}`, patchBody)
        .then(({data}) => data)
        .catch(err => {
            console.log(err)
        });
}

function postComment(newComment, user, article_id) {
    const commentToAdd = {username: user, body: newComment}
    return articlesApi
        .post(`/articles/${article_id}/comments`, commentToAdd)
        .then(({data}) => {
            return data.commentPosted[0]
        })
        .catch(err => {
            console.log(err)
        });
}


function fetchTopics() {
    return articlesApi
        .get("/topics")
        .then((res) => {
        return res.data;
        })
        .catch(err => {
            console.log(err)
        });
 }


/*  EXPORTS  */
export {
    fetchArticles,
    fetchArticleCard,
    fetchComments,
    voteArticle,
    postComment,
    fetchTopics
}