import { useEffect, useState } from "react";

const CommentCard = ({ comments }) => {





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
    if (comments.length === 0) {
        return <p>Sorry no comments</p>
    }

    return (
        <div>

            <ul>{commentList}</ul>

        </div>
    );
}







export default CommentCard;