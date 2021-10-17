import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../BaseUrl.config";

const SearchPost = (category, user) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  // const [hasMore, setHasMore] = useState(false);
  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  useEffect(() => {
    setLoading(true);
    const subUrl = localStorage.token ? `/home/posts` : `/auth/home/posts`;
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: BaseUrl + subUrl,
      headers: headers,
      params: { categoryList: category, page: 1, allPost: true },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log(BaseUrl + subUrl);
        setPosts((prevposts) => {
          return [...new Set([...prevposts, ...res.data])];
        });
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, []);

  return { loading, error, posts };
};

export default SearchPost;
