import { useEffect, useState } from "react";
import Heart from "react-heart"
import Line from '../components/Line'
import moment from "moment";


const CommentCard = ({ comments }) => {





    const commentList = comments.map((com) => {
        const [voteCount, setVoteCount] = useState(0)
        const [active, setActive] = useState(false)

        //create new formatted
        const dateString = com.created_at;
        const formattedDate = moment(dateString).format('MMMM Do YYYY, h:mm:ss a');

        const handleClick = () => {
            setVoteCount(voteCount + 1)
        }

        return (
            <><li key={com.comment_id} className="vote-card">
                <div>
                    <p style={{ marginBottom: "10px" }} >{com.body}</p>
                    <p style={{ fontWeight: "lighter" }}>{com.author} | {formattedDate}</p>
                </div>
                <div className="likes-container">
                    <div style={{ fontWeight: "bold" }}>{voteCount}</div>
                    <Heart
                        isActive={active}
                        onClick={() => {
                            setActive(!active);
                            handleClick();
                        }}
                        animationScale={1.25}
                        style={{ marginBottom: '1rem', width: "30px" }} />
                </div>

            </li>
            <Line/>
            </>

        )
    })
    if (comments.length === 0) {
        return <p>Sorry no comments</p>
    }

    return (
        <div>

            {commentList}


        </div>
    );
}







export default CommentCard;