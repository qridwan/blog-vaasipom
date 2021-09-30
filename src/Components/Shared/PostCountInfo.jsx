import {
  Box,
  IconButton,
  Typography,
  FormControlLabel,
  Checkbox,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import TextsmsIcon from "@material-ui/icons/Textsms";
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

const headers = {
  Authorization: localStorage.getItem("token"),
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

const PostCountInfo = ({ views, likes, category, id, liked }) => {
  const classes = postCountStyles();
  const handleDislike = () => {
    axios
      .delete(BaseUrl + `/${category}/like?postId=${id}`, { headers })
      .then((response) => {
        console.log(response, "--liked--");
        alert(`${category}--disliked--`);
      })
      .catch((err) => {
        console.log({ err });
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
      })
      .catch((err) => {
        console.log({ err });
        alert(`${err} 
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
          onClick={!liked ? handleLike : handleDislike}
          style={{ padding: "2px" }}
        >
          {liked ? (
            <Favorite className={classes.icon} />
          ) : (
            <FavoriteBorderOutlinedIcon className={classes.icon} />
          )}
        </IconButton>

        <Typography className={classes.text}>{likes}</Typography>
      </Box>
      <Box display="flex" alignItems="center" py={0} mr={1}>
        <IconButton style={{ padding: "2px" }}>
          <TextsmsIcon className={classes.icon} />
        </IconButton>
        <Typography className={classes.text}>{likes}</Typography>
      </Box>
    </Box>
  );
};

export default PostCountInfo;
