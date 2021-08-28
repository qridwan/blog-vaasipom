import React from "react";
import VasipomLogo from "../../Assets/logos/VasipomLogo2.png";
import { AppBar, Box, Toolbar } from "@material-ui/core";
import { NavigationStyles } from "../../Styles/muiStyles";
import { Container } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import User from "../../Assets/img/user.png";
import NotifyIcon from "../../Assets/icons/notification.png";
import WriteIcon from "../../Assets/icons/writing.png";
import { IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Navigation = ({ type }) => {
  const classes = NavigationStyles();
  return (
    <Container>
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Box className={classes.menuBrand}>
              <NavLink to={`/`}>
                <img
                  src={VasipomLogo}
                  alt="brandLogo"
                  className=""
                  height="70px"
                  width="200px"
                />
              </NavLink>
            </Box>

            {/* After Login  */}
            <Box>
              <NavLink to="/dashboard">
                <IconButton className={classes.navIcon}>
                  <img src={WriteIcon} alt="" />
                </IconButton>
              </NavLink>

              <IconButton className={classes.navIcon}>
                <img src={NotifyIcon} alt="" />
              </IconButton>

              <IconButton className={classes.navIcon}>
                <Avatar src={User} alt="User" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>{" "}
      </div>
      {/* <div className={classes.offset} /> */}
    </Container>
  );
};

export default Navigation;
