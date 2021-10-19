import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../BaseUrl.config";

const GetMywritings = (category, pageNumber, isChanged) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const headers = {
    Authorization: sessionStorage.getItem("token"),
  };
  const URL = BaseUrl + `/author/writings`;

  useEffect(() => {
    setPosts([]);
  }, [category, pageNumber, isChanged]);

  const checkHasMore = () => {
    category &&
      axios({
        method: "GET",
        url: URL,
        headers: headers,
        params: {
          category: category,
          page: pageNumber + 1,
        },
      })
        .then((res) => {
          setHasMore(res.data.length > 0);
        })
        .catch((e) => {
          console.error(e);
        });
  };
  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: URL,
      headers: headers,
      params: {
        category: category,
        page: pageNumber,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        let allPost = [];
        res.data.forEach((obj) => allPost.push(obj[`${obj.category}`]));
        setPosts(allPost);
        checkHasMore();
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [category, pageNumber, isChanged]);

  return { loading, error, posts, hasMore };
};

export default GetMywritings;
