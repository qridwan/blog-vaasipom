import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Feed from "../../Components/Shared/Feed";
import Suggestions from "../../Components/Shared/Suggestions";
import SubNavigation from "../../Components/LandingPage/SubNavigation";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl.config";
import LoadingAtom from "../../muiComponents/LoadingAtom";

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
  const [isLoading, setIsLoading] = useState(true);
  const getPost = () => {
    setIsLoading(true);
    axios
      .get(
        BaseUrl + `/auth/home/posts?categoryList=videocast&page=1&allPost=true`
      )
      .then((response) => {
        setIsLoading(false);
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
            {!isLoading ? (
              <Feed data={allPost} type="videocast" />
            ) : (
              <LoadingAtom />
            )}
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
