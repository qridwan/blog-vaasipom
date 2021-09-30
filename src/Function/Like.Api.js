import axios from "axios";
import { BaseUrl } from "../BaseUrl.config";

export const handleLike = (catg, id, headers) => {
  console.log("🚀 ~ handleLike ~ catg, id", catg, id);

  console.log("clicked", BaseUrl + `/${catg}/like?postId=${id}`, { headers });
  axios
    .post(BaseUrl + `/${catg}/like?postId=${id}`, { headers })
    .then((response) => {
      console.log(response, "--liked--");
      alert(`${catg}--liked--`);
    })
    .catch((err) => {
      console.log({ err });
      alert(`${catg}--failed--url--${BaseUrl + `/${catg}/like?postId=${id}`}`);
    });
};
