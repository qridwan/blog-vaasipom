import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import User from "../../Assets/img/user.png";
import NotifyIcon from "../../Assets/icons/notification.png";
import WriteIcon from "../../Assets/icons/writing.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Box, Container, IconButton } from "@material-ui/core";
import SearchField from "../../Components/Shared/SearchField";
import VasipomLogo from "../../Assets/logos/whiteBrandLogo.png";
import settingIcon from "../../Assets/icons/settings.svg";
import readingIcon from "../../Assets/icons/readingIcon.svg";
import writingIcon from "../../Assets/icons/writingIcon.svg";
import { NavLink } from "react-router-dom";
import { grey } from "@material-ui/core/colors";
import { BlackButton } from "../../muiComponents/BlackButton";
import MenuModal from "../../Components/Dashboard/MenuModal";
import Article from "../../Components/Dashboard/Writing/Article";
import Novel from "../../Components/Dashboard/Writing/Novel";
import MediaCast from "../../Components/Dashboard/Writing/MediaCast";
import EditProfile from "../../Components/Dashboard/ProfileSettings/EditProfile";
import Reading from "../../Components/Dashboard/Reading/Reading";
import DashboardTable from "../../Components/Dashboard/DashboardTable.jsx";
import NavLoginPreference from "../../Components/Shared/NavLoginPreference";
import { setPage, setWriting } from "../../redux/actions/dashboardAction";
import { connect } from "react-redux";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#ffffff",
  },
  brandLogo: {
    textAlign: "center",
    padding: "20px 0",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth / 2,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      paddingRight: drawerWidth / 2,
      padding: drawerWidth / 20,
      boxShadow: "none",
    },
  },
  searchField: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  listItem: {
    padding: "20px 30px",
    cursor: "pointer",
  },
  listItemSelected: {
    padding: "20px 30px",
    cursor: "pointer",
    backgroundColor: grey[900],
  },
  listItemText: {
    fontWeight: "500",
    fontSize: "23.1689px",
    lineHeight: "32px",
    color: "#E5E5E5",
  },
  // necessary for content to be below app bar
  toolbar: {
    minHeight: "100px",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  content: {
    flexGrow: 1,
    padding: "30px 0 40px 0",
    marginLeft: "150px",
    backgroundColor: "#ffffff",
    overflowX: "auto",
  },
  navIcon: {
    marginLeft: "15px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "26px",
    lineHeight: "150%",
    color: "#121212",
  },
  readingNav: {
    flexGrow: 1,
  },
  navTitle: {
    display: "none",
    color: "#767676",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
    },
  },
  darkNavTitle: {
    display: "none",
    color: "#000000",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    borderBottom: "1px solid rgba(0, 0, 0, 0.31)",
    marginRight: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
    },
  },
  navTitleSpan: {
    color: "#aba7a7",
    fontSize: "14px",
    marginLeft: "5px",
  },
}));

const Dashboard = (props) => {
  const { window } = props;
  const { dashboardState, setPage, setWrite } = props;
  const { page, writing } = dashboardState;
  console.log("🚀 ~ Dashboard --", { page, writing });
  const classes = useStyles();
  const theme = useTheme();
  const [lookingFor] = useState([
    { key: 1, label: "All", count: 553 },
    { key: 2, label: "Bookmarked", count: 323 },
    { key: 3, label: "Liked", count: 53 },
  ]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reading, setReading] = useState("All");
  const [open, setOpen] = useState(false);

  const [isLogin, setIsLogin] = useState(false);
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
      icon: writingIcon,
    },
    {
      item: "Reading",
      icon: readingIcon,
    },
    {
      item: "Settings",
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
                primary={obj.item}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
  const handleReadingNav = (page, event) => {
    console.log(page, event);
    setReading(page);
  };
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
          {page === "Reading" && (
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
                    {data.label}
                    {data.count && (
                      <span className={classes.navTitleSpan}>{data.count}</span>
                    )}
                  </Typography>
                );
              })}
            </div>
          )}
          <Box display="flex" alignItems="center" flexGrow="1"></Box>

          <div className={classes.searchField}>
            <SearchField />
          </div>

          <Box>
            <NavLoginPreference setIsLogin={setIsLogin} type={"dashboard"} />
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
              keepMounted: true, // Better open performance on mobile.
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
                  Your Publishes
                </Typography>
                <BlackButton
                  style={{ marginRight: "35px" }}
                  onClick={handleOpen}
                >
                  Publish
                </BlackButton>
              </>
            ) : (
              page === "Writing" && (
                <Container maxWidth="md">
                  <Typography className={classes.title}>
                    Write Your {writing === "Short Story" ? "Novel" : writing}
                  </Typography>
                </Container>
              )
            )}
            {page === "Settings" && (
              <Container maxWidth="xl">
                <Typography className={classes.title}>
                  Edit Your Profile
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
        {((page === "Writing" && writing === "Article") ||
          (page === "Writing" && writing === "Poetry") ||
          (page === "Writing" && writing === "Reviews")) && (
          <Article type={writing} />
        )}

        {/* Novel Writing */}
        {page === "Writing" && writing === "Short Story" && <Novel />}

        {/* Podcast || Videocast Writing */}
        {((page === "Writing" && writing === "Podcast") ||
          (page === "Writing" && writing === "Videocast")) && (
          <MediaCast type={writing} />
        )}
        {/* Reading Section */}
        {page === "Reading" && <Reading />}
      </main>
    </Container>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setPage: setPage,
  setWrite: setWriting,
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
