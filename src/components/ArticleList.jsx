import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../utils/getArticles";


const ArticleList = () => {

    const [ArticleList, setArticleList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticles().then(({ articles }) => {
            const topArticles = articles.splice(0, 6)
            setArticleList(topArticles)
            setIsLoading(false)
        }).catch((err)=> {
            console.log(err, "DEAL WITH ERROR HERE");
            return err;
        })
    }, [])


    return (
        <div>
            {isLoading ? (
                <h2>...Loading</h2>
            ) : (
                < ArticleCard articleList={ArticleList} />
            )}

        </div>
    );
}

export default ArticleList;