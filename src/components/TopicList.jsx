import { Link } from "react-router-dom";
import * as React from 'react';

const TopicList = ({ topics }) => {
    const topicLinks = topics.map((topic) => {
        return <Link to={`/topics/${topic.slug}`} key={topic.slug}><p>{topic.slug}</p></Link>
    });

    return (
        <ul className="topic-bar">
            {topicLinks}
        </ul>
    );
}

export default TopicList;
