import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, Typography, CardActions, Button, CardContent } from "@mui/material";

const ArticleCard = ({ articleList }) => {
  const listItems = articleList.map((article) => (
    <li key={article.article_id}>
      <Card className="card">
        {/* Set a fixed height and width for the CardMedia */}
        <CardMedia
          component="img"
          alt={`${article.author} image for Gruitt news`}
          className="card-image" 
          image={article.article_img_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2">by {article.author}</Typography>
        </CardContent>
        <CardActions>
          {/* Use the Link component directly inside the Button */}
          <Button component={Link} to={`/${article.article_id}`} size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </li>
  ));

  return <ul className="card-list">{listItems}</ul>;
};

export default ArticleCard;
