import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Suggestions from "../../Components/Shared/Suggestions";
import AudioPlayer from "../../Components/Podcast/AudioPlayer";
import PodcastFeed from "../../Components/Podcast/PodcastFeed";
import SubNavigation from "../../Components/LandingPage/SubNavigation";
import Header from "../../Components/LandingPage/Header";
import Navigation from "./Navigation";

const podcastStyles = makeStyles({
  right: {
    boxSizing: "border-box",
    position: "sticky",
    top: "0",
  },
});

const Podcast = () => {
  const classes = podcastStyles();
  const [isAudioPlay, setIsAudioPlay] = useState(false);

  return (
    <Container>
      <Navigation />
      <Header />
      <SubNavigation />
      <Grid
        container
        spacing={3}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item sm={12} md={8}>
          <PodcastFeed setIsAudioPlay={setIsAudioPlay} />
        </Grid>
        <Grid item sm={12} md={4} className={classes.right}>
          <Suggestions />
        </Grid>
      </Grid>
      {isAudioPlay && <AudioPlayer />}
    </Container>
  );
};

export default Podcast;
