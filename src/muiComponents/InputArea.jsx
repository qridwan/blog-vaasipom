import { alpha, InputBase, InputLabel } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/styles";

export const InputArea = withStyles((theme) => ({
  root: {
   
      width: "100%",
  
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
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
      //   boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: grey[500],
    },
  },
}))(InputBase);

export const CustomLabel = withStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    width: "100%",
    fontSize: "16px !important"
  },
}))(InputLabel);