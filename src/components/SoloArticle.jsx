import { useEffect, useState } from "react";
import { getArticleById } from "../utils/getArticleById";
import { patchVotes } from "../utils/patchVotes";
import { Button } from "@mui/material";
import Line from "./Line";


const SoloArticle = ({ article_id }) => {

    const [singleArticle, setSingleArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [voteCount, setVoteCount] = useState()
    const [err, setErr] = useState(null)
    const [active, setActive] = useState(false)

    useEffect(() => {
        getArticleById(article_id).then(({ article }) => {
            setSingleArticle(article)
            setVoteCount(article.votes)
            setIsLoading(false)
        }).catch((err) => {

        })

    }, [])


    const handleClick = (event) => {
        event.preventDefault()
        setVoteCount(voteCount + 1)
        setErr(null)
        patchVotes(article_id)
            .catch((err) => {
                setVoteCount(voteCount - 1)
                setErr("Something went wrong, please try again")
            })
    }


    return (

        <>
            {isLoading ? (
                <h2>...Loading</h2>
            ) : (

                <>
                    <div id="image-single-container">
                        <img className="article-image" src={singleArticle.article_img_url} alt={`${singleArticle.title} by ${singleArticle.author}`} />
                    </div>
                    <div className="title-article">
                        <section>
                            <h2>{singleArticle.title}</h2>
                            <p>Written by: {singleArticle.author}</p>
                        </section>

                        <section className="votes">
                            <button onClick={handleClick}>like</button>
                            {err ? <p>{err}</p> : <div>Votes: {voteCount}</div>}
                        </section>
                    </div>

                    <article className="article-main">
                        <p>{singleArticle.body}</p>
                    </article>


                </>
            )}
        </>


    )



}

export default SoloArticle;