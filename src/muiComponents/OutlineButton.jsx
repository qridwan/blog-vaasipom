import { Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/styles";

export const OutlineButton = withStyles(() => ({
  root: {
    color: grey[700],
    padding: (props) =>
      props.size === "small"
        ? "4px 15px"
        : props.size === "xsmall"
        ? "1px 8px"
        : "6px 20px",
    background: (props) =>
      props.size === "xsmall" ? "#E8E8E8" : `transparent`,
    boxShadow: `none`,
    fontSize: (props) => (props.size === "xsmall" ? "12px" : "16px"),
    borderRadius: "23px",
    textTransform: "capitalize",
    border: (props) =>
      props.size === "xsmall" ? "none" : `1px solid rgba(0, 0, 0, 0.1)`,
    boxSizing: `border-box`,
  },
}))(Button);

export const DarkButton = withStyles(() => ({
  root: {
    color: "white",
    padding: "5px 15px",
    background: `#000000`,
    boxShadow: `none`,
    fontSize: "16px",
    borderRadius: "23px",
    textTransform: "capitalize",
    border: `1px solid rgba(0, 0, 0, 0.1)`,
    boxSizing: `border-box`,
    "&:hover": {
      color: "white",
      background: `#000000`,
    },
  },
}))(Button);
