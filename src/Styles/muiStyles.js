import { alpha, makeStyles } from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";

// navigation AppBar styling
export const NavigationStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      paddingTop: 12,
    },
    appBar: {
      backgroundColor: "transparent",
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
    searchField: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
        marginRight: "10px",
        input: {
          text: "black",
        },
      },
    },
    search: {
      position: "relative",
      borderRadius: "25px",
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
    searchContainer: {
      display: "flex",
      border: `1px solid ${grey[300]}`,
      borderRadius: "5px",
      marginRight: 25,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.up("sm")]: {
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputInput: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
        width: "300px",
        padding: theme.spacing(1, 1, 1, 0),
      },
    },
    searchSuggestion: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 0",
      zIndex: "5000",
    },
    suggImg: {
      borderRadius: "10%",
      marginRight: "5px",
    },
    suggTitle: {
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "150%",
      color: "#121212",
    },
    suggSubTitle: {
      fontSize: "12px",
      lineHeight: "150%",
      color: "#6B6B6B",
    },
    listbox: {
      width: "35ch",
      margin: 0,
      marginLeft: "10px",
      padding: 5,
      zIndex: 1,
      position: "absolute",
      listStyle: "none",
      backgroundColor: theme.palette.background.paper,
      overflow: "auto",
      maxHeight: 200,
      border: "1px solid rgba(0,0,0,.25)",
      '& li[data-focus="true"]': {
        backgroundColor: "#4a8df6",
        color: "white",
        cursor: "pointer",
      },
      "& li:active": {
        backgroundColor: "#2977f5",
        color: "white",
      },
    },
  };
});

//landing page styling
export const feedCardStyles = makeStyles((theme) => {
  return {
    root: {
      margin: "5px 0",
      boxShadow: "none",
      textAlign: "start",
      paddingBottom: "20px",
    },
    media: {
      marginTop: "5%",
      width: "100%",
      height: "145px",
      backgroundSize: "130% 110%",
      backgroundPosition: "cover",
      borderRadius: "2px",
    },
    mainArea: {
      paddingBottom: "4px",
    },
    title: {
      fontWeight: "bold",
      fontSize: "22px",
      lineHeight: "135%",
      height: "58px",
      paddingBottom: "5px",

      color: "#121212",
      "@media (max-width:800px)": {
        fontSize: "18px",
        lineHeight: "110%",
      },
    },
    desc: {
      fontSize: "15px",
      lineHeight: "150%",
      paddingBottom: "8px",
      color: "#757575",
      "@media (max-width:800px)": {
        fontSize: "12px",
        lineHeight: "110%",
      },
    },
    authorBtn: {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: 0,
      paddingBottom: 2,
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

export const fullFeedStyles = makeStyles({
  root: {
    margin: "20px 0 0 0",
    boxShadow: "none",
    paddingBottom: "50px",
  },
  media: {
    width: "100%",
    height: "450px",
    backgroundSize: "100% 100%",
    backgroundPosition: "cover",
    borderRadius: "20px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "150%",
    padding: "25px 0",
    color: "#121212",
    "@media (max-width:800px)": {
      fontSize: "20px",
      lineHeight: "110%",
      padding: "10px 0",
    },
  },
  desc: {
    fontSize: "18px",
    lineHeight: "150%",
    padding: "15px 0",
    color: "#454545",
    whiteSpace: "pre-line",
    textAlign: "justify",
    "@media (max-width:800px)": {
      fontSize: "13px",
      lineHeight: "110%",
    },
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  likeBtn: {
    padding: "15px",
    marginBottom: "20px",
    backgroundColor: red[50],
    "&:hover": {
      backgroundColor: red[50],
    },
  },
  likeDesc: {
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "30px",
    color: "#000000",
  },
  text: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#000000",
    marginBottom: "20px",
  },
  playerWrapper: {
    position: "relative",
    margin: "2% 0 0 0",
    height: "380px",
    display: "block",
  },
  player: {
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
});

//Profile styling
export const profileStyles = makeStyles((theme) => {
  return {
    profileCard: {
      boxSizing: "border-box",
      position: "sticky",
      top: "0",
    },
    profile: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
    },
    name: {
      fontWeight: "800",
      fontSize: "35px",
      lineHeight: "67px",
      textAlign: "center",
      letterSpacing: "-0.02em",
      color: "#000000",
    },
    title: {
      fontWeight: "800",
      fontSize: "20px",
      lineHeight: "35px",
      textAlign: "center",
      letterSpacing: "-0.02em",
      color: "#000000",
    },
    follower: {
      fontWeight: "500",
      fontSize: "20px",
      textAlign: "center",
      letterSpacing: "-0.02em",
      color: "#000000",
    },
  };
});

export const landingPageStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  paper: {
    paddingTop: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  },
  left: {
    borderRight: "2px solid #EDEDED",
  },
  content: {
    marginTop: "-20px",
  },
  right: {
    boxSizing: "border-box",
    position: "sticky",
    top: "0",
  },
}));
const drawerWidth = 250;
export const dashboardStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    // backgroundColor: "#ffffff",
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
      // borderRadius: "50px 0 0 50px",
      margin: "0",
      display: "grid",
      placeItems: "center",
      "@media(max-width: 1000px)": {
        background: "transparent",
      },
    },
    img: {
      height: "100%",
      // width: "100%",
    },
    box: {
      width: "60%",
      margin: "0 auto",
      // paddingTop: "100px",
    },
    heading: {
      fontWeight: "bold",
      fontSize: "20px",
      lineHeight: "35px",
      letterSpacing: "0.08em",
      color: "#000000",
      paddingBottom: "30px",
    },
    btnText: {
      textTransform: "capitalize",
      marginLeft: "10px",
      wordWrap: `break-word`,
      whiteSpace: `nowrap`,
      fontSize: "16px",
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

export const suggestionStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    boxSizing: "border-box",
    position: "sticky",
    top: "0",
  },
  box: {
    margin: "25px 0 0 30px",
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
    fontSize: "16px",
    lineHeight: "20px",
    color: "#000000",
    marginBottom: "15px",
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
