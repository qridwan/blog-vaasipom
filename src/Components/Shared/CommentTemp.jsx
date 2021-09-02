import {
  makeStyles,
  Avatar,
  Card,
  CardHeader,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Icon,
  IconButton,
  Box,
} from "@material-ui/core";
import React from "react";
import AvatarImg from "../../Assets/img/avatar.png";
import replayIcon from "../../Assets/icons/replyComment.png";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const commentTempStyles = makeStyles({
  name: {
    color: "#00000",
    fontSize: "18px",
    fontWeight: "bold",
  },
  comment: {
    fontSize: "12px",
    width: "90%",
    lineHeight: "150%",
    color: "#797979",
  },
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
});
const CommentTemp = ({ comments, web }) => {
  const classes = commentTempStyles();

  return (
    <>
      {comments.map((comment, i) => (
        <Grid key={i} item xs={12} sm={web}>
          <Card className={classes.card}>
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
                <Box>
                  <IconButton>
                    <img src={replayIcon} alt="" />
                  </IconButton>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name="checkedH"
                      />
                    }
                  />
                </Box>
              }
              title={<Typography className={classes.name}>Jhon Doe</Typography>}
              subheader={
                <Typography className={classes.comment}>
                  Lorem ipsum dolor sit amet, consec adipiscing elit.
                </Typography>
              }
            />
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default CommentTemp;
