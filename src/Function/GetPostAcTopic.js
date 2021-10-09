import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../BaseUrl.config";

const GetPostAcTopic = (topic, pageNumber, loadPost) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  const category = `story,article,poetry,review,podcast,videocast`;
  useEffect(() => {
    setPosts([]);
  }, [topic, loadPost]);

  const checkHasMore = () => {
    const subUrl = localStorage.token
      ? `/posts/interests`
      : `/auth/posts/interests`;

    topic &&
      axios({
        method: "GET",
        url: BaseUrl + subUrl,
        headers: headers,
        params: {
          categoryList: category,
          page: pageNumber + 1,
          allPost: false,
          topic: topic,
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
    const subUrl = localStorage.token
      ? `/posts/interests?`
      : `/auth/posts/interests?`;
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: BaseUrl + subUrl,
      headers: headers,
      params: {
        categoryList: category,
        page: pageNumber,
        allPost: false,
        topic: topic,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log("🚀 ~ .then ~ res", res);
        console.log(BaseUrl + subUrl);
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
  }, [topic, pageNumber, loadPost]);

  return { loading, error, posts, hasMore };
};
export default GetPostAcTopic;
