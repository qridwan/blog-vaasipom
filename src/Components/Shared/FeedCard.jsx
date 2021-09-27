import React, { useEffect, useState } from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  IconButton,
  Popover,
} from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { feedCardStyles } from "../../Styles/muiStyles";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import { NavLink, useRouteMatch } from "react-router-dom";
// import authorImg from "../../Assets/img/authorbtnImg.png";
import AuthorButton from "../../muiComponents/AuthorButton";
import PostCountInfo from "./PostCountInfo";
import PostFooterInfo from "./PostFooterInfo";
import parse from "html-react-parser";
import dateFormat from "dateformat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { connect } from "react-redux";
import {
  setPage,
  setPostId,
  setTodo,
  setWriting,
} from "../../redux/actions/dashboardAction";
import { handleDelete } from "../../Function/Delete.api";
import { deletePost } from "../../redux/actions/landingPage.Action";

const FeedCard = ({
  feed,
  type,
  setPage,
  setWriting,
  setPostId,
  setTodo,
  deletePost,
}) => {
  // console.log("🚀 ~ FeedCard ~ feed", { feed, type });
  const classes = feedCardStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const [feedId, setFeedId] = useState(``);
  const [postContent, setPostContent] = useState({});
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { author, category } = feed;

  let { url } = useRouteMatch();
  if (
    url === "/" ||
    url === "/article" ||
    url === "/poetry" ||
    url === "/story" ||
    url === "/review"
  ) {
    url = "/feed";
  }
  const userEmail = localStorage.getItem("username");

  useEffect(() => {
    setPostContent(feed[feed.category]);
    feed.author.email === userEmail ? setIsUser(true) : setIsUser(false);
  }, [feed]);

  useEffect(() => {
    setFeedId(postContent[`${category}Id`]);
  }, [postContent]);
  // const { createdDate, title, subTitle, readTime, reads, likes, mainImage } =postContent;
  //formating date
  // const createdDate = article?.createdDate;
  const createdDateFormate = dateFormat(postContent?.createdDate, "dS mmmm");
  //formate end

  //handeling edit route
  const handleEdit = () => {
    setPage(`Writing`);
    setWriting(feed.category);
    setPostId(feedId);
    setTodo({
      // todo: true,
      edit: true,
      ...postContent,
    });
  };
  // console.log({ postContent });
  // const { content } = postContent;
  // const mainText = parse(content ? content : "");
  // console.log("🚀 ~ FeedCard ~ content", mainText);
  return (
    <Card className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={postContent?.mainImage ? 8 : 12}>
          <CardActions className={classes.authorBtn}>
            <AuthorButton
              authorName={author?.name}
              authorImg={author?.profileImage}
              authorEmail={author?.email}
            />
          </CardActions>
          <NavLink to={`${url}/${category}/${feedId}`}>
            <CardActionArea className={classes.mainArea}>
              {/* title */}
              <Typography className={classes.title}>
                {postContent?.title?.length > 70
                  ? postContent?.title?.slice(0, 70) + "..."
                  : postContent?.title}
              </Typography>
              {/* description */}
              {postContent?.subTitle && (
                <Typography className={classes.desc}>
                  {postContent?.subTitle?.length > 90
                    ? postContent?.subTitle?.slice(0, 90) + "..."
                    : postContent?.subTitle}
                  {/* {mainText} */}
                </Typography>
              )}
            </CardActionArea>
          </NavLink>
          <PostFooterInfo
            date={createdDateFormate}
            readTime={postContent?.readTime}
            topic={category}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="start"
            my={0}
            py={0}
          >
            <PostCountInfo
              likes={postContent?.likes}
              views={postContent?.reads}
              category={category}
              id={feedId}
            />
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

              {/* edit option visible only for users post */}
              {isUser && (
                <>
                  <IconButton style={{ padding: "2px" }} onClick={handleClick}>
                    <MoreVertIcon style={{ fontSize: "16px" }} />
                  </IconButton>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    elevation={1}
                  >
                    <Box mx={2} align="center">
                      <NavLink to="/dashboard">
                        <Button className={classes.button} onClick={handleEdit}>
                          Edit
                        </Button>
                      </NavLink>
                      <Button
                        style={{ color: "#FF0000" }}
                        className={classes.button}
                        onClick={
                          () => {
                            handleClose();
                            deletePost(category, feedId);
                          }
                          // handleDelete(category, feedId)
                        }
                      >
                        Delete
                      </Button>
                    </Box>
                  </Popover>
                </>
              )}
            </Box>
          </Box>
        </Grid>

        {/* image */}
        {postContent?.mainImage && (
          <Grid item xs={12} sm={4}>
            <CardMedia
              className={classes.media}
              image={postContent?.mainImage}
              title="Feed Cover Photo"
            />
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

// using redux
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setPage: setPage,
  setWriting: setWriting,
  setPostId: setPostId,
  setTodo: setTodo,
  deletePost: deletePost,
};
export default connect(mapStateToProps, mapDispatchToProps)(FeedCard);
