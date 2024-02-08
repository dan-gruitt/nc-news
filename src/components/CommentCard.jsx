import { useEffect, useState } from "react";

const CommentCard = ({ comments }) => {

    // const [emptyComments, setEmptyComments] = useState(null)

    // useEffect(() => {
    //     if (comments.length < 1) { setEmptyComments(true) }
    // }, [])



    const commentList = comments.map((com) => {

        const [voteCount, setVoteCount] = useState(0)

        const handleClick = () => {
            setVoteCount(voteCount + 1)
        }


        return <li className="comment-card" key={com.comment_id} >
            <p>{com.body}</p>
            <p>{com.author}</p>
            <p><strong>{voteCount}</strong></p>
            <button onClick={handleClick}>Like</button>
        </li>
    })


    return (
        <div>

            <ul>{commentList}</ul>

        </div>
    );
}







export default CommentCard;