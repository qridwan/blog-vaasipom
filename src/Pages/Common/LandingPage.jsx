import React, { useEffect } from "react";
import Feed from "../../Components/Shared/Feed.jsx";
import Header from "../../Components/LandingPage/Header.jsx";
import SubNavigation from "../../Components/LandingPage/SubNavigation.jsx";
import Suggestions from "../../Components/Shared/Suggestions.jsx";
import { Container, Grid, Paper } from "@material-ui/core";
import { landingPageStyles } from "../../Styles/muiStyles.js";
import FeedImg from "../../Assets/img/feedImg.png";
import FeedImg2 from "../../Assets/img/demo-post-1.jpg";
import FeedImg3 from "../../Assets/img/demo-post-2.jpg";
import FeedImg4 from "../../Assets/img/demo-post-3.jpg";
import Navigation from "./Navigation.jsx";
import { connect } from "react-redux";
import { hideHeader } from "../../redux/actions/headerAction.js";

export const allData = [
  {
    id: 1,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet, adipiscing elit. Dolor sit amet, adipiscing",
    img: FeedImg2,
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "4 Min",
    topic: "Videocast",
  },
  {
    id: 12,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet, adipiscing elit. Dolor sit amet, adipiscing",
    img: FeedImg4,
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "4 Min",
    topic: "Podcast",
  },
  {
    id: 13,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet, adipiscing elit. Dolor sit amet, adipiscing",
    img: FeedImg3,
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "4 Min",
    topic: "Novel",
  },
  {
    id: 3,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
    img: FeedImg4,
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "4 Min",
    topic: "Podcast",
  },
  {
    id: 5,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
    img: FeedImg2,
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "3 Min",
    topic: "Article",
  },
  {
    id: 6,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
    img: FeedImg3,
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "6 Min",
    topic: "Videocast",
  },
];
const LandingPage = ({ headerVisible, hideHeader }) => {
  const classes = landingPageStyles();
  useEffect(() => {
    document.title = "Blog | Home";
    return () => hideHeader();
  }, []);

  return (
    <Container maxWidth="lg">
      <Navigation />
      {headerVisible && <Header />}
      <SubNavigation />
      <Container>
        <Grid
          container
          spacing={3}
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.content}
        >
          <Grid item xs={12} sm={8} className={classes.left}>
            <Paper className={classes.paper}>
              <Feed data={allData} type="allFeed" />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.right}>
            <Paper className={classes.paper}>
              <Suggestions />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  hideHeader: hideHeader,
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
