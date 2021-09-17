import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import FeedCard from "../Shared/FeedCard";
import PodcastSlider from "./PodcastSlider";
const podcastFeeds = [
  {
    id: 1,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
    img: "",
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "4Min",
    topic: "Science",
  },
  {
    id: 2,
    author: "Krishaan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
    img: "",
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "4Min",
    topic: "Science",
  },
  {
    id: 3,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
    img: "",
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "4Min",
    topic: "Science",
  },
];

const podcastFeedStyles = makeStyles(() => {
  return {
    root: {
      padding: "0 40px",
      marginTop: "30px",
    },
    title: {
      fontWeight: "bold",
      fontSize: "25px",
      lineHeight: "31px",
      color: "#000000",
    },
  };
});

const PodcastFeed = ({ setIsAudioPlay, data }) => {
  const classes = podcastFeedStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Popular Trending</Typography>
      <PodcastSlider setIsAudioPlay={setIsAudioPlay} />
      <Box my={10}>
        {data.map((feed) => (
          <FeedCard key={feed} feed={feed} podcast={true} />
        ))}
      </Box>
      <Typography
        onClick={() => setIsAudioPlay(true)}
        className={classes.title}
      >
        Spiritual & Religious
      </Typography>
      <PodcastSlider setIsAudioPlay={setIsAudioPlay} />
      <Box my={10}>
        {podcastFeeds.map((feed) => (
          <FeedCard key={feed.id} feed={feed} type={"podcast"} />
        ))}
      </Box>
    </div>
  );
};

export default PodcastFeed;
