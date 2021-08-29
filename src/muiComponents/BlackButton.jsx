import { Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/styles";

export const BlackButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(grey[900]),
    padding: "10px 35px",
    background: `linear-gradient(270deg, #000000 -2.29%, #323232 100%)`,
    boxShadow: `0px 14px 27px rgba(0, 0, 0, 0.3)`,
    borderRadius: "51px",
    textTransform: 'capitalize',
    "&:hover": {
      backgroundColor: grey[900],
    },
  },
}))(Button);
