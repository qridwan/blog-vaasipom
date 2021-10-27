import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import Navigation from "../../Pages/Common/Navigation";
import VideoDetailsCard from "./VideoDetailsCard";
import CommentatorImg from "../../Assets/img/commentor.png";
import CommentTemp from "../Shared/CommentTemp";
import PostComment from "../Shared/PostComment";
import { setShowTopics } from "../../redux/actions/dashboardAction";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

// const comments = [
//   {
//     id: 1,
//     dp: CommentatorImg,
//     name: "Jhon Doe",
//     comment: "The best video I've ever seen",
//   },
//   {
//     id: 2,
//     dp: CommentatorImg,
//     name: "RD Mallan",
//     comment: "The best video I've ever seen",
//   },
//   {
//     id: 3,
//     dp: CommentatorImg,
//     name: "Samuel Ken",
//     comment: "The best video I've ever seen",
//   },
// ];
const VideoDetails = ({ setShowTopics }) => {
  const props = useParams();
  console.log("🚀 ~ VideoDetails ~ props", props)

  // useEffect(() => {
  //   setShowTopics(false);

  //   return () => setShowTopics(true);
  // }, []);
  return (
    <>
      <Container>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item sm={12} md={8}>
            <VideoDetailsCard
            />
          </Grid>
          {/* <Grid item sm={12} md={4}>
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
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setShowTopics: setShowTopics,
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoDetails);
