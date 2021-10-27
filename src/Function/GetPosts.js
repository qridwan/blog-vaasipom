import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../BaseUrl.config";

const GetPosts = (category, pageNumber, user) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const headers = {
    Authorization: sessionStorage.getItem("token"),
  };

  useEffect(() => {
    setPosts([]);
  }, [category]);

  const checkHasMore = () => {
    const subUrl = sessionStorage.token ? `/home/posts` : `/auth/home/posts`;
    axios({
      method: "GET",
      url: BaseUrl + subUrl,
      headers: headers,
      params: { categoryList: category, page: pageNumber + 1, allPost: true },
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
    const subUrl = sessionStorage.token ? `/home/posts` : `/auth/home/posts`;
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: BaseUrl + subUrl,
      headers: headers,
      params: { categoryList: category, page: pageNumber, allPost: true },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setPosts((prevposts) => {
          return [...new Set([...prevposts, ...res.data])];
        });
        checkHasMore();
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [category, pageNumber]);

  return { loading, error, posts, hasMore };
};
export default GetPosts;
