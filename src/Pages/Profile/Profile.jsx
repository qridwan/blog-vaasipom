import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import facebook from "../../Assets/icons/facebook-social.png";
import instagram from "../../Assets/icons/instagram.png";
import linkedIn from "../../Assets/icons/linkedin.png";
// import profileImage from "../../Assets/img/dp.png";
import Feed from "../../Components/Shared/Feed";
import { OutlineButton } from "../../muiComponents/OutlineButton";
// import { allData } from "../Common/LandingPage";
import Navigation from "../Common/Navigation";
import { BaseUrl } from "../../BaseUrl.config.js";
import axios from "axios";
import { PaginationBlog } from "../../muiComponents/PaginationBlog";
import { profileStyles } from "../../Styles/muiStyles";
import { connect } from "react-redux";
import { setPage } from "../../redux/actions/dashboardAction";
import { useHistory } from "react-router-dom";

const Profile = ({ type, setPage, dashboardState }) => {
  console.log("🚀 ~ Profile ~ dashboardState", dashboardState);
  const classes = profileStyles();
  const [userInfo, setUserInfo] = useState({});
  const [writings, setWritings] = useState([]);
  const { path } = useRouteMatch();
  const [pageNo, setPageNo] = useState(1);
  console.log("🚀 ~ Profile ~ path", path);
  
  
  const headers = {
    Authorization: localStorage.getItem("token"),
    // "Access-Control-Allow-Origin": "*",
  };
  const getMyProfileInfo = () => {
    axios
      .get(BaseUrl + `/myprofile`, { headers })
      .then((response) => {
        console.log(response.data);
        setUserInfo(response.data);
      })
      .catch((err) => console.log({ err }, BaseUrl + `/myprofile`));
  };
  // author/writings?category=article&page=1
  const getMyWritings = (paginate) => {
    axios
      .get(BaseUrl + `/author/writings?category=article&page=${paginate}`, {
        headers
      })
      .then((response) => {
        console.log(response.data);
        setWritings(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (path === "/myprofile") {
      getMyProfileInfo();
      getMyWritings(pageNo);
    }
  }, [pageNo]);
  const {
    // country,
    email,
    firstName,
    followersCount,
    // phone,
    profileImgLink,
    profileTitle,
  } = userInfo;
  const history = useHistory();
  const handleEdit = () => {
    setPage(`Settings`);
    history.push("/dashboard");
    console.log("clicked", `color: red`);
  };

  return (
    <Container maxWidth="lg">
      <Navigation />
      {/* <SubNavigation /> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          {email && (
            <Box textAlign="center" mt={5} className={classes.profileCard}>
              <img src={profileImgLink} alt="dp" className={classes.profile} />
              <Typography className={classes.name}>
                {firstName ? firstName?.charAt(0).toUpperCase() + firstName?.slice(1) : "Set Your Name"}
              </Typography>
              <Typography className={classes.title}>{profileTitle ? profileTitle : "Title"}</Typography>
              <Typography>
                <span className={classes.follower}>{followersCount} </span>{" "}
                Followers
              </Typography>

              <OutlineButton size="small" onClick={handleEdit}>
                Edit
              </OutlineButton>
              <Box my={3}>
                <IconButton>
                  <img src={linkedIn} alt="li" />
                </IconButton>
                <IconButton style={{ margin: "0 20px" }}>
                  <img src={instagram} alt="ins" />
                </IconButton>
                <IconButton>
                  <img src={facebook} alt="fb" />
                </IconButton>
              </Box>
            </Box>
          )}

          <Divider />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Feed data={writings} type="allFeed" />
          <PaginationBlog page={pageNo} setPage={setPageNo} />
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setPage: setPage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
