import React from "react";
import FeedCard from "./FeedCard";

const Feed = ({ data, type }) => {
  return (
    <div>
      {data.map((feed) => (
        <FeedCard key={feed.id} feed={feed} type={type} />
      ))}
    </div>
  );
};

export default Feed;
