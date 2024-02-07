import axios from "axios";

export const getAllTopics = () => {
  return axios
    .get("https://nc-news-backend-project-dan-gruitt.onrender.com/api/topics")
    .then(({data: topics}) => {
      return topics;
    }).catch((err)=> {
      console.log(err, "DEAL WITH ERROR HERE UTILS");
      return err;
  })
};
