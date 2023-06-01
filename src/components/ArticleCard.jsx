import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleCard, upVoteArticle, downVoteArticle } from "../../utils";
import CommentSection from "./CommentSection";


/* SINGLE ARTICLE CARD */

function ArticleCard() {
    const [articleCard, setArticleCard] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams()

    useEffect(() => {
        fetchArticleCard(article_id)
            .then(({ article }) => {
                setArticleCard(article)
                setIsLoading(false)
            })
    }, []);
 
    //VOTE HANDLERS
    function handleUpvote() {
        setArticleCard((articleCard) => {
            return {...articleCard, votes: articleCard.votes + 1}
        })
        upVoteArticle(article_id).then(() => {
            return {...articleCard, votes: articleCard.votes - 1}
        })
        .catch((err) => {
            if(err) {
                return <p>Error!</p>
            }
        })
    }

    function handleDownVote() {
        setArticleCard((articleCard) => {
            return {...articleCard, votes: articleCard.votes - 1}
        })
        downVoteArticle(article_id).then(() => {
            return {...articleCard, votes: articleCard.votes + 1}
        })
        .catch((err) => {
            if(err) {
                return <p>Error!</p>
            }
        })
    }



    //LOADING STATE
    if (isLoading) {
        return (
            <span class="loader"></span>
        )
    }

    //RENDERING
    return (
      <>
        <main className="article-card">
            <h2 className="article-title">{articleCard.title}</h2>
            <p className="article-topic">Topic: {articleCard.topic}</p>
            <p className="article-author">Author: {articleCard.author}</p>
            <p className="article-body">{articleCard.body}</p>
            <img 
                src={articleCard.article_img_url} 
                alt={articleCard.title}
                className="article-img">
            </img>
            <br/>
            <button onClick={() => {handleUpvote(article_id)}} className="article-UPvote-button">👍</button>
            <button onClick={() => {handleDownVote(article_id)}} className="article-DOWNvote-button">👎</button>
            <br/>
            <small>{articleCard.votes}</small>
            <CommentSection article_id = {article_id} />
        </main>
      </>
    )
}

export default ArticleCard;