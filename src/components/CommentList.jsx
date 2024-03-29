import { useEffect, useState } from "react";
import CommentCard from "./CommentCard"
import { getCommentsByArticleID } from "../utils/getCommentsByArticleID";

const CommentList = ({ article_id }) => {

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getCommentsByArticleID(article_id).then(({ comments }) => {
            setComments(comments)
            setIsLoading(false)
        }).catch((err)=> {
        })
    }, [article_id])


    return (
        <section className="comments">
            < CommentCard comments={comments} />
        </section>


    );
}

export default CommentList;