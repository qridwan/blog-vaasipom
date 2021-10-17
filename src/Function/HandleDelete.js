import axios from "axios";
import { BaseUrl } from "../BaseUrl.config";
const headers = {
  Authorization: localStorage.getItem("token"),
};
const HandleDelete = (id, category, enqueueSnackbar) => {
  axios
    .delete(BaseUrl + `/${category}?${category}Id=${id}`, { headers })
    .then(() => {
      // setSuccess(true);
      enqueueSnackbar(`${category} deleted`, { variant: "success" });
    })
    .catch((err) => {
      console.log("delete failed", { err });
      enqueueSnackbar(`${category} deleting failed!`, { variant: "error" });
    });

};

export default HandleDelete;
