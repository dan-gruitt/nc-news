import { useParams } from "react-router-dom";
import SoloArticle from "../components/SoloArticle";
import CommentList from "../components/CommentList";
import { useState } from "react";




const SingleArticlePage = () => {
    const { article_id } = useParams()

    const [addComment, setAddComment] = useState(null)
    const [newComment, setNewComment] = useState("")

    const handleClick = (event) => {
        event.preventDefault()
        if (!addComment) {
            setAddComment(true)
        } else { setAddComment(null) }

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setNewComment(event.target[0].value)
        // setNewComment('')
    }

    console.log(newComment, "<<???");



    return (
        <div>
            < SoloArticle article_id={article_id} />


            <span><button onClick={handleClick}>Add comment</button></span><br />
            {
                addComment
                    ?
                    <form onSubmit={handleSubmit}>
                        <textarea rows="4" cols="50" 
                        value={newComment}
                        onChange={(event)=> {setNewComment(event.target.value)}}>
                        </textarea>
                        <button>Submit</button>
                    </form>

                    : null
            }

            < CommentList article_id={article_id} />

        </div>
    )
}


export default SingleArticlePage;