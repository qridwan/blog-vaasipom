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
import { Avatar, Box, Button, IconButton } from "@material-ui/core";
import SearchField from "../../Components/Shared/SearchField";
import VasipomLogo from "../../Assets/logos/whiteBrandLogo.png";
import settingIcon from "../../Assets/icons/settings.svg";
import readingIcon from "../../Assets/icons/readingIcon.svg";
import writingIcon from "../../Assets/icons/writingIcon.svg";
import { NavLink } from "react-router-dom";
import { grey, red } from "@material-ui/core/colors";
import DashboardTable from "../../Components/Dashboard/Table";
import { SignInButton } from "../../muiComponents/SignInButton";
import MenuModal from "../../Components/Dashboard/MenuModal";
import { blue } from "@material-ui/core/colors";
import Article from "../../Components/Dashboard/Writing/Article";

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
      width: drawerWidth / 6,
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
    minHeight: "70px",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  content: {
    flexGrow: 1,
    padding: "0px",
    marginLeft: "150px",
    backgroundColor: "#ffffff",
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
}));

const Dashboard = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState("Writing");
  const [write, setWrite] = useState(null);
  const [open, setOpen] = useState(false);

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

  const container =
    window !== undefined ? () => window().document.body : undefined;
  console.log({ page, write });
  return (
    <div className={classes.root}>
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
          <Box display="flex" alignItems="center" flexGrow="1"></Box>

          <div className={classes.searchField}>
            <SearchField />
          </div>

          <Box>
            <IconButton
              onClick={() => {
                setPage(`Writing`);
                setWrite(null);
              }}
              className={classes.navIcon}
            >
              <img src={WriteIcon} alt="" />
            </IconButton>
            <IconButton className={classes.navIcon}>
              <img src={NotifyIcon} alt="" />
            </IconButton>

            <IconButton className={classes.navIcon}>
              <Avatar src={User} alt="User" />
            </IconButton>
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
        {page === "Writing" && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={4}
          >
            {page === "Writing" && write === null ? (
              <>
                <Typography className={classes.title}>
                  Your Publishes
                </Typography>
                <SignInButton onClick={handleOpen}>Publish</SignInButton>
              </>
            ) : (
              <>
                <Typography className={classes.title}>
                  Write Your {write}
                </Typography>
              </>
            )}
          </Box>
        )}
        {/* Writing Intro */}
        {page === "Writing" && write === null && (
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
        {page === "Writing" && write === "Article" && (
          <section>
            <Article />
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
