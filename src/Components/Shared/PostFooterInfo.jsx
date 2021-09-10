import { Box, Typography, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import { NavLink } from "react-router-dom";
import { OutlineButton } from "../../muiComponents/OutlineButton";

const postFooterInfoStyles = makeStyles(() => {
  return {
    span: {
      margin: "0 8px",
      fontSize: "12px",
    },
    text: {
      fontSize: "11px",
      color: grey[600],
    },
  };
});
const PostFooterInfo = ({ date, readTime, topic, tags }) => {
  const classes = postFooterInfoStyles();
  return (
    <Box display="flex" justifyContent="start" alignItems="center" my={0}>
      <Typography className={classes.text}>{date}</Typography>
      <span className={classes.span}> | </span>
      <Typography className={classes.text}>{readTime}</Typography>
      <span className={classes.span}> | </span>
      {topic && (
        <NavLink to={`/${topic}`}>
          <OutlineButton size="xsmall" style={{ color: grey[600] }}>
            {topic}
          </OutlineButton>
        </NavLink>
      )}
      {tags && <Typography className={classes.text}>{tags}</Typography>}
    </Box>
  );
};

export default PostFooterInfo;
