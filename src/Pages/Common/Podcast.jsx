import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
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
  const [allPost, setAllPost] = useState([]);
  const [isAudioPlay, setIsAudioPlay] = useState(false);
  const getPost = () => {
    axios
      .get(
        BaseUrl + `/auth/home/posts?categoryList=podcast&page=1&allPost=true`
      )
      .then((response) => {
        console.log("response:", response);
        setAllPost(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    document.title = "Blog | Podcast";
    getPost();
  }, []);
  return (
    <Container maxWidth="lg">
      <Navigation />
      {/* <Header /> */}
      <TopicSlider />
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
          <Feed data={allPost} type="podcast" />
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
