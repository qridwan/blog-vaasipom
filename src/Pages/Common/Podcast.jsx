import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import Suggestions from "../../Components/Shared/Suggestions";
import AudioPlayer from "../../Components/Podcast/AudioPlayer";
import PodcastFeed from "../../Components/Podcast/PodcastFeed";
import SubNavigation from "../../Components/LandingPage/SubNavigation";
import Navigation from "./Navigation";
import TopicSlider from "../../Components/Shared/TopicSlider";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl.config";
import Feed from "../../Components/Shared/Feed";
import GetPosts from "../../Function/GetPosts";

const podcastStyles = makeStyles({
  right: {
    boxSizing: "border-box",
    position: "sticky",
    top: "0",
  },
  left: {
    borderRight: "2px solid #EDEDED",
  },
});

const Podcast = () => {
  const classes = podcastStyles();
  // const [allPost, setAllPost] = useState([]);
  const [page, setPage] = useState(1);
  const [isAudioPlay, setIsAudioPlay] = useState(false);
  const { posts, hasMore, loading, error } = GetPosts("podcast", page);
  const observer = useRef();
  const lastFeedRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    document.title = "Blog | Podcast";
  }, []);
  return (
    <Container maxWidth="lg">
      {/* <TopicSlider /> */}
      <SubNavigation />
      <Grid
        container
        spacing={3}
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{ marginTop: "-20px" }}
      >
        <Grid item sm={12} md={8} className={classes.left}>
          {/* <PodcastFeed data={allPost} setIsAudioPlay={setIsAudioPlay} /> */}
          <Feed data={posts} type="podcast" loading={loading} />
          {!loading && (
            <p style={{ margin: "0 auto" }} ref={lastFeedRef}>
              
            </p>
          )}
        </Grid>
        <Grid item sm={12} md={4} className={classes.right}>
          <Suggestions />
        </Grid>
      </Grid>
      {isAudioPlay && <AudioPlayer setIsAudioPlay={setIsAudioPlay} />}
    </Container>
  );
};

export default Podcast;
