import axios from "axios";
import { BaseUrl } from "../BaseUrl.config";

export const handleDelete = (catg, id) => {
  console.log("🚀 ~ handleDelete ~ catg, id", catg, id);
  const headers = {
    Authorization: localStorage.getItem("token"),
    // "Access-Control-Allow-Origin": "*",
  };
  console.log("clicked, url for delete", BaseUrl + `/${catg}?${catg}Id=${id}`);
  axios
    .delete(BaseUrl + `/${catg}?${catg}Id=${id}`, { headers })
    .then((response) => {
      console.log(response, "--deleted--");
      alert(`${catg} deleted`);
    })
    .catch((err) => {
      console.log(err);
    });
};
