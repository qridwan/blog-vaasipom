import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const AuthorButton = withStyles(() => ({
  root: {
    color: "#FF0000",
    padding: "6px 20px",
    background: "rgba(255, 0, 0, 0.11)",
    borderRadius: "26px",
    textTransform: 'capitalize',
    "&:hover": {
      backgroundColor: "rgba(255, 0, 0, 0.31)",
    },
  },
}))(Button);
