import { Avatar, Button, makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const MyButton = withStyles((theme) => ({
  root: {
    color: "#00000",
    background: "rgba(180, 180, 180, 0.11)",
    borderRadius: "26px",
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      padding: "5px 35px 5px 0",
    },
    "&:hover": {
      backgroundColor: "rgba(180, 180, 180, 0.31))",
    },
  },
}))(Button);

const authorButtonStyles = makeStyles((theme) => {
  return {
    btnAvatar: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
        marginRight: "20px",
      },
    },
  };
});
const AuthorButton = ({ authorName, authorImg }) => {
  const classes = authorButtonStyles();
  return (
    <MyButton>
      <Avatar alt="Author" src={authorImg} className={classes.btnAvatar} />
      {authorName}
    </MyButton>
  );
};

export default AuthorButton;
