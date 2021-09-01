import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Feed from "../../Components/Shared/Feed";
import Suggestions from "../../Components/Shared/Suggestions";
import FeedImg from "../../Assets/img/feedImg.png";
import martinVid from "../../Assets/img/martinVideo.png";
import PinkFem from "../../Assets/img/canva-pink-feminine-social-media-marketing.png";
import Header from "../../Components/LandingPage/Header";
import SubNavigation from "../../Components/LandingPage/SubNavigation";
import Navigation from "./Navigation";

const data = [
  {
    id: 1,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
    img: PinkFem,
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
    img: martinVid,
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
];

const videocastStyles = makeStyles({
  right: {
    boxSizing: "border-box",
    position: "sticky",
    top: "0",
  },
});
const Videocast = () => {
  const classes = videocastStyles();
  return (
    <Container maxWidth="xl"> 
      <Navigation />
      <Header />
      <SubNavigation />
      <Grid
        container
        spacing={3}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item sm={12} md={8}>
          <Feed data={data} type="videocast" />
        </Grid>
        <Grid item sm={12} md={4} className={classes.right}>
          <Suggestions />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Videocast;
