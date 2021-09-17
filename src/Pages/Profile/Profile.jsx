import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import facebook from "../../Assets/icons/facebook-social.png";
import instagram from "../../Assets/icons/instagram.png";
import linkedIn from "../../Assets/icons/linkedin.png";
import profileImage from "../../Assets/img/dp.png";
import Feed from "../../Components/Shared/Feed";
import { OutlineButton } from "../../muiComponents/OutlineButton";
import { allData } from "../Common/LandingPage";
import Navigation from "../Common/Navigation";
import { BaseUrl } from "../../BaseUrl.config.js";
import axios from "axios";

const profileStyles = makeStyles((theme) => {
  return {
    profile: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
    },
    name: {
      fontWeight: "800",
      fontSize: "35px",
      lineHeight: "67px",
      textAlign: "center",
      letterSpacing: "-0.02em",
      color: "#000000",
    },
    title: {
      fontWeight: "800",
      fontSize: "20px",
      lineHeight: "35px",
      textAlign: "center",
      letterSpacing: "-0.02em",
      color: "#000000",
    },
    follower: {
      fontWeight: "500",
      fontSize: "20px",
      textAlign: "center",
      letterSpacing: "-0.02em",
      color: "#000000",
    },
  };
});


const Profile = ({ type }) => {
  const classes = profileStyles();
  const [userInfo, setUserInfo] = useState({});
  const [writings, setWritings] = useState([]);
  const { path } = useRouteMatch();
  console.log("🚀 ~ Profile ~ path", path);
  const headers = {
    Authorization: localStorage.getItem("token"),
  };

  const getMyWritings = () => {
    axios
      .get(
        BaseUrl +
          `/author/writings?category=article&page=1`,
        { headers }
      )
      .then((response) => {
        console.log(response.data);
        setWritings(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (path === "/myprofile") {
      axios
        .get(BaseUrl + `/myprofile`, { headers })
        .then((response) => {
          console.log(response.data);
          setUserInfo(response.data);
        })
        .catch((err) => console.log({err}, BaseUrl + `/myprofile`));
      getMyWritings();
    }
  }, []);
  const {
    country,
    email,
    firstName,
    followersCount,
    phone,
    profileImgLink,
    profileTitle,
  } = userInfo;
  return (
    <Container maxWidth="lg">
      <Navigation />
      {/* <SubNavigation /> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Box textAlign="center" mt={5}>
            <img src={profileImgLink} alt="dp" className={classes.profile} />
            <Typography className={classes.name}>
              {firstName?.charAt(0).toUpperCase() + firstName?.slice(1)}
            </Typography>
            <Typography className={classes.title}>{profileTitle}</Typography>
            <Typography>
              <span className={classes.follower}>{followersCount} </span>{" "}
              Followers
            </Typography>

            <OutlineButton size="small">Edit</OutlineButton>
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

          <Divider />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Feed data={writings} type="allFeed" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
