import React from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Container,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import ReactPlayer from "react-player/lazy";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import playIco from "../../Assets/icons/play.png";
import VideoComments from "./VideoComments";
import CommentatorImg from "../../Assets/img/commentor.png";

const videoCardStyle = makeStyles({
  root: {
    margin: "10px 0",
    boxShadow: "none",
    textAlign: "start",
    paddingBottom: "50px",
    // borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    // borderRight: "1px solid rgba(0, 0, 0, 0.1)",
  },
  media: {
    width: "100%",
    borderRadius: "20px",
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
    margin: "10% 0 0 0",
    height: "300px",
  },
  player: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: "10px",
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
            style={{ borderRadius: "40px" }}
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
            <Box>
              <Typography>{`${author}  ◾ ${time}  ◾  ${tags}`}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <Box display="flex" alignItems="center">
                  <VisibilityOutlinedIcon />
                  <Typography style={{ marginLeft: "10px" }}>
                    {views}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <IconButton>
                    <FavoriteBorderOutlinedIcon />
                  </IconButton>
                  <Typography>{likes}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Typography className={classes.desc}>{desc}</Typography>
        </div>
      </Card>
      <VideoComments comments={comments} />
    </Container>
  );
};

export default VideoDetailsCard;
