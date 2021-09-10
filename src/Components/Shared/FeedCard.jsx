import React from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  IconButton,
} from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { feedCardStyles } from "../../Styles/muiStyles";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import { NavLink, useRouteMatch } from "react-router-dom";
import authorImg from "../../Assets/img/authorbtnImg.png";
import AuthorButton from "../../muiComponents/AuthorButton";
import PostCountInfo from "./PostCountInfo";
import PostFooterInfo from "./PostFooterInfo";

const FeedCard = ({ feed, type }) => {
  const classes = feedCardStyles();
  const { author, title, desc, img, likes, views, date, readTime, topic } =
    feed;
  let { url } = useRouteMatch();
  if (url === "/") {
    url = "/feed";
  }

  return (
    <Card className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={img ? 8 : 12}>
          <CardActions className={classes.authorBtn}>
            <AuthorButton authorName={author} authorImg={authorImg} />
          </CardActions>
          <NavLink to={`${url}/${title}`}>
            <CardActionArea className={classes.mainArea}>
              {/* title */}
              <Typography className={classes.title}>{title}</Typography>
              {/* description */}
              <Typography className={classes.desc}>{desc}</Typography>
            </CardActionArea>
          </NavLink>
          <PostFooterInfo date={date} readTime={readTime} topic={topic} />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="start"
            my={0}
            py={0}
          >
            <PostCountInfo likes={likes} views={views} />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="start"
            >
              {type === "podcast" && (
                <IconButton style={{ padding: "2px" }}>
                  <QueueMusicIcon style={{ fontSize: "16px" }} />
                </IconButton>
              )}
              <IconButton style={{ padding: "2px" }}>
                <BookmarkIcon style={{ fontSize: "16px" }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        {/* image */}
        {img && (
          <Grid item xs={12} sm={4}>
            <CardMedia
              className={classes.media}
              image={img}
              title="Feed Cover Photo"
            />
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

export default FeedCard;
