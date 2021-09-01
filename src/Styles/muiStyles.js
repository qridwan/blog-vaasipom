import { makeStyles } from "@material-ui/core";

// navigation AppBar styling
export const NavigationStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      paddingTop: 12
    },
    appBar: {
      backgroundColor: "#ffffff",
      boxShadow: "none",
      // display: "flex",
    },
    menuBrand: {
      marginRight: "10px",
      cursor: "pointer",
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    offset: theme.mixins.toolbar,
    navIcon: {
      marginRight: "25px",

    },
  };
});

//landing page styling
export const feedCardStyles = makeStyles({
  root: {
    margin: "10px 0",
    boxShadow: "none",
    textAlign: "start",
    paddingBottom: "50px",
    // borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    // borderRight: "1px solid rgba(0, 0, 0, 0.1)",
  },
  media: {
    width: "100%",
    height: "260px",
    borderRadius: "20px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "150%",
    paddingBottom: "15px",
    color: "#121212",
    "@media (max-width:800px)": {
      fontSize: "20px",
      lineHeight: "110%",
    },
  },
  desc: {
    fontSize: "16px",
    lineHeight: "150%",
    paddingBottom: "15px",
    color: "#454545",
    "@media (max-width:800px)": {
      fontSize: "12px",
      lineHeight: "110%",
    },
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export const landingPageStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  },
  left: {},
  content: {},
  right: {
    boxSizing: "border-box",
    position: "sticky",
    top: "0",
  },
}));
