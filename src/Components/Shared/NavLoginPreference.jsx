import { Avatar, Box, Button, IconButton, Popover } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavigationStyles } from "../../Styles/muiStyles";
import User from "../../Assets/img/user.png";
import NotifyIcon from "../../Assets/icons/notification.png";
import WriteIcon from "../../Assets/icons/writing.png";
import { BaseUrl } from "../../BaseUrl.config";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { setPage, setWriting } from "../../redux/actions/dashboardAction";
import { connect } from "react-redux";
// import { headers } from "../../header.config";

const NavLoginPreference = ({ setIsLogin, setPage, setWrite, type }) => {
  const classes = NavigationStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [userImg, setUserImg] = useState('');

  const getMyProfileInfo = () => {
    const headers = {
      Authorization: localStorage.getItem("token"),
    };
    !userImg &&
      axios
        .get(BaseUrl + `/myprofile`, { headers })
        .then((response) => {
          setUserImg(response.data.profileImgLink);
          localStorage.setItem("useravatar", response.data.profileImgLink);
        })
        .catch((err) => console.log({ err }, BaseUrl + `/myprofile`));
  };

  const handleLogout = () => {
    // localStorage.clear();
    const headers = {
      Authorization: localStorage.getItem("token"),
    };
    axios
      .post(BaseUrl + "/logout", {}, { headers })
      .then((response) => {
        console.log("response:", response);
        localStorage.clear();
        history.push("/login");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const handleWritePen = () => {
    setPage(`Writing`);
    setWrite(null);
  };

  useEffect(() => {
    getMyProfileInfo();
  }, []);

  // const { profileImgLink } = userImg;
  return (
    <Box>
      <NavLink to="/dashboard">
        <IconButton
          className={classes.navIcon}
          onClick={type === "dashboard" && handleWritePen}
        >
          <img src={WriteIcon} alt="" height="30px" width="30px" />
        </IconButton>
      </NavLink>

      <IconButton className={classes.navIcon}>
        <img src={NotifyIcon} alt="" height="30px" width="30px" />
      </IconButton>

      <IconButton className={classes.navIcon} onClick={handleClick}>
        <Avatar src={userImg} alt="User" />
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
          <NavLink to="/myprofile">
            <Button className={classes.button}>Profile</Button>
          </NavLink>
          <Button
            style={{ color: "#FF0000" }}
            className={classes.button}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </Box>
      </Popover>
    </Box>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setPage: setPage,
  setWrite: setWriting,
};
export default connect(mapStateToProps, mapDispatchToProps)(NavLoginPreference);
