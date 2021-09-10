import React from "react";
import {
  Grid,
  Container,
  Box,
  makeStyles,
  Typography,
  IconButton,
  Divider,
} from "@material-ui/core";
import SubNavigation from "../../Components/LandingPage/SubNavigation";
import Navigation from "../Common/Navigation";
import Feed from "../../Components/Shared/Feed";
import { allData } from "../Common/LandingPage";
import { OutlineButton } from "../../muiComponents/OutlineButton";
import profileImage from "../../Assets/img/dp.png";
import linkedIn from "../../Assets/icons/linkedin.png";
import facebook from "../../Assets/icons/facebook-social.png";
import instagram from "../../Assets/icons/instagram.png";

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
  return (
    <Container maxWidth="lg">
      <Navigation />
      {/* <SubNavigation /> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Box textAlign="center" mt={5}>
            <img src={profileImage} alt="dp" className={classes.profile} />
            <Typography className={classes.name}>Jhon Doe</Typography>
            <Typography>
              <span className={classes.follower}>121123 </span> Followers
            </Typography>

            <OutlineButton size="small">Edit</OutlineButton>
            <Box my={3}>
              <IconButton>
                <img src={linkedIn} alt="li" />
              </IconButton>
              <IconButton style={{ margin: "0 20px" }} >
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
          <Feed data={allData} type="allFeed" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
