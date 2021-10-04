import React from "react";
import {
  Card,
  Container,
  makeStyles,
} from "@material-ui/core";
import ReactPlayer from "react-player/lazy";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import playIco from "../../Assets/icons/play.png";
import PostCountInfo from "../Shared/PostCountInfo";
import PostFooterInfo from "../Shared/PostFooterInfo";

const videoCardStyle = makeStyles({
  root: {
    margin: "10px 0",
    boxShadow: "none",
    textAlign: "start",
    paddingBottom: "50px",
  },
  media: {
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "150%",
    padding: "10px 0",
    color: "#121212",
    "@media (max-width:800px)": {
      fontSize: "20px",
      lineHeight: "110%",
    },
  },
  desc: {
    fontSize: "16px",
    lineHeight: "150%",
    paddingBottom: "15px",
    color: "#454545",
    "@media (max-width:800px)": {
      fontSize: "12px",
      lineHeight: "110%",
    },
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  playerWrapper: {
    position: "relative",
    margin: "2% 0 0 0",
    height: "350px",
  },
  player: {
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
});

const data = {
  author: "Krisnaswamy",
  title: "The Beauty Of the Universe",
  url: "https://youtu.be/Un5SEJ8MyPc",
  time: "17 days ago",
  tags: "Travel & Lifestyle",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec porttitor purus. Ut fermentum ut nulla ac viverra. Ut sit amet sem leo. Morbi ut eleifend leo. Phasellus imperdiet quam non metus commodo, quis porta diam tincidunt. Proin est quam, tincidunt in augue et, convallis....",
  likes: 324,
  views: 768,
};

const playIcon = <img src={playIco} alt="play icon" height="60" width="60" />;

const VideoDetailsCard = () => {
  const classes = videoCardStyle();
  const { author, time, desc, tags, likes, views, title, url } = data;
  return (
    <Container>
      <Card className={classes.root}>
        <Box display="block" className={classes.playerWrapper}>
          <ReactPlayer
            className={classes.player}
            style={{ borderRadius: "30px" }}
            controls={true}
            url={url}
            light={true}
            playIcon={playIcon}
            width="100%"
            height="100%"
          />
        </Box>

        <div>
          <Typography className={classes.title}>{title}</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <PostFooterInfo date={author} readTime={`17 days ago`} tags={tags} />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <PostCountInfo likes={likes} views={views} />
            </Box>
          </Box>
          <Typography className={classes.desc}>{desc}</Typography>
        </div>
      </Card>
      
    </Container>
  );
};

export default VideoDetailsCard;
