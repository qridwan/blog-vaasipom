import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Feed from "../../Components/Shared/Feed";
import Suggestions from "../../Components/Shared/Suggestions";
// import FeedImg from "../../Assets/img/feedImg.png";
// import martinVid from "../../Assets/img/martinVideo.png";
// import PinkFem from "../../Assets/img/canva-pink-feminine-social-media-marketing.png";
// import Header from "../../Components/LandingPage/Header";
import SubNavigation from "../../Components/LandingPage/SubNavigation";
import Navigation from "./Navigation";
import TopicSlider from "../../Components/Shared/TopicSlider";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl.config";

// const data = [
//   {
//     id: 1,
//     author: "Aadavan",
//     title: "The art of writing Create a blog post subtitle",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
//     img: PinkFem,
//     likes: 529,
//     views: 768,
//     date: "10th August",
//     readTime: "4Min",
//     topic: "Science",
//   },
//   {
//     id: 2,
//     author: "Krishaan",
//     title: "The art of writing Create a blog post subtitle",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
//     img: martinVid,
//     likes: 529,
//     views: 768,
//     date: "10th August",
//     readTime: "4Min",
//     topic: "Science",
//   },
//   {
//     id: 3,
//     author: "Aadavan",
//     title: "The art of writing Create a blog post subtitle",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
//     img: FeedImg,
//     likes: 529,
//     views: 768,
//     date: "10th August",
//     readTime: "4Min",
//     topic: "Science",
//   },
// ];

const videocastStyles = makeStyles({
  right: {
    boxSizing: "border-box",
    position: "sticky",
    top: "0",
  },
  left: {
    borderRight: "2px solid #EDEDED",
  },
});
const Videocast = () => {
  const classes = videocastStyles();
  const [allPost, setAllPost] = useState([]);
  const getPost = () => {
    axios
      .get(
        BaseUrl + `/auth/home/posts?categoryList=videocast&page=1&allPost=true`
      )
      .then((response) => {
        console.log("response:", response);
        setAllPost(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    document.title = "Blog | Videocast";
    getPost();
  }, []);

  return (
    <Container maxWidth="lg">
      <Navigation />
      <TopicSlider />
      {/* <Header /> */}
      <SubNavigation />
      <Container>
        <Grid
          container
          spacing={3}
          justifyContent="flex-start"
          alignItems="flex-start"
          style={{ marginTop: "-20px" }}
        >
          <Grid item sm={12} md={8} className={classes.left}>
            <Feed data={allPost} type="videocast" />
          </Grid>
          <Grid item sm={12} md={4} className={classes.right}>
            <Suggestions />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Videocast;
