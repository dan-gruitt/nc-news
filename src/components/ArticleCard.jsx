import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, Typography, CardActions, Button, CardContent, ThemeProvider } from "@mui/material";
import themeButton from '../themes/themeButton'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const ArticleCard = ({ articleList }) => {
  const listItems = articleList.map((article) => (
    <li key={article.article_id}>
      <Card 
      className="card">
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
          <Button
          variant="contained"
            component={Link}
            to={`/${article.article_id}`}
            size="small"
            sx={{ bgcolor: 'grey.light' }}>
            <Typography sx={{ color: 'grey.contrastText' }}>Learn More</Typography>
          </Button>
        </CardActions>
      </Card>
    </li>
  ));

  return (
    <ThemeProvider theme={themeButton}>
      <ul className="card-list">{listItems}</ul>
    </ThemeProvider>
  )
};

export default ArticleCard;
