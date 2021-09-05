import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import React from "react";
import headerImg from "../../Assets/img/HeaderImg.png";
import { BlackButton } from "../../muiComponents/BlackButton";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";

const headerStyles = makeStyles((theme) => ({
  head: {
    marginTop: "10px",
    position: "relative",
    zIndex: theme.zIndex.drawer + 1,
  },
  root: {
    flexGrow: 1,
  },
  left: {
    padding: theme.spacing(7),
    textAlign: "start",
    color: theme.palette.text.primary,
    display: "flex",
    alignItems: "center",
    boxShadow: "none",
  },
  right: {
    padding: theme.spacing(5),
    textAlign: "start",
    color: theme.palette.text.primary,
    boxShadow: "none",
  },
  title: {
    marginBottom: "10px",
    fontSize: "35px",
    "@media (min-width:800px)": {
      fontSize: "50px",
      marginBottom: "30px",
    },
  },
  subtitle: {
    marginBottom: "10px",
    fontSize: "25px",
    color: deepOrange[800],
    "@media (min-width:800px)": {
      fontSize: "35px",
      marginBottom: "30px",
    },
  },
  desc: {
    marginBottom: "20px",
    fontSize: "14px",
    textAlign: "justify",
    color: "#6E7782",
    "@media (min-width:800px)": {
      fontSize: "18px",
    },
  },
  btn: {
    marginTop: "40px",
  },
}));

const Header = () => {
  const classes = headerStyles();
  return (
    <header className={classes.head}>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          justifyContent="flex-start"
          alignItems="flex-center"
        >
          <Grid className={classes.left} item sm={12} md={6}>
            <Paper className={classes.left}>
              <div>
                <Typography className={classes.title}>
                  The art of writing
                </Typography>
                <Typography className={classes.subtitle}>
                  <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(`Create a blog post subtitle`)
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      .pauseFor(3000)
                      .deleteAll()
                      .callFunction(() => {})
                      .start();
                  }}
                  options={{ loop: true}}
                />
                </Typography>
                
                <Typography className={classes.desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  id magna massa. Ut vitae risus vehicula, faucibus odio id,
                  dictum neque. Curabitur rhoncus quis ipsum quis varius.
                </Typography>
                <NavLink to="/login">
                <BlackButton className={classes.btn}>Sign Up</BlackButton>
                  </NavLink>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.right}>
              <div className=" ">
                <img
                  src={headerImg}
                  alt=""
                  className=""
                  height="auto"
                  width="100%"
                />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default Header;
