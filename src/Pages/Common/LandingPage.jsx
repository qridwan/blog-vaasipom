import React from "react";
import Feed from "../../Components/Shared/Feed.jsx";
import Header from "../../Components/LandingPage/Header.jsx";
import SubNavigation from "../../Components/LandingPage/SubNavigation.jsx";
import Suggestions from "../../Components/Shared/Suggestions.jsx";
import { Grid, Paper } from "@material-ui/core";
import { landingPageStyles } from "../../Styles/muiStyles.js";
import FeedImg from "../../Assets/img/feedImg.png";
import Navigation from "./Navigation.jsx";

const data = [
  {
    id: 1,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
    img: FeedImg,
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
    img: FeedImg,
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "4Min",
    topic: "Science",
  },
  {
    id: 4,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
    img: FeedImg,
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "4Min",
    topic: "Science",
  },
  {
    id: 5,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
    img: FeedImg,
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "4Min",
    topic: "Science",
  },
  {
    id: 6,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
    img: FeedImg,
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "4Min",
    topic: "Science",
  },
];
const LandingPage = () => {
  const classes = landingPageStyles();
  return (
    <div className={classes.root}>
      <Navigation />
      <Header />
      <SubNavigation />
      <div>
        <Grid
          container
          spacing={3}
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.content}
        >
          <Grid item xs={12} sm={8} className={classes.left}>
            <Paper className={classes.paper}>
              <Feed data={data} type="allFeed" />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.right}>
            <Paper className={classes.paper}>
              <Suggestions />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LandingPage;
