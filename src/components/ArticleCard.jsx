import { Link } from "react-router-dom"


const ArticleCard = ({ articleList }) => {



    const listItems = articleList.map((article) => {
        console.log(article.article_id, "<<<<<<< this");
        return <Link key={article.article_id} to={`/${article.article_id}`}>  <li className="card">
            <img className="" src={article.article_img_url} alt={`${article.author} image for Gruitt news`}/><br />
            <div className="container">
            <h4>Title: {article.title}</h4>
            <h5>Author: {article.author}</h5>
            </div>

        </li>
        </Link>
    })

    return (
        <ul className="article-list">{listItems}</ul>
    );
}

export default ArticleCard;