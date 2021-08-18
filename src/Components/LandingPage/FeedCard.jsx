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
import { feedCardStyles } from "../../muiStyles/muiStyles";



const FeedCard = ({ feed }) => {
  const classes = feedCardStyles();
  const { author, title, desc, img, likes, views, date, readTime, topic } =
    feed;
  return (
    <Card className={classes.root}>
      {/* topbar */}
      <CardActions className={classes.topbar}>
        <AuthorButton>{author}</AuthorButton>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
      </CardActions>
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
      <Box display="flex" justifyContent="space-between" alignItems="center">
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
        <div>
          <Typography>{`${date}  |  ${readTime}  |  ${topic}`}</Typography>
        </div>
      </Box>
    </Card>
  );
};

export default FeedCard;
