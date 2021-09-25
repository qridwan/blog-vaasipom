import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
// import SearchIcon from "@material-ui/icons/Search";
import { grey } from "@material-ui/core/colors";
import { NavLink, useRouteMatch } from "react-router-dom";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none",
  },
  leftItems: {
    flexGrow: 1,
    borderBottom: "2px solid #EDEDED",
  },
  toolArea: {
    height: "40px",
  },
  title: {
    display: "none",
    color: "#767676",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    padding: 0,
    margin: 0,
    marginBottom: -2,
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
    },
  },
  darkTitle: {
    display: "none",
    color: "#000000",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    padding: 0,
    marginBottom: -5.5,
    borderBottom: "3px solid #121212",
    marginRight: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
    },
  },
  titleSpan: {
    color: "#aba7a7",
    fontSize: "14px",
    marginLeft: "5px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${grey[300]}`,
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const SubNavigation = () => {
  const classes = useStyles();
  const [lookingFor] = useState([
    { key: 6, label: "All" },
    { key: 0, label: "Podcast", count: 323 },
    { key: 4, label: "Videocast", count: 553 },
    { key: 1, label: "Short Stories", count: 23 },
    { key: 2, label: "Articles", count: 131 },
    { key: 3, label: "Poetries", count: 432 },
    { key: 5, label: "Reviews", count: 565 },
  ]);
  let { path } = useRouteMatch();
  console.log(
    "🚀 ~ file: SubNavigation.jsx ~ line 90 ~ SubNavigation ~ path",
    path
  );
  return (
    <Container maxWidth="xl">
      <div className={classes.root}>
        <AppBar className={classes.appBar} color="transparent" position="static">
          <Toolbar className={classes.toolArea}>
            <div className={classes.leftItems}>
              {lookingFor.map((data) => {
                let page = "/" + data.label.toLowerCase();
                if (page === "/all") {
                  page = "/";
                }
                return (
                  <NavLink to={page} key={data.label}>
                    <Typography
                      className={
                        path === page ? classes.darkTitle : classes.title
                      }
                      noWrap
                    >
                      {data.label}
                      {/* {data.count && (
                        <span className={classes.titleSpan}>{data.count}</span>
                      )} */}
                    </Typography>
                  </NavLink>
                );
              })}
            </div>

            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search something here…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div> */}
          </Toolbar>
        </AppBar>
      </div>
    </Container>
  );
};

export default SubNavigation;
