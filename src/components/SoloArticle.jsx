import { useEffect, useState } from "react";
import { getArticleById } from "../utils/getArticleById";
import { patchVotes } from "../utils/patchVotes";


const SoloArticle = ({ article_id }) => {

    const [singleArticle, setSingleArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [voteCount, setVoteCount] = useState()
    const [err, setErr] = useState(null)

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
                <section >




                    <div id="image-single-container">
                        <img className="article-image" src={singleArticle.article_img_url} alt={`${singleArticle.title} by ${singleArticle.author}`} />
                    </div>





                    <div>
                    <h2>{singleArticle.title}</h2>
                    <p>Written by: {singleArticle.author}</p>
                    </div>



                    <article className="single-article">
                        
                        <p>{singleArticle.body}</p>
                        <p></p>
                        <button onClick={handleClick}>like</button>
                        {
                            err
                                ? <section className="error">
                                    <p>{err}</p>
                                </section>
                                : <div>
                                    Votes:{voteCount}
                                </div>
                        }

                    </article>
                </section>
            )}
        </>


    )



}

export default SoloArticle;