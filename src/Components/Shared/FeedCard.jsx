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
      <CardActions className={classes.topbar}>
        <AuthorButton authorName={author} authorImg={authorImg} />
      </CardActions>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={img ? 8 : 12}>
          <NavLink to={`${url}/${title}`}>
            <CardActionArea>
              {/* title */}
              <Typography className={classes.title}>{title}</Typography>
              {/* description */}
              <Typography className={classes.desc}>{desc}</Typography>
            </CardActionArea>
          </NavLink>
          {/* <Box display="flex" justifyContent="start" alignItems="center" my={2}>
            <Typography>{date}</Typography>
            <span className={classes.span}> | </span>
            <Typography>{readTime}</Typography>
            <span className={classes.span}> | </span>
            <NavLink to={`/${topic}`}>
              <OutlineButton size="small">{topic}</OutlineButton>
            </NavLink>
          </Box> */}
          <PostFooterInfo date={date} readTime={readTime} topic={topic} />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <PostCountInfo likes={likes} views={views} />
            <div>
              {type === "podcast" && (
                <IconButton>
                  <QueueMusicIcon />
                </IconButton>
              )}
              <IconButton>
                <BookmarkIcon />
              </IconButton>
            </div>
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
