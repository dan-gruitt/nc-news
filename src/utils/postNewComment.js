import axios from "axios";

export const postNewComment = (article_id, newComment) => {
    console.log(article_id, "<<< article id");
    console.log(newComment, "<<< comment");
  return axios
    .post(`https://nc-news-backend-project-dan-gruitt.onrender.com/api/articles/${article_id}/comments`,{ username: "butter_bridge", body: "test with lee" })
    .then((data) => {
        console.log(data, "<<<< from post");
      return articles;
    })
    .catch((err) => {
      console.log(err, "DEAL WITH ERROR HERE UTILS");
      return err;
    });
};
