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

const FeedCard = ({ feed, type, setPage, setWriting, setPostId, setTodo }) => {
  const classes = feedCardStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { article, author, category } = feed;
  let { url } = useRouteMatch();
  if (url === "/") {
    url = "/feed";
  }
  const userEmail = localStorage.getItem("username");

  useEffect(() => {
    feed.author.email === userEmail ? setIsUser(true) : setIsUser(false);
  }, [feed]);

  //formating date
  const createdDate = article?.createdDate;
  const createdDateFormate = dateFormat(createdDate, "dS mmmm");
  //formate end

  //handeling edit route
  const handleEdit = () => {
    setPage(`Writing`);
    setWriting(`Article`);
    setPostId(article?.articleId);
    setTodo({
      todo: true,
      ...feed,
    });
  };

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
            <PostCountInfo
              likes={article?.likes}
              views={article?.reads}
              category={category}
              id={article?.articleId}
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
                        onClick={() =>
                          handleDelete(category, article?.articleId)
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

// using redux
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setPage: setPage,
  setWriting: setWriting,
  setPostId: setPostId,
  setTodo: setTodo,
};
export default connect(mapStateToProps, mapDispatchToProps)(FeedCard);
