import { makeStyles } from "@material-ui/core";

// navigation AppBar styling
export const NavigationStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      paddingTop: 12,
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
export const feedCardStyles = makeStyles((theme) => {
 return {root: {
    margin: "10px 0",
    boxShadow: "none",
    textAlign: "start",
    paddingBottom: "50px",
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
  btnAvatar: {
  display: "none",
   [theme.breakpoints.up("sm")]: {
    display: "block",
    marginRight: "20px"
  }
  }
}});

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

export const tableStyles = makeStyles({
  root: {
    width: "100%",
    boxShadow: "none",
  },
  container: {
    maxHeight: 540,
  },
  tableRow: {
    cursor: "pointer",
  },
  headCell: {
    background: "#F8F8F8",
    fontWeight: "600",
    fontSize: "15px",
    lineHeight: "22px",
    color: "#00000",
  },
  tableCell: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "22px",
    color: "#00000",
    border: "none",
  },
  button: {
    display: "block",
    padding: "15px 25px",
    width: "100%",
    textTransform: "capitalize",
  },
});
