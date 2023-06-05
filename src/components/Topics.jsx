import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchTopics } from "../../utils"
import ArticlesByTopic from "./ArticlesByTopic"

function Topics () {
    const [topics, setTopics] = useState([])
    const [selectedTopic, setSelectedTopic] = useState('')

      useEffect(() => {
        fetchTopics().then(({topics}) => {
            setTopics(topics)
        })
    }, [])
console.log(selectedTopic);
   return (
  <>
  <div className="topics-container">
    <ul className="topics">
      {topics.map((topic) => (
        <li key={topic.slug}>
          <Link onClick={() => {setSelectedTopic(topic.slug)}} to={`/topics/${topic.slug}`}>
            
            <h2 className="topic-slug">{topic.slug}</h2>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  </>
);

}

export default Topics;









