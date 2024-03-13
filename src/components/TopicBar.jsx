import { useEffect, useState } from "react";
import TopicList from "./TopicList";
import { getAllTopics } from "../utils/getAllTopics";

const TopicBar = () => {

    const [topics, setTopics] = useState([])

    useEffect(() => {
        getAllTopics().then(({ topics }) => {
            setTopics(topics)
        }).catch((err)=> {
        })
    }, [])


    return (
        <div className="nav">
            < TopicList topics={topics} />
        </div>

    );
}

export default TopicBar;