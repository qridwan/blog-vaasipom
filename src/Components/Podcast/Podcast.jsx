import { Container, Grid } from "@material-ui/core";
import React from "react";
import Suggestions from "../Shared/Suggestions";
import AudioPlayer from "./AudioPlayer";
import PodcastFeed from "./PodcastFeed";

const Podcast = () => {
  return (
    <Container>
      <Grid
        container
        spacing={3}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item sm={12} md={6}>
          <PodcastFeed />
          
        </Grid>
        <Grid item sm={12} md={6}>
            <Suggestions />
            
      <AudioPlayer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Podcast;
