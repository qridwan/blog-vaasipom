import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../Pages/Common/Navigation";
import SubNavigation from "../LandingPage/SubNavigation";
import Suggestions from "../Shared/Suggestions";
import VideoDetailsCard from "./VideoDetailsCard";
import CommentatorImg from "../../Assets/img/commentor.png";
import CommentTemp from "../Shared/CommentTemp";
import PostComment from "../Shared/PostComment";

const comments = [
  {
    id: 1,
    dp: CommentatorImg,
    name: "Jhon Doe",
    comment: "The best video I've ever seen",
  },
  {
    id: 2,
    dp: CommentatorImg,
    name: "RD Mallan",
    comment: "The best video I've ever seen",
  },
  {
    id: 3,
    dp: CommentatorImg,
    name: "Samuel Ken",
    comment: "The best video I've ever seen",
  },
];
const VideoDetails = ({ feed }) => {
  // const { title } = useParams();

  return (
    <Container>
      <Navigation />
      {/* <SubNavigation /> */}
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
          <Box fontWeight="fontWeightBold" fontSize={20} mt={2}>
            Comments
          </Box>
          <PostComment width="100%" />
          <CommentTemp web={12} comments={comments} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default VideoDetails;
