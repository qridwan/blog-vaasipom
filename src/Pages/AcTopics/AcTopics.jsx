import { Container, Grid, Typography } from "@material-ui/core";
import { Paper } from "@mui/material";
// import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
// import { BaseUrl } from "../../BaseUrl.config";
import Feed from "../../Components/Shared/Feed";
import Suggestions from "../../Components/Shared/Suggestions";
import GetPostAcTopic from "../../Function/GetPostAcTopic";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { landingPageStyles } from "../../Styles/muiStyles";

const AcTopics = () => {
  const { topic } = useParams();
  const classes = landingPageStyles();
  const [loadPost, setLoadPost] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  //   const [postAcTopic, setPostAcTopic] = useState(false);
  useEffect(() => {
    setLoadPost(true);
    console.log("🚀 ~ useEffect ~ load");
  }, [loadPost, setLoadPost]);
  const { posts, hasMore, loading } = GetPostAcTopic(topic, pageNo, loadPost);
  //   console.log("🚀 ~ AcTopics ~ posts", posts);
  const observer = useRef();
  const lastFeedRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNo((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <Container>
      <Grid
        container
        spacing={3}
        justifyContent="flex-start"
        alignItems="flex-start"
        className={classes.content}
      >
        <Grid item xs={12} sm={8} className={classes.left}>
          <Paper className={classes.paper} sx={{ boxShadow: "none" }}>
            <Typography variant="h6" gutterBottom>
              {topic.toUpperCase()}{" "}
              <LocalOfferIcon sx={{ fontSize: 20, marginLeft: "10px" }} />
            </Typography>
            {!loading && posts.length === 0 ? (
              <Typography variant="h6" gutterBottom>
                Empty
              </Typography>
            ) : (
              <Feed data={posts} type="postAcTopic" loading={loading} />
            )}
            {!loading && <p style={{ margin: "0 auto" }} ref={lastFeedRef}></p>}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.right}>
          <Paper className={classes.paper} sx={{ boxShadow: "none" }}>
            <Suggestions />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AcTopics;
