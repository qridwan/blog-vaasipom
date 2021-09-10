import { Avatar, Button, makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";

const MyButton = withStyles((theme) => ({
  root: {
    color: "#00000",
    background: "transparent",
    borderRadius: "26px",
    textTransform: "capitalize",
    display: "flex",
    fontWeight: "600",
    [theme.breakpoints.up("sm")]: {
      padding: "0",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}))(Button);

const authorButtonStyles = makeStyles((theme) => {
  return {
    btnAvatar: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
        marginRight: "10px",
        height: "20px",
        width: "20px",
        fontSize: "10px"
      },
    },
  };
});
const AuthorButton = ({ authorName, authorImg }) => {
  const classes = authorButtonStyles();
  return (
    <NavLink to="/profile">
      <MyButton>
        <Avatar alt="Author" src={authorImg} className={classes.btnAvatar} />
        {authorName}
      </MyButton>
    </NavLink>
  );
};

export default AuthorButton;
