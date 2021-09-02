import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { OutlineButton } from "../../muiComponents/OutlineButton";

const postFooterInfoStyles = makeStyles(() => {
  return {
    span: {
      margin: "0 15px",
    },
  };
});
const PostFooterInfo = ({ date, readTime, topic }) => {
  const classes = postFooterInfoStyles();
  return (
    <Box display="flex" justifyContent="start" alignItems="center" my={2}>
      <Typography>{date}</Typography>
      <span className={classes.span}> | </span>
      <Typography>{readTime}</Typography>
      <span className={classes.span}> | </span>
      <NavLink to={`/${topic}`}>
        <OutlineButton size="small">{topic}</OutlineButton>
      </NavLink>
    </Box>
  );
};

export default PostFooterInfo;
