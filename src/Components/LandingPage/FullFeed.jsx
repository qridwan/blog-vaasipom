import {
  Box,
  Card,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PostCountInfo from "../Shared/PostCountInfo";
import PostFooterInfo from "../Shared/PostFooterInfo";
import parse from "html-react-parser";
import { useParams } from "react-router";
import { BaseUrl } from "../../BaseUrl.config";
import axios from "axios";
import { fullFeedStyles } from "../../Styles/muiStyles";
import { setShowTopics } from "../../redux/actions/dashboardAction";
import { connect } from "react-redux";
// import VideoDetailsCard from "../Videocast/VideoDetailsCard";
import ReactPlayer from "react-player";
import playIco from "../../Assets/icons/play.png";
import DateFormater from "../../Function/DateFormater";

const playIcon = <img src={playIco} alt="play icon" height="60" width="60" />;
// const comments = [1, 2, 3, 4, 5, 6, 7];
const FullFeed = ({ setShowTopics }) => {
  const classes = fullFeedStyles();
  const { category, postId } = useParams();
  const [post, setPost] = useState({});
  const [isRead, setIsRead] = useState(false);
  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  const getPost = () => {
    axios
      .get(BaseUrl + `/auth/${category}?${category}Id=${postId}`, { headers })
      .then((response) => {
        setPost(response.data);
        handleReadPost();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleReadPost = () => {
    axios
      .post(BaseUrl + `/${category}/read?postId=${postId}`, {}, { headers })
      .then((response) => {
        setIsRead(true);
        console.log("Post Read");
      })
      .then((error) => console.log(error));
  };
  useEffect(() => {
    setShowTopics(false);
    getPost();
    return () => setShowTopics(true);
  }, []);

  const { title, mainImage, reads, likes, liked, content } = post;
  console.log("🚀 ~ FullFeed ~ mainImage", mainImage);
 
  console.log({ post });
  const {date} = DateFormater(post?.createdDate)
  return (
    <>
      {post && (
        <Container maxWidth="md">
          <Card className={classes.root}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography className={classes.title}>{title}</Typography>
              {/* SHARE ICON */}
              {/* <div>
                <IconButton>
                  <img src={shareIcon} alt="Share" height={30} />
                </IconButton>
              </div> */}
            </Box>
            {category === "videocast" ? (
              <Box className={classes.playerWrapper}>
                <ReactPlayer
                  className={classes.player}
                  style={{ borderRadius: "30px" }}
                  controls={true}
                  url={post?.url}
                  light={true}
                  playIcon={playIcon}
                  width="100%"
                  height="105%"
                />
              </Box>
            ) : (
              <Box>
                {/* image */}
                {mainImage && (
                  <CardMedia
                    className={classes.media}
                    image={mainImage}
                    title="Feed Cover Photo"
                  />
                )}
              </Box>
            )}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={3}
            >
              <PostCountInfo
                views={isRead ? reads + 1 : reads}
                likes={likes}
                category={category}
                id={postId}
                liked={liked}
              />

              <PostFooterInfo
                date={date}
                readTime={4}
                topic={category}
              />
            </Box>
            <div>{post.content ? parse(content) : parse(``)}</div>
          </Card>

          {/* <Box textAlign="center">
            <Typography className={classes.text}>Comments</Typography>
            <PostComment width="50%" />
          </Box>
          <Grid container spacing={2} justifyContent="center">
            <CommentTemp web={8} comments={comments} />
          </Grid> */}
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setShowTopics: setShowTopics,
};
export default connect(mapStateToProps, mapDispatchToProps)(FullFeed);
