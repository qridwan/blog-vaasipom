import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Suggestions from "../../Components/Shared/Suggestions";
import AudioPlayer from "../../Components/Podcast/AudioPlayer";
import PodcastFeed from "../../Components/Podcast/PodcastFeed";
import SubNavigation from "../../Components/LandingPage/SubNavigation";
import Header from "../../Components/LandingPage/Header";

const Podcast = () => {
  const [isAudioPlay, setIsAudioPlay] = useState(false);
  
  return (
    <Container>
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
        <Grid item sm={12} md={4}>
          <Suggestions />
        </Grid>
      </Grid>
      {isAudioPlay && <AudioPlayer />}
    </Container>
  );
};

export default Podcast;
