import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../BaseUrl.config";

const headers = {
  Authorization: sessionStorage.getItem("token"),
};
const GetInterest = () => {
  const [allInterest, setALlInterest] = useState([]);
  axios
    .get(BaseUrl + `/interests`, { headers })
    .then((res) => {
      let allData = [];
      res.data.forEach((data) => allData.push(data.interestId));
      setALlInterest(allData);
    })
    .catch((err) => console.error(err));
  return { allInterest };
};

export default GetInterest;
