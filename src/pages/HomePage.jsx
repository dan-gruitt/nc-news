import { Link } from "react-router-dom";
import ArticleList from "../components/ArticleList";


const HomePage = () => {
    return (
        <>
            <div>
                <h2>Top Articles</h2>
                < ArticleList />
            </div>
            <section>
                <Link to={"/articles"}><button>See All Articles</button></Link>
            </section>
        </>
    );
}

export default HomePage;