import React from "react";
import VasipomLogo from "../Assets/logos/VasipomLogo2.png";
import { AppBar, Toolbar } from "@material-ui/core";
import { NavigationStyles } from "../muiStyles/muiStyles";
import { Container } from "@material-ui/core";


const Navigation = () => {
  const classes = NavigationStyles();
  console.log("🚀 ~ file: Navigation.jsx ~ line 9 ~ Navigation ~ classes", classes)
  return (
    <Container>
      <AppBar className={classes.appBar} position="static">
        <div className={classes.root}>
        <Toolbar>
          <div className={classes.menuBrand}>
            <img
              src={VasipomLogo}
              alt="brandLogo"
              className=""
              height="60px"
              width="180px"
            />
          </div>
        </Toolbar>
        </div>
      </AppBar>
      {/* <div className={classes.offset} /> */}
    </Container>
  );
};

export default Navigation;
