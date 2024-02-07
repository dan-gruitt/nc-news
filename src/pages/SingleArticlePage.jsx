import { useParams } from "react-router-dom";
import SoloArticle from "../components/SoloArticle";
import CommentList from "../components/CommentList";

const SingleArticlePage = () => {
    const { article_id } = useParams()



    return (
        <div>
            < SoloArticle article_id={article_id} />
            < CommentList article_id={article_id} />
        </div>
    )
}


export default SingleArticlePage;