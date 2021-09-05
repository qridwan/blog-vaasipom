import React, { useState } from "react";
import VasipomLogo from "../../Assets/logos/VasipomLogo2.png";
import { AppBar, Box, Button, InputBase, Popover, Toolbar } from "@material-ui/core";
import { NavigationStyles } from "../../Styles/muiStyles";
import { Container } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import User from "../../Assets/img/user.png";
import NotifyIcon from "../../Assets/icons/notification.png";
import WriteIcon from "../../Assets/icons/writing.png";
import { IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

const Navigation = ({ type }) => {
  const classes = NavigationStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Container maxWidth="xl">
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
            <Box className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{color: "black"}} />
              </div>
              <InputBase
                placeholder="Search something here…"
                classes={{
                  // root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
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

              <IconButton className={classes.navIcon} onClick={handleClick}>
                <Avatar src={User} alt="User" />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                elevation={1}
              >
                <Box mx={2} align="center">
                  <NavLink to="/profile">
                    <Button className={classes.button}>Profile</Button>
                  </NavLink>
                  <Button
                    style={{ color: "#FF0000" }}
                    className={classes.button}
                  >
                    Log Out
                  </Button>
                </Box>
              </Popover>
            </Box>
          </Toolbar>
        </AppBar>{" "}
      </div>
    </Container>
  );
};

export default Navigation;
