import axios from "axios";

export const getCommentsByArticleID = (article_id) => {
  return axios
    .get(`https://nc-news-backend-project-dan-gruitt.onrender.com/api/articles/${article_id}/comments`)
    .then(({data: comments}) => {
        return comments
    })
    .catch((err) => {
      console.log(err, "DEAL WITH ERROR HERE UTILS");
      return err;
    });
};
