import axios from "axios";
import { BaseUrl } from "../BaseUrl.config";

export const handleLike = (catg, id) => {
  console.log("🚀 ~ handleLike ~ catg, id", catg, id);
  const headers = {
    Authorization: localStorage.getItem("token"),
    // "Access-Control-Allow-Origin": "*",
  };
  console.log("clicked", BaseUrl + `/${catg}/like?postId=${id}`);
  axios
    .post(BaseUrl + `/${catg}/like?postId=${id}`, { headers })
    .then((response) => {
      console.log(response, "--liked--");
    })
    .catch((err) => {
      console.log(err);
    });
};
