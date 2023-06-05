import { useState, useEffect } from "react"
import { fetchArticles } from "../../utils"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


function ArticlesByTopic() {

    const [articles, setArticles] = useState([])
    const { topic } = useParams()

    useEffect(() => {
        if(topic) {
            fetchArticles().then((fetchedArticles) => {
                console.log(fetchedArticles);
                const filteredArticles = fetchedArticles.articles.filter((article) => article.topic === topic)
               console.log(filteredArticles);
                return filteredArticles
            })
            .then((filteredArticles) => {setArticles(filteredArticles)})
        }
    }, [topic])

    return (
        <>
            <main>
                <ul className="topic-articles">{articles.map((article) => {
                    {               
                        return <li key={article.article_id}>
                            <Link to={`/articles/${article.article_id}`}>
                                <h3>{article.title}</h3>
                                <img 
                                src={article.article_img_url} 
                                />
                            </Link> 
                        </li>
                        
                    }
                })}</ul>
            </main>
        </>
    )
}

export default ArticlesByTopic;