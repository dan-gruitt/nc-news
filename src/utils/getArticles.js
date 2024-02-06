import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://nc-news-backend-project-dan-gruitt.onrender.com/api/articles")
    .then(({data: articles}) => {
      return articles;
    });
};
