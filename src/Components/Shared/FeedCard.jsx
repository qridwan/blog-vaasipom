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
import { Subtitles } from "@material-ui/icons";
import parse from "html-react-parser";
import dateFormat from "dateformat";

const FeedCard = ({ feed, type }) => {
  const classes = feedCardStyles();
  const { article, author, category } = feed;
  // const {
  //   title,
  //   likes,
  //   reads,
  //   date,
  //   mainImage,
  //   readTime,
  //   topic,
  //   content,
  //   articleId,
  //   createDate,
  //   subTitle,
  // } = article;
  const { email, name, profileImage } = author;
  let { url } = useRouteMatch();
  if (url === "/") {
    url = "/feed";
  }
  const createdDateFormate = dateFormat(article?.createDate, "dS mmmm");

  return (
    <Card className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={article?.mainImage ? 8 : 12}>
          <CardActions className={classes.authorBtn}>
            <AuthorButton
              authorName={author?.name}
              authorImg={author?.profileImage}
            />
          </CardActions>
          <NavLink to={`${url}/${category}/${article?.articleId}`}>
            <CardActionArea className={classes.mainArea}>
              {/* title */}
              <Typography className={classes.title}>
                {article?.title}
              </Typography>
              {/* description */}
              {article?.subTitle && (
                <Typography className={classes.desc}>
                  {parse(article?.subTitle)}
                </Typography>
              )}
            </CardActionArea>
          </NavLink>
          <PostFooterInfo
            date={createdDateFormate}
            readTime={article?.readTime}
            topic={category}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="start"
            my={0}
            py={0}
          >
            <PostCountInfo likes={article?.likes} views={article?.reads} />
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
        {article?.mainImage && (
          <Grid item xs={12} sm={4}>
            <CardMedia
              className={classes.media}
              image={article?.mainImage}
              title="Feed Cover Photo"
            />
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

export default FeedCard;
