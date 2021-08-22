import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import Suggestions from "../Shared/Suggestions";
import VideoDetailsCard from "./VideoDetailsCard";


const VideoDetails = ({feed}) => {
  const {title} = useParams();
 
  return <Container>
  <Grid
    container
    spacing={3}
    justifyContent="flex-start"
    alignItems="flex-start"
  >
    <Grid item sm={12} md={6}>
        <VideoDetailsCard  feed={feed} />
    </Grid>
    <Grid item sm={12} md={6}>
      <Suggestions />
    </Grid>
  </Grid>
</Container>
};

export default VideoDetails;
