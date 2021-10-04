import { Box, IconButton, Typography, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Favorite from "@material-ui/icons/Favorite";
import { grey } from "@material-ui/core/colors";
import { BaseUrl } from "../../BaseUrl.config";
import axios from "axios";

const postCountStyles = makeStyles(() => {
  return {
    text: {
      color: grey[600],
      marginLeft: "2px",
      fontSize: "11px",
    },
    icon: {
      color: grey[600],
      fontSize: "16px",
    },
    root: {
      "&.MuiFormControlLabel-root": {
        margin: 0,
      },
      text: {
        fontSize: "10px",
      },
    },
  };
});

const PostCountInfo = ({ views, likes, category, id, liked }) => {
  // console.log("🚀 ~ PostCountInfo ~ liked", { liked, id });
  const classes = postCountStyles();
  const [isClicked, setIsClicked] = useState(Boolean(liked));
  const [countLikes, setCountLikes] = useState(likes);
  const headers = {
    Authorization: localStorage.getItem("token"),
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  useEffect(() => {
    setCountLikes(likes);
    liked && setIsClicked(true);
  }, [liked]);

  const handleDislike = () => {
    axios
      .delete(BaseUrl + `/${category}/like?postId=${id}`, { headers })
      .then((response) => {
        console.log(response, "--disliked--");
        setIsClicked(false);
        setCountLikes((prevCountLikes) => prevCountLikes - 1);
        alert(`${category}--disliked--`);
      })
      .catch((err) => {
        console.log("disLike", { err });
        alert(`${err} 
        ${BaseUrl + `/${category}/like?postId=${id}`}`);
      });
  };

  const handleLike = () => {
    axios
      .post(BaseUrl + `/${category}/like?postId=${id}`, {}, { headers })
      .then((response) => {
        console.log(response, "--liked--");
        alert(`${category}--liked--`);
        setIsClicked(true);
        setCountLikes(likes + 1);
      })
      .catch((err) => {
        console.log({ err });
        alert(`${("handle Like", err)} 
        ${BaseUrl + `/${category}/like?postId=${id}`}`);
      });
  };

  return (
    <Box
      className={classes.mainBox}
      display="flex"
      alignItems="center"
      my={0}
      py={0}
    >
      {id && (
        <>
          <Box display="flex" alignItems="center" py={0} mr={1}>
            <VisibilityOutlinedIcon className={classes.icon} />
            <Typography className={classes.text}>{views}</Typography>
          </Box>
          <Box display="flex" alignItems="center" py={0} mr={1}>
            {/* <FormControlLabel
          className={classes.root}
          onClick={handleLike}
          control={
            <Checkbox
              style={{ padding: "2px" }}
              icon={<FavoriteBorderOutlinedIcon className={classes.icon} />}
              checkedIcon={<Favorite className={classes.icon} />}
              name="checkedH"
            />
          }
        /> */}
            <IconButton
              className={classes.root}
              onClick={isClicked ? handleDislike : handleLike}
              style={{ padding: "2px" }}
            >
              {isClicked ? (
                <Favorite className={classes.icon} />
              ) : (
                <FavoriteBorderOutlinedIcon className={classes.icon} />
              )}
            </IconButton>

            <Typography className={classes.text}>{countLikes}</Typography>
          </Box>
        </>
      )}

      {/* For Comment  Element*/}
      {/* <Box display="flex" alignItems="center" py={0} mr={1}>
        <IconButton style={{ padding: "2px" }}>
          <TextsmsIcon className={classes.icon} />
        </IconButton>
        <Typography className={classes.text}>{likes}</Typography>
      </Box> */}
    </Box>
  );
};

export default PostCountInfo;
