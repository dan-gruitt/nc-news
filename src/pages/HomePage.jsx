import { Link } from "react-router-dom";
import ArticleList from "../components/ArticleList";
import { Button } from "@mui/material";


const HomePage = () => {
    return (
        <>
            <div className="header-titles">
                <h2>Top Articles</h2>
                </div>
                <section>
               
                < ArticleList />
                </section>
                
            
            <section>
                <Link to={"/articles"}><Button>See All Articles</Button></Link>
            </section>
        </>
    );
}

export default HomePage;