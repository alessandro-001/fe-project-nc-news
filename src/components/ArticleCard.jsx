import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleCard } from "../../utils";

//SINGLE ARTICLE CARD

function ArticleCard() {
    const [articleCard, setArticleCard] = useState({})
    const {article_id} = useParams()
    console.log(useParams, 'paramsss');

    useEffect(() => {
        fetchArticleCard(article_id)
            .then(({articleCard}))
    })

//RENDERING
    return (
        <p>a single article card</p>
    )
}

export default ArticleCard;