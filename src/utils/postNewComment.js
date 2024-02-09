import axios from "axios";

export const postNewComment = (article_id, newComment) => {
  console.log(article_id, "<<< article id");
  console.log(newComment, "<<< comment");
  const newCommentBody = { username: "butter_bridge", body: newComment };
  return axios.post(
      `https://nc-news-backend-project-dan-gruitt.onrender.com/api/articles/${article_id}/comments`,
      newCommentBody
    )
    .then((data) => {
      console.log(data, "<<<< from post");
      return data;
    })
};
