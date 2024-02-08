import axios from "axios";

export const getCommentsByArticleID = (article_id) => {
  return axios
    .get(
      `https://nc-news-backend-project-dan-gruitt.onrender.com/api/articles/${article_id}/comments`
    )
    .then(({ data: comments }) => {
      return comments;
    })
    .catch((err) => {
      if (err.response.status === 404) {
        return { comments: [] };

      } else {
        throw err;
      }
    });
};
