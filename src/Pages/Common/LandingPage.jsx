import React from "react";
import Feed from "../../Components/LandingPage/Feed.jsx";
import Header from "../../Components/LandingPage/Header.jsx";
import Suggestions from "../../Components/Shared/Suggestions.jsx";
import { Grid, Paper } from "@material-ui/core";
import { landingPageStyles } from "../../Styles/muiStyles.js";

const LandingPage = () => {
  const classes = landingPageStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div>
        <Grid
          container
          spacing={3}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Feed />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
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
