import { Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/styles";

export const OutlineButton = withStyles((theme) => ({
  root: {
    color: grey[800],
    padding: "5px 15px",
    background: `transparent`,
    boxShadow: `none`,
    fontSize: "16px",
    borderRadius: "23px",
    textTransform: "capitalize",
    border: `1px solid rgba(0, 0, 0, 0.1)`,
    boxSizing: `border-box`,
  },
}))(Button);
