import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import Navigation from "../../Pages/Common/Navigation";
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
    <>
      <Navigation />
      <Container>
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
            <Box
              fontWeight="fontWeightBold"
              fontSize={20}
              my={2}
              fontFamily="manrope"
            >
              Comments
            </Box>
            <PostComment width="100%" />
            <CommentTemp web={12} comments={comments} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default VideoDetails;
