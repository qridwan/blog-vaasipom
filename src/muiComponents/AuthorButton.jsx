import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const AuthorButton = withStyles(() => ({
  root: {
    color: "#00000",
    padding: "6px 20px",
    background: "rgba(180, 180, 180, 0.11)",
    borderRadius: "26px",
    textTransform: 'capitalize',
    "&:hover": {
      backgroundColor: "rgba(180, 180, 180, 0.31))",
    },
  },
}))(Button);
