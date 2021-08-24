import { Container, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import FeedCard from "./FeedCard";

const feedStyles = makeStyles({
  root: {
    padding: "0 40px",
    marginTop: "30px",
    overflowY: "scroll",
    maxHeight: "100vh",
  },
});
const Feed = ({ data, type }) => {
  const classes = feedStyles();
  return (
    <div className={classes.root}>
      {data.map((feed) => (
        <FeedCard key={feed.id} feed={feed} type={type} />
      ))}
    </div>
  );
};

export default Feed;
