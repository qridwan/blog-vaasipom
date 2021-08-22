import {
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import { blue, grey, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import { OutlineButton } from "../../muiComponents/OutlineButton";

const useStyles = makeStyles({
  root: {
    width: "80%",
    textAlign: "center",
    margin: "0 auto",
    boxShadow: "none",
    "@media (max-width:800px)": {
        width: "100%"
      },
  },
  btn: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: "4em",
    color: grey[900],
    fontWeight: "bold",
    "@media (max-width:800px)": {
        fontSize: "2em",
      },
  },
  desc: {
    textAlign: "justify",
    fontSize: "2em",
    "@media (max-width:800px)": {
        fontSize: "1em",
      },
  },
  status: {
    fontSize: "8em",
    color: red[800],
    fontWeight: "bold",
    "@media (max-width:800px)": {
        fontSize: "3em",
      },
  },
});

const NotFound = () => {
  const classes = useStyles();
  return (
    <Container>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.status}>404</Typography>
          <Typography className={classes.title}>
            Look like you're lost!
          </Typography>
          <Typography className={classes.desc}>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </Typography>
        </CardContent>
        <CardActions className={classes.btn}>
          <NavLink to="/">
            <OutlineButton size="small">Back to Home</OutlineButton>
          </NavLink>
        </CardActions>
      </Card>
    </Container>
  );
};

export default NotFound;
