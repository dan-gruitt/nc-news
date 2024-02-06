import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/getArticles";
import ArticleCard from "../components/ArticleCard";

const SingleTopicPage = () => {

    const { topics } = useParams()
    const [articlesByTopic, setArticlesByTopic] = useState([])

    useEffect(() => {
        getArticles().then(({ articles }) => {
            const filteredTopics = articles.filter((article) => {
                if (article.topic === topics) {
                    return article
                }
            })
            setArticlesByTopic(filteredTopics)
        })
    }, [articlesByTopic])

    return (
        <h2>
            < ArticleCard articleList={articlesByTopic} />
        </h2>
    );
}

export default SingleTopicPage;