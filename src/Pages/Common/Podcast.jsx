import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Suggestions from "../../Components/Shared/Suggestions";
import AudioPlayer from "../../Components/Podcast/AudioPlayer";
import PodcastFeed from "../../Components/Podcast/PodcastFeed";

const Podcast = () => {
  const [isAudioPlay, setIsAudioPlay] = useState(false);
  console.log(
    "🚀 ~ file: Podcast.jsx ~ line 10 ~ Podcast ~ isAudioPlay",
    isAudioPlay
  );
  return (
    <Container>
      <Grid
        container
        spacing={3}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item sm={12} md={6}>
          <PodcastFeed setIsAudioPlay={setIsAudioPlay} />
        </Grid>
        <Grid item sm={12} md={6}>
          <Suggestions />
        </Grid>
      </Grid>
      {isAudioPlay && <AudioPlayer />}
    </Container>
  );
};

export default Podcast;
