import { Avatar, Box, Button, IconButton, Popover } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavigationStyles } from "../../Styles/muiStyles";
// import User from "../../Assets/img/user.png";
import NotifyIcon from "../../Assets/icons/notification.png";
import WriteIcon from "../../Assets/icons/writing.png";
import { BaseUrl } from "../../BaseUrl.config";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { setPage, setWriting } from "../../redux/actions/dashboardAction";
import { connect } from "react-redux";
// import { headers } from "../../header.config";
import imageToBase64 from "image-to-base64/browser";

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
  const [userImg, setUserImg] = useState("");

  // const toDataURL = (url) =>
  //   url &&
  //   fetch(url)
  //     .then((response) => response.blob())
  //     .then((blob) =>
  //       new Promise((resolve, reject) => {
  //         const reader = new FileReader();
  //         reader.onloadend = () => resolve(reader.result);
  //         reader.onerror = reject;
  //         reader.readAsDataURL(blob);
  //       }).then((dataUrl) => {
  //         console.log("RESULT:", dataUrl);
  //         // localStorage.setItem("useravatar", response.data.profileImgLink);
  //         localStorage.setItem("useravatar", dataUrl);
  //       })
  //     );

  const getMyProfileInfo = () => {
    const headers = {
      Authorization: localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json",
    };

    !userImg &&
      axios
        .get(BaseUrl + `/myprofile`, { headers })
        .then((response) => {
          console.log("Image link", response.data.profileImgLink);
          setUserImg(response.data.profileImgLink);
          localStorage.setItem("useravatar", response.data.profileImgLink);
          // imageToBase64(`${response.data.profileImgLink}`, { mode: "no-cors" })
          //   .then((response) => {
          //     console.log(response);
          //     setUserImg(response);
          //     localStorage.setItem("useravatar", response);
          //   })
          //   .catch((error) => {
          //     console.log(error); // Logs an error if there was one
          //   });
          // fetch(response.data.profileImgLink, {
          //   mode: 'no-cors', headers })
          //   .then((res) => res.blob())
          //   .then((blob) =>
          //     new Promise((resolve, reject) => {
          //       const reader = new FileReader();
          //       reader.onloadend = () => resolve(reader.result);
          //       reader.onerror = reject;
          //       reader.readAsDataURL(blob);
          //     }).then((dataUrl) => {
          //       console.log("RESULT:", dataUrl);
          //       // localStorage.setItem("useravatar", response.data.profileImgLink);
          //       localStorage.setItem("useravatar", dataUrl);
          //     })
          //   );
          //   toDataURL(response.data.profileImgLink).then((dataUrl) => {
          //     console.log("RESULT:", dataUrl);
          //     // localStorage.setItem("useravatar", response.data.profileImgLink);
          //     localStorage.setItem("useravatar", dataUrl);
          //   });
        })
        .catch((err) => console.log({ err }, BaseUrl + `/myprofile`));
  };

  const handleLogout = () => {
    // localStorage.clear();
    const headers = {
      Authorization: localStorage.getItem("token"),
      // "Access-Control-Allow-Origin": "*",
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
