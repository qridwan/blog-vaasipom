import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import Suggestions from "../../Components/Shared/Suggestions";
import AudioPlayer from "../../Components/Podcast/AudioPlayer";
import PodcastFeed from "../../Components/Podcast/PodcastFeed";
import SubNavigation from "../../Components/LandingPage/SubNavigation";
import Navigation from "./Navigation";
import TopicSlider from "../../Components/Shared/TopicSlider";

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
  const [isAudioPlay, setIsAudioPlay] = useState(false);
  useEffect(() => {
    document.title = "Blog | Podcast";
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
        style={{marginTop: "-20px"}}
      >
        <Grid item sm={12} md={8} className={classes.left}>
          <PodcastFeed setIsAudioPlay={setIsAudioPlay} />
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
