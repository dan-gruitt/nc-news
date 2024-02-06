const ArticleCard = ({ articleList }) => {


    const listItems = articleList.map((article) => {
        return <li key={article.article_id} className="card">
            <img src={article.article_img_url} alt={`${article.author} image for gruitt news`}/><br />
            <div className="container">
            <h4>Title: {article.title}</h4>
            <h5>Author: {article.author}</h5>
            </div>

        </li>
    })

    return (
        <ul className="article-list">{listItems}</ul>
    );
}

export default ArticleCard;