import { makeStyles } from "@material-ui/core";
import React, { lazy, Suspense } from "react";
// import FeedCard from "./FeedCard";
const FeedCard = lazy(() => import(`./FeedCard`));

const feedStyles = makeStyles({
  root: {
    padding: "0 30px",
  },
});
const Feed = ({ data, type, loading }) => {
  const classes = feedStyles();

  return (
    <div className={classes.root}>
      {
        data.map((feed, index) => (
          <Suspense key={index} fallback={<p>Loading...</p>}>
            <FeedCard feed={feed} type={type} />
          </Suspense>
        ))}
      <div>{loading && "Loading..."}</div>
    </div>
  );
};

export default Feed;
