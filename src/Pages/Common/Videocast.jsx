import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Feed from "../../Components/Shared/Feed";
import Suggestions from "../../Components/Shared/Suggestions";
import SubNavigation from "../../Components/LandingPage/SubNavigation";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl.config";

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
