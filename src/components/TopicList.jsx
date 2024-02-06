const TopicList = ({ topics }) => {

    const topicLinks = topics.map((topic) => {
        return <button key={topic.slug}>{topic.slug}</button>
    })

    return (
        <ul className="topic-bar">
            {topicLinks}
        </ul>
    );
}

export default TopicList;