import React, { useEffect, useState } from "react";
import Feed from "../../Components/Shared/Feed.jsx";
import Header from "../../Components/LandingPage/Header.jsx";
import SubNavigation from "../../Components/LandingPage/SubNavigation.jsx";
import Suggestions from "../../Components/Shared/Suggestions.jsx";
import { Container, Grid, Paper } from "@material-ui/core";
import { landingPageStyles } from "../../Styles/muiStyles.js";
import Navigation from "./Navigation.jsx";
import { connect } from "react-redux";
import { hideHeader } from "../../redux/actions/headerAction.js";
import { PaginationBlog } from "../../muiComponents/PaginationBlog.jsx";
import { useRouteMatch } from "react-router-dom";
import MuiProgress from "../../muiComponents/MuiProgress.jsx";
// import { fetchPost } from "../../redux/actions/landingPage.Action.js";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl.config.js";

const LandingPage = (props) => {
  const { headerVisible, hideHeader, LandingPageState } = props;
  console.log("🚀 ~ LandingPage ~ LandingPageState", LandingPageState)
  // const { posts } = LandingPageState;
  console.log("🚀 ~ LandingPage ~ Props", props);
  const classes = landingPageStyles();
  const [page, setPage] = useState(1);
  const [allPost, setAllPost] = useState([]);
  const [categoryItem, setCategoryItem] = useState("");
  // LOADER
  const [isLoading, setIsLoading] = useState(false);
  const handleOpen = () => {
    setIsLoading(true);
  };
  const handleClose = () => {
    setIsLoading(false);
  };

  const { path } = useRouteMatch();

  useEffect(() => {
    document.title = "Blog | Home";
    path === "/poetry" && setCategoryItem("poetry");
    path === "/story" && setCategoryItem("story");
    path === "/article" && setCategoryItem("article");
    path === "/review" && setCategoryItem("review");
    path === "/" &&
      setCategoryItem("story,article,poetry,review,podcast,videocast");
      getPost()
    return () => hideHeader();
  }, [categoryItem]);

  // useEffect(() => {
  //    getPost();
  //   posts.length && setIsLoading(false);
  // }, [posts.length]);

  const getPost = () => {
    setIsLoading(true);
    // fetchPost(categoryItem, page);
    axios
      .get(
        BaseUrl +
          `/auth/home/posts?categoryList=${categoryItem}&page=${page}&allPost=true`
      )
      .then((response) => {
        setAllPost(response.data);
        handleClose();
      })
      .catch((error) => {
        console.log("error", error);
        handleClose();
      });
  };

  console.log({ allPost });
  return (
    <Container maxWidth="lg">
      <Navigation />
      {!localStorage.token && headerVisible && <Header />}
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
              {isLoading && (
                <MuiProgress open={handleOpen} close={handleClose} />
              )}

              <Feed data={allPost} type="allFeed" />
              {!isLoading && (
                <>
                  <PaginationBlog page={page} setPage={setPage} />
                </>
              )}
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
  // fetchPost: fetchPost,
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
