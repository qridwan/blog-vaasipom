import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../Pages/Common/Navigation";
import SubNavigation from "../LandingPage/SubNavigation";
import Suggestions from "../Shared/Suggestions";
import VideoDetailsCard from "./VideoDetailsCard";

const VideoDetails = ({ feed }) => {
  // const { title } = useParams();

  return (
    <Container>
       <Navigation />
      <SubNavigation />
      <Grid
        container
        spacing={3}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item sm={12} md={8}>
          <VideoDetailsCard feed={feed} />
        </Grid>
        <Grid item sm={12} md={4}>
          <Suggestions />
        </Grid>
      </Grid>
    </Container>
  );
};

export default VideoDetails;
