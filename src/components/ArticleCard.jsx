import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleCard, voteArticle } from "../../utils";
import CommentSection from "./CommentSection";
import PostComment from "./PostComment";


/* SINGLE ARTICLE CARD */

function ArticleCard({user}) {
    const [articleCard, setArticleCard] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [commentSection, setCommentSection] = useState([])

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
        voteArticle(article_id, 1).then(() => {
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
        voteArticle(article_id, -1).then(() => {
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
            <span className="loader"></span>
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
            <br/><br/><br/>
            <PostComment user={user} setCommentSection={setCommentSection} />
            <br/>
            <CommentSection commentSection={commentSection} setCommentSection={setCommentSection} />
        </main>
      </>
    )
}

export default ArticleCard;

