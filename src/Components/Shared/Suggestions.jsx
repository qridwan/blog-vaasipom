import { Container } from "@material-ui/core";
import {
  Avatar,
  Box,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AvatarImg from "../../Assets/img/avatar.png";
import { DarkButton, OutlineButton } from "../../muiComponents/OutlineButton";
import AuthorsToFollow from "./AuthorsToFollow";

const suggestionStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    boxSizing: "border-box",
    position: "sticky",
    top: "0",
  },
  box: {
    margin: "30px 0",
  },
  root: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    listStyle: "none",
    padding: "5px 0",
    margin: theme.spacing(1),
    boxShadow: "none",
  },
  card: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    textAlign: "start",
    margin: 0,
    boxShadow: "none",
  },
  avatar: {
    // backgroundColor: red[500],
  },
  text: {
    textAlign: "start",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#000000",
  },

  follow: {
    margin: 0,
    padding: "6px, 20px ",
    alignSelf: "center",
    "&:focus": {
      background: "#000000 !important",
      color: "white",
    },
  },
  unFollow: {
    margin: 0,
    padding: "6px, 20px",
    "&:focus": {
      background: "#ffffff !important",
    },
  },
  title: {
    color: "#00000",
    fontSize: "18px",
    fontWeight: "bold",
  },
  subheader: {
    fontSize: "12px",
    width: "90%",
    lineHeight: "150%",
    color: "#797979",
  },
  buttons: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Suggestions = () => {
  const location = useLocation();
  const classes = suggestionStyles();
  const { pathname } = location;
  const splitLocation = pathname.split("/")[1];

  const [lookingFor, setLookingFor] = useState([
    { key: 0, label: "Podcast" },
    { key: 1, label: "Short Stories" },
    { key: 2, label: "Articles" },
    { key: 3, label: "Poetries" },
    { key: 4, label: "Videocast" },
    { key: 5, label: "Reviews" },
    { key: 6, label: "All" },
  ]);
  const [topics, setTopics] = useState([
    { key: 0, label: "Software" },
    { key: 1, label: "Books" },
    { key: 2, label: "Science" },
    { key: 3, label: "Sports" },
    { key: 4, label: "Technology" },
    { key: 5, label: "Entertainment" },
  ]);

  const handleClick = () => {};

  return (
    <Container className={classes.container}>
      {/*What Looking for */}
      <Box className={classes.box}>
        <Typography className={classes.text}>
          What You’re Looking For
        </Typography>
        <Paper component="ul" className={classes.root}>
          {lookingFor.map((data) => {
            let page = data.label.toLowerCase();
            if (page === "all") {
              page = "";
            }
            return (
              <li key={data.key} className={classes.buttons}>
                <NavLink to={`/${page}`}>
                  {splitLocation === page ? (
                    <DarkButton onClick={handleClick}>{data.label}</DarkButton>
                  ) : (
                    <OutlineButton onClick={handleClick}>
                      {data.label}
                    </OutlineButton>
                  )}
                </NavLink>
              </li>
            );
          })}
        </Paper>
      </Box>

      {/*Topic to follow */}
      <Box className={classes.box}>
        <Typography className={classes.text}>Topics To Follow </Typography>
        <Paper component="ul" className={classes.root}>
          {topics.map((data) => {
            const lastOne = topics.length - 1;
            return (
              <>
                <li key={data.key} className={classes.buttons}>
                  <OutlineButton onClick={handleClick}>
                    {data.label} +
                  </OutlineButton>
                </li>
                {data.key === lastOne && (
                  <li className={classes.buttons}>
                    <OutlineButton onClick={handleClick}>+</OutlineButton>
                  </li>
                )}
              </>
            );
          })}
        </Paper>
      </Box>

      {/*Authors to follow */}
      <Box className={classes.box}>
        <Typography className={classes.text}>Authors To Follow </Typography>
        <AuthorsToFollow />
      </Box>
    </Container>
  );
};

export default Suggestions;
