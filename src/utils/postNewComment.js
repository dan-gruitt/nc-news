import axios from "axios";

export const postNewComment = (article_id, newComment) => {
  const newCommentBody = { username: "tickle122", body: newComment };
  return axios.post(
      `https://nc-news-backend-project-dan-gruitt.onrender.com/api/articles/${article_id}/comments`,
      newCommentBody
    )
    .then((data) => {
      return data;
    })
};
