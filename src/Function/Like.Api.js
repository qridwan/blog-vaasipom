import axios from "axios";
import { BaseUrl } from "../BaseUrl.config";

export const handleLike = (catg, id) => {
  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  console.log("clicked", BaseUrl + `/${catg}/like?postId=${id}`);
  axios
    .get(BaseUrl + `/${catg}/like?postId=${id}`, { headers })
    .then((response) => {
      console.log(response, "--liked--");
    })
    .catch((err) => {
      console.log(err);
    });
};
