import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Container, IconButton } from "@material-ui/core";
import SearchField from "../../Components/Shared/SearchField";
import VasipomLogo from "../../Assets/logos/whiteBrandLogo.png";
import settingIcon from "../../Assets/icons/settings.svg";
import readingIcon from "../../Assets/icons/readingIcon.svg";
import writingIcon from "../../Assets/icons/writingIcon.svg";
import { NavLink } from "react-router-dom";
import { grey } from "@material-ui/core/colors";
import { BlackButton } from "../../muiComponents/BlackButton";
import MenuModal from "../../Components/Dashboard/MenuModal";
import Novel from "../../Components/Dashboard/Writing/Novel";
import MediaCast from "../../Components/Dashboard/Writing/MediaCast";
import EditProfile from "../../Components/Dashboard/ProfileSettings/EditProfile";
import Reading from "../../Components/Dashboard/Reading/Reading";
import DashboardTable from "../../Components/Dashboard/DashboardTable.jsx";
import NavLoginPreference from "../../Components/Shared/NavLoginPreference";
import { setPage, setWriting } from "../../redux/actions/dashboardAction";
import { connect } from "react-redux";
import WritePost from "../../Components/Dashboard/Writing/WritePost";
import { withTranslation } from "react-i18next";
import { dashboardStyle } from "../../Styles/muiStyles";

const Dashboard = (props) => {
  const { window } = props;
  const { dashboardState, setPage, setWrite, t } = props;
  const { page, writing } = dashboardState;
  const classes = dashboardStyle();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  // READING PART-------------
  // const [lookingFor] = useState([
  //   { key: 1, label: "All", trans_label: "reading_nav_all" },
  //   { key: 2, label: "Bookmarked", trans_label: "reading_nav_bookmarked" },
  //   { key: 3, label: "Liked", trans_label: "reading_nav_liked" },
  // ]);
  // const [reading, setReading] = useState("All");

  useEffect(() => {
    page === "" && setPage("Writing");
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawerData = [
    {
      item: "Writing",
      trans_label: "dashboard_sidebar_writing",
      icon: writingIcon,
    },
    // READING PART
    // {
    //   item: "Reading",
    //   trans_label: "dashboard_sidebar_reading",
    //   icon: readingIcon,
    // },
    {
      item: "Settings",
      trans_label: "dashboard_sidebar_settings",
      icon: settingIcon,
    },
  ];
  const drawer = (
    <div>
      <NavLink to={`/`}>
        <div className={classes.brandLogo}>
          <img src={VasipomLogo} alt="brandLogo" height="70px" width="200px" />
        </div>
      </NavLink>
      <List>
        {drawerData.map((obj, index) => {
          return (
            <ListItem
              onClick={() => setPage(`${obj.item}`)}
              className={
                page === obj.item ? classes.listItemSelected : classes.listItem
              }
              key={obj.item}
            >
              <ListItemIcon>
                <img src={obj.icon} alt="" />
              </ListItemIcon>
              <ListItemText
                className={classes.listItemText}
                primary={t(`${obj.trans_label}`)}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  // Reading PART---------------
  // const handleReadingNav = (page, event) => {
  //   console.log(page, event);
  //   setReading(page);
  // };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  console.log({ page, writing });

  return (
    <Container maxWidth="xl" className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="white">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Toolbar>
          {/* READING PART */}
          {/* {page === "Reading" && (
            <div className={classes.readingNav}>
              {lookingFor.map((data) => {
                let page = data.label;
                return (
                  <Typography
                    onClick={(e) => handleReadingNav(data.label, e)}
                    className={
                      reading === page ? classes.darkNavTitle : classes.navTitle
                    }
                    noWrap
                  >
                    {t(`${data.trans_label}`)}
                  </Typography>
                );
              })}
            </div>
          )} */}
          <Box display="flex" alignItems="center" flexGrow="1"></Box>
          <div className={classes.searchField}>
            <SearchField />
          </div>

          <Box>
            <NavLoginPreference type={"dashboard"} />
          </Box>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* Top Title */}
        {(page === "Writing" || page === "Settings") && (
          <Box display="flex" justifyContent="space-between" alignItems="start">
            {page === "Writing" && writing === null ? (
              <>
                <Typography
                  className={classes.title}
                  style={{ paddingBottom: "40px" }}
                >
                  {t("your_publishes_title")}
                </Typography>
                <BlackButton
                  style={{ marginRight: "35px" }}
                  onClick={handleOpen}
                >
                  {t("dashboard_publish_btn")}
                </BlackButton>
              </>
            ) : (
              page === "Writing" && (
                <Container maxWidth="md">
                  <Typography className={classes.title}>
                    {t(`write_headings`) + " "}
                    {writing === "story"
                      ? t("nav_novel")
                      : t(`dash_modal_${writing}`)}
                  </Typography>
                </Container>
              )
            )}
            {page === "Settings" && (
              <Container maxWidth="xl">
                <Typography className={classes.title}>
                  {t(`settings_heading`)}
                </Typography>
                <EditProfile />
              </Container>
            )}
          </Box>
        )}
        {/* Writing Intro */}
        {page === "Writing" && writing === null && (
          <section>
            <DashboardTable />
            <MenuModal
              open={open}
              handleClose={handleClose}
              setWrite={setWrite}
            />
          </section>
        )}

        {/* Article Writing */}
        {((page === "Writing" && writing === "article") ||
          (page === "Writing" && writing === "poetry") ||
          (page === "Writing" && writing === "review")) && (
          <WritePost type={writing} />
        )}

        {/* Novel Writing */}
        {page === "Writing" && writing === "story" && <Novel />}

        {/* Podcast || Videocast Writing */}
        {((page === "Writing" && writing === "podcast") ||
          (page === "Writing" && writing === "videocast")) && (
          <MediaCast type={writing} />
        )}

        {/* Reading Section */}
        {/* {page === "Reading" && <Reading />} */}
      </main>
    </Container>
  );
};

const transDashboard = withTranslation()(Dashboard);
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setPage: setPage,
  setWrite: setWriting,
};
export default connect(mapStateToProps, mapDispatchToProps)(transDashboard);
