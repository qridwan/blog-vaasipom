import {
  Avatar,
  makeStyles,
  Box,
  Card,
  CardHeader,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";
import { OutlineButton } from "../../muiComponents/OutlineButton";
import AvatarImg from "../../Assets/img/avatar.png";

const authorsToFollow = makeStyles({
  card: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    textAlign: "start",
    margin: 0,
    boxShadow: "none",
  },
  text: {
    textAlign: "start",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#000000",
  },

  follow: {
    margin: 0,
    padding: "6px, 20px ",
    alignSelf: "center",
    "&:focus": {
      background: "#000000 !important",
      color: "white",
    },
  },
  unFollow: {
    margin: 0,
    padding: "6px, 20px",
    "&:focus": {
      background: "#ffffff !important",
    },
  },
  title: {
    color: "#00000",
    fontSize: "18px",
    fontWeight: "bold",
  },
  subheader: {
    fontSize: "12px",
    width: "90%",
    lineHeight: "150%",
    color: "#797979",
  },
});
const AuthorsToFollow = ({ width }) => {
  const [follow, setFollow] = useState(false);
  const [authors, setAuthors] = useState([1, 2, 3, 4, 5]);
  const classes = authorsToFollow();

  const handleFollow = () => {
    setFollow(!follow);
  };
  let ratio = 12;
  if (width === "half") {
    ratio = 6;
  }
  return (
    <>
      {authors.map((author) => (
        <Grid item xs={12} sm={ratio}>
          <Card key={author} className={classes.card}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                  src={AvatarImg}
                  alt="Author Name"
                />
              }
              action={
                <>
                  <OutlineButton
                    className={follow ? classes.follow : classes.unFollow}
                    onClick={handleFollow}
                  >
                    {follow ? "Unfollow" : "Follow"}
                  </OutlineButton>
                </>
              }
              title={
                <Typography className={classes.title}>Jhon Doe</Typography>
              }
              subheader={
                <Typography className={classes.subheader}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  id magna massa. Ut vitae risus vehicula,
                </Typography>
              }
            />
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default AuthorsToFollow;
