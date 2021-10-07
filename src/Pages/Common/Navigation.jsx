import React, { Suspense, useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import VasipomLogo from "../../Assets/logos/VasipomLogo2.png";
import { AppBar, Box, InputBase, Toolbar } from "@material-ui/core";
import { NavigationStyles } from "../../Styles/muiStyles";
import { Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { DarkButton } from "../../muiComponents/OutlineButton";
import NavLoginPreference from "../../Components/Shared/NavLoginPreference";

const Navigation = ({ t }) => {
  const classes = NavigationStyles();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    localStorage.token ? setIsLogin(true) : setIsLogin(false);
  }, [isLogin]);

  return (
    <Suspense fallback="loading...">
      <Container maxWidth="lg">
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
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon style={{ color: "black" }} />
                </div>
                <InputBase
                  placeholder={t("search_input_placeholder")}
                  classes={{
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              {/* After Login  */}
              {!isLogin && (
                <NavLink to="/login">
                  <DarkButton>Sign In</DarkButton>
                </NavLink>
              )}
              {isLogin && <NavLoginPreference setIsLogin={setIsLogin} />}
            </Toolbar>
          </AppBar>{" "}
        </div>
      </Container>
    </Suspense>
  );
};
export default withTranslation()(Navigation);
