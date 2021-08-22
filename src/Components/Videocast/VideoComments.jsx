import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import React from "react";
import ReplyIcon from "@material-ui/icons/Reply";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const videoCommentStyle = makeStyles({
  box: {
    margin: " 0",
    padding: "",
  },
  root: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    listStyle: "none",
    padding: "20px 0",
    margin: "10px",
    boxShadow: "none",
  },
  card: {
    boxShadow: "none",
  },
  avatar: {
    // backgroundColor: red[500],
  },
  text: {
    textAlign: "start",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#000000",
  },
  title: {
    color: "#00000",
    fontSize: "18px",
    fontWeight: "bold",
  },
  comment: {
    fontSize: "14px",
    width: "90%",
    lineHeight: "150%",
    color: "#797979",
  },
});
const VideoComments = ({ comments }) => {
  const classes = videoCommentStyle();
  return (
    <Box className={classes.box}>
      <Typography className={classes.text}>Comments </Typography>
      {comments.map((obj) => {
        const { id, name, dp, comment } = obj;
        return (
          <Card key={id} className={classes.card}>
            <CardHeader
              avatar={
                <Avatar className={classes.avatar} src={dp} alt={name} />
              }
              action={
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <IconButton>
                    <ReplyIcon />
                  </IconButton>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                </Box>
              }
              title={<Typography className={classes.title}>{name}</Typography>}
              subheader={
                <Typography className={classes.comment}>{comment}</Typography>
              }
            />
          </Card>
        );
      })}
    </Box>
  );
};

export default VideoComments;
