import { Input, InputBase, InputLabel } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/styles";
// import {  } from "@mui/material";

export const InputArea = withStyles((theme) => ({
  root: {
    width: "100%",
    },
    input: {
    borderRadius: (props) => (props.border === "curve" ? 25 : 4),
    position: "relative",
    backgroundColor: (props) =>
      props.type === "comment" ? "transparent" : theme.palette.common.white,
    border: (props) =>
      props.type === "comment" ? "none" : "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "manrope",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderColor: grey[500],
      // borderBottom: "none",
    },
    // "&:hover": {
    //   // borderBottom: "none !important",
    // },
    // "&:after": {
    //   display: "none",
    // },
    // ".MuiInput-underline::after": {
    //   // display: "none",
    // },
    // ".MuiInput-underline::before": {
    //   display: "none",
    // },
  },
}))(InputBase);

export const CustomLabel = withStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "100%",
    fontSize: "16px !important",
    color: grey[800],
  },
}))(InputLabel);
