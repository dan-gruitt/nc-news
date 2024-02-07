import { useEffect, useState } from "react";
import { getArticleById } from "../utils/getArticleById";

const SoloArticle = ({ article_id }) => {

    const [singleArticle, setSingleArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticleById(article_id).then(({ article }) => {
            setSingleArticle(article)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err, "DEAL WITH ERROR HERE");
        })

    }, [])


    const handleClick = () => {
        console.log("here");
    }


    return (

        <>

            {isLoading ? (
                <h2>...Loading</h2>
            ) : (
                <section className="single-article">
                    <div id="image-single-container">
                        <img className="article-image" src={singleArticle.article_img_url} alt={`${singleArticle.title} by ${singleArticle.author}`} />
                    </div>
                    <article className="single-article">
                        <h2>{singleArticle.title}</h2>
                        <p>{singleArticle.body}</p>
                        <h3>Written by: {singleArticle.author}</h3>
                        <p></p>
                        <button onClick={handleClick}>like</button>
                        <div>
                            Votes:{singleArticle.votes}
                        </div>
                    </article>
                </section>
            )}
        </>


    )


    
}

export default SoloArticle;