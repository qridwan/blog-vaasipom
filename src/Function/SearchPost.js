import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../BaseUrl.config";

const SearchPost = (categoryList, title) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);

  const headers = {
    Authorization: sessionStorage.getItem("token"),
  };
  const getSearchResults = (catg) => {
    const subUrl = sessionStorage.token
      ? `/${catg}/search`
      : `/auth/${catg}/search`;
    axios({
      method: "GET",
      url: BaseUrl + subUrl,
      headers: headers,
      params: { title: title },
    })
      .then((res) => {
        let filteredResults = [];
        res.data &&
          res.data.forEach((data) => {
            const schema = {
              title: data?.title,
              subTitle: data?.subTitle,
              id: data[`${catg}Id`],
              category: catg,
            };
            filteredResults.push(schema);
          });

        res.data.length &&
          setPosts((prevPosts) => [...prevPosts, ...filteredResults]);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  };
  useEffect(() => {
    setLoading(true);
    categoryList.forEach((c) => {
      getSearchResults(c);
    });
    setError(false);
  }, [title]);

  return { loading, error, posts };
};

export default SearchPost;
