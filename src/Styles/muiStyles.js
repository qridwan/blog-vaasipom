import { alpha, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

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
    button: {
      display: "block",
      padding: "15px 25px",
      width: "100%",
      textTransform: "capitalize",
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
  };
});

//landing page styling
export const feedCardStyles = makeStyles((theme) => {
  return {
    root: {
      margin: "10px 0",
      boxShadow: "none",
      textAlign: "start",
      paddingBottom: "50px",
    },
    media: {
      // height: "0",
      // paddingTop: '90.25%',
      // borderRadius: "20px",
      // backgroundPosition: "cover",
      width: "100%",
      height: "80%",
      backgroundSize: "130% 110%",
      backgroundPosition: "cover",
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
        marginRight: "20px",
      },
    },
  };
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

export const loginStyles = makeStyles((theme) => {
  return {
    root: {
      background: "#E5E5E5",
      margin: "0",
    },
    boxContainer: {
      background: "white",
      minHeight: "100vh",
      borderRadius: "50px 0 0 50px",
      margin: "0",
      display: "grid",
      placeItems: "center",
    },
    img: {
      height: "100%",
      // width: "100%",
    },
    box: {
      width: "50%",
      margin: "0 auto",
      // paddingTop: "100px",
    },
    heading: {
      fontWeight: "bold",
      fontSize: "24px",
      lineHeight: "35px",
      letterSpacing: "0.08em",
      color: "#000000",
      paddingBottom: "30px",
    },
    btnText: {
      textTransform: "capitalize",
      marginLeft: "10px",
      // fontWeight: "bold",
    },
    or: {
      margin: "15px 0",
      textAlign: "center",
      fontSize: "20px",
      lineHeight: "35px",
      letterSpacing: "0.08em",
      color: "#9EA9AB",
    },
    btn: {
      width: "100%",
      margin: "35px 0",
      letterSpacing: "0.2rem",
      boxShadow: "none",
    },
    instruction: {
      color: "rgba(158, 169, 171, 1)",
      letterSpacing: "0.1rem",
    },
    span: {
      textDecoration: "underline",
      paddingLeft: "4px",
      cursor: "pointer",
    },
    forgotPassword: {
      textAlign: "end",
      cursor: "pointer",
      margin: 0,
      padding: 0,
      letterSpacing: "0.08em",
      color: "#9EA9AB",
      fontFamily: "manrope",
    },
    otpInfo: {
      letterSpacing: "0.08em",
      color: "#9EA9AB",
      marginBottom: "20px",
    },
  };
});
