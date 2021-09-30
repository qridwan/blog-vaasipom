import {
  Box,
  Card,
  CardMedia,
  Container,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import FeedImg from "../../Assets/img/feedImg.png";
import Navigation from "../../Pages/Common/Navigation";
import shareIcon from "../../Assets/icons/shareIcon.svg";
import PostCountInfo from "../Shared/PostCountInfo";
import PostFooterInfo from "../Shared/PostFooterInfo";
// import { red } from "@material-ui/core/colors";
import parse from "html-react-parser";
import CommentTemp from "../Shared/CommentTemp";
import PostComment from "../Shared/PostComment";
import { useParams } from "react-router";
import { BaseUrl } from "../../BaseUrl.config";
import axios from "axios";
import { fullFeedStyles } from "../../Styles/muiStyles";
import dateFormat from "dateformat";

const comments = [1, 2, 3, 4, 5, 6, 7];
const FullFeed = () => {
  const classes = fullFeedStyles();
  const { category, postId } = useParams();
  const [post, setPost] = useState({});
  // const {  desc, img, views, date, readTime, topic } =
  //   feedData;
  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  const getPost = () => {
    axios
      .get(BaseUrl + `/auth/${category}?${category}Id=${postId}`)
      .then((response) => {
        // console.log("response: post", response.data);
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
      .then((response) => console.log("Post Read"))
      .then((error) => console.log(error));
  };
  useEffect(() => {
    getPost();
  }, []);

  const {
    title,
    mainImage,
    reads,
    likes,
    // liked,
    // createdDate,
    content,
    articleId,
  } = post;
  const createdDateFormate = dateFormat(post?.createdDate, "dS mmmm");
  console.log({ post });
  return (
    <>
      <Navigation />
      {/* <SubNavigation /> */}
      {post !== {} && (
        <Container maxWidth="md">
          <Card className={classes.root}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography className={classes.title}>{title}</Typography>
              <div>
                <IconButton>
                  {/* <ShareIcon /> */}
                  <img src={shareIcon} alt="Share" height={30} />
                </IconButton>
              </div>
            </Box>
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
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={3}
            >
              <PostCountInfo
                views={reads}
                likes={likes}
                category={category}
                id={articleId}
              />

              <PostFooterInfo
                date={createdDateFormate}
                readTime={4}
                topic={category}
              />
            </Box>

            <div>{post.content ? parse(content) : parse(``)}</div>
          </Card>

          <Box textAlign="center">
            <Typography className={classes.text}>Comments</Typography>
            <PostComment width="50%" />
          </Box>
          <Grid container spacing={2} justifyContent="center">
            <CommentTemp web={8} comments={comments} />
          </Grid>
        </Container>
      )}
    </>
  );
};

export default FullFeed;
