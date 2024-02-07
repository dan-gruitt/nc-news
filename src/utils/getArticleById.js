import axios from "axios";

export const getArticleById = (article_id) => {
  return axios
    .get(
      `https://nc-news-backend-project-dan-gruitt.onrender.com/api/articles/${article_id}`
    )
    .then(({ data: articles }) => {
      return articles;
    })
    .catch((err) => {
      console.log(err, "DEAL WITH ERROR HERE UTILS");
      return err;
    });
};
