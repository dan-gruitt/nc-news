import { Link } from "react-router-dom";

const TopicList = ({ topics }) => {

    const topicLinks = topics.map((topic) => {
        return <Link to={`/topics/${topic.slug}`}key={topic.slug}><button >{topic.slug}</button></Link>
    })

    return (
        <ul className="topic-bar">
            {topicLinks}
        </ul>
    );
}

export default TopicList;


