import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleCard } from "../../utils";
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

    //LOADING STATE
    if (isLoading) {
        return (
            <p className="loading-state">Loading...</p>
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
            <p className="article-votes">Votes: {articleCard.votes}</p>
            <CommentSection article_id = {article_id} />
        </main>
      </>
    )
}

export default ArticleCard;