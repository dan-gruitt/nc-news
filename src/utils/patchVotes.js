import axios from "axios";

export const patchVotes = (article_id) => {
  return axios
    .patch(
      `https://nc-news-backend-project-dan-gruitt.onrender.com/api/articles/${article_id}`,
      { inc_votes: +1 }
    )
    .catch((err) => {
      return err;
    });
};
