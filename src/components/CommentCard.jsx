import { useState } from "react";

const CommentCard = ({ comments }) => {





    const commentList = comments.map((com) => {

        const [voteCount, setVoteCount] = useState(com.votes)

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

        <ul>{commentList}</ul>

    );
}

export default CommentCard;