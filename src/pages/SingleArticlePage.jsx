import { useParams } from "react-router-dom";
import SoloArticle from "../components/SoloArticle";
import CommentList from "../components/CommentList";
import { useState } from "react";
import { postNewComment } from "../utils/postNewComment";
import { TextField } from "@mui/material";
import Line from "../components/Line";



const SingleArticlePage = () => {
    const { article_id } = useParams()


    const [newComment, setNewComment] = useState("")

    const handleClick = (event) => {
        event.preventDefault()
        if (!addComment) {
            setAddComment(true)
        } else { setAddComment(null) }

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postNewComment(article_id, newComment).catch((err) => {
            return err;
        });
    }


    return (
        <main className="solo-main">
        <><div>

            <SoloArticle article_id={article_id} />

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    <TextField 
                    value={newComment}
                    onChange={(event) => { setNewComment(event.target.value); } } 
                    id="outlined-basic" 
                    label="Have your say" 
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{marginTop: "30px"}}
                    />
                    
                    <button style={{marginTop: "10px"}}>Submit</button>
                </form>



        </div>
        <CommentList article_id={article_id} newComment={newComment} /></>

        </main>
    )
}


export default SingleArticlePage;