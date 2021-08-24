import React from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import { AuthorButton } from "../../muiComponents/AuthorButton";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { feedCardStyles } from "../../Styles/muiStyles";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import { NavLink, useRouteMatch } from "react-router-dom";

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
        <AuthorButton>{author}</AuthorButton>
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
      </CardActions>
      <NavLink to={`${url}/${title}`}>
        <CardActionArea>
          {/* title */}
          <Typography className={classes.title}>{title}</Typography>
          {/* description */}
          <Typography className={classes.desc}>{desc}</Typography>
          {/* image */}
          {img && (
            <CardMedia
              className={classes.media}
              image={img}
              title="Feed Cover Photo"
            />
          )}
          {/* footer */}
        </CardActionArea>
      </NavLink>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center">
            <VisibilityOutlinedIcon />
            <Typography style={{ marginLeft: "10px" }}>{views}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <Typography>{likes}</Typography>
          </Box>
        </Box>

        <div>
          <Typography>{`${date}  |  ${readTime}  |  ${topic}`}</Typography>
        </div>
      </Box>
    </Card>
  );
};

export default FeedCard;
