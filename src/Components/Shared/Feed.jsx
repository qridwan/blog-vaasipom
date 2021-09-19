import {makeStyles } from "@material-ui/core";
import React from "react";
import { PaginationBlog } from "../../muiComponents/PaginationBlog";
import FeedCard from "./FeedCard";

const feedStyles = makeStyles({
  root: {
    padding: "0 30px",
    // marginTop: "30px",
  },
});
const Feed = ({ data, type }) => {
  const classes = feedStyles();
  return (
    <div className={classes.root}>
      {data.map((feed, index) => (
        <FeedCard key={index} feed={feed} type={type} />
      ))}
    </div>
  );
};

export default Feed;
