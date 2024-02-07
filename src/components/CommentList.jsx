import { useEffect, useState } from "react";
import CommentCard from "./CommentCard"
import { getCommentsByArticleID } from "../utils/getCommentsByArticleID";

const CommentList = ({ article_id }) => {

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getCommentsByArticleID(article_id).then(({ comments }) => {
     console.log(comments);
            setComments(comments)
            setIsLoading(false)
        }).catch((err)=> {
            console.log(err, "error isnide use effect insode comment list");
        })
    }, [article_id])


    return (
        <section className="comment-box">
            < CommentCard comments={comments} />
        </section>


    );
}

export default CommentList;