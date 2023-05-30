import React, {useEffect, useState} from "react";
import { fetchArticles } from "../../utils";
import { Link } from "react-router-dom";


//LISTING ALL THE ARTICLES FROM THE API

function ArticlesList () {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles().then(({articles}) => {
            setArticles(articles);
        })
    }, []);

    
//RENDERING
    return (
        <main className="articles-list">
            <h2>All available articles:</h2>
            <ul>
                {articles.map(({article_id, title, author, article_img_url}) => {
                    return <li key={article_id}><Link to={ `/articles/${ article_id }` }> {title} </Link>
                    <br/>
                    <img src={article_img_url} alt={title} className="article-img"></img>
                    <p>{author}</p>
                    </li>
                })}
            </ul>
        </main>
    )

}

export default ArticlesList;