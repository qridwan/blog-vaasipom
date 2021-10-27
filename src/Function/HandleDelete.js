import axios from "axios";
import { BaseUrl } from "../BaseUrl.config";
const headers = {
  Authorization: sessionStorage.getItem("token"),
};
const HandleDelete = (id, category, enqueueSnackbar) => {
  axios
    .delete(BaseUrl + `/${category}?${category}Id=${id}`, { headers })
    .then(() => {
      enqueueSnackbar(`${category} deleted`, { variant: "success" });
    })
    .catch((err) => {
      console.log("delete failed", { err });
      enqueueSnackbar(`${category} deleting failed!`, { variant: "error" });
    });

};

export default HandleDelete;
