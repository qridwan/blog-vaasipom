import {
  Avatar,
  Box,
  Card,
  CardHeader,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import AvatarImg from "../../Assets/img/avatar.png";
import { OutlineButton } from "../../muiComponents/OutlineButton";

const suggestionStyles = makeStyles((theme) => ({
  box: {
    margin: "20px 0",
    padding: "40px",
  },
  root: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    listStyle: "none",
    padding: "20px 0",
    margin: theme.spacing(1),
    boxShadow: "none",
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
  avatar: {
    // backgroundColor: red[500],
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
  buttons: {
    margin: theme.spacing(1),
  },
}));

const Suggestions = () => {
  const [follow, setFollow] = useState(false);
  const [authors, setAuthors] = useState([1,2,3,4,5]);
  const classes = suggestionStyles();
  const [lookingFor, setLookingFor] = useState([
    { key: 0, label: "Podcast" },
    { key: 1, label: "Short Stories" },
    { key: 2, label: "Articles" },
    { key: 3, label: "Poetries" },
    { key: 4, label: "Videocasts" },
    { key: 5, label: "Reviews" },
    { key: 6, label: "All" },
  ]);
  const [topics, setTopics] = useState([
    { key: 0, label: "Software" },
    { key: 1, label: "Books" },
    { key: 2, label: "Science" },
    { key: 3, label: "Sports" },
    { key: 4, label: "Technology" },
    { key: 5, label: "Entertainment" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    // setChipData((chips) =>
    //   chips.filter((chip) => chip.key !== chipToDelete.key)
    // );
  };
  const handleClick = () => {};
  const handleFollow = () => {
    setFollow(!follow);
  };

  return (
    <div>
      <Box className={classes.box}>
        {/*What Looking for */}
        <Typography className={classes.text}>
          What You’re Looking For
        </Typography>
        <Paper component="ul" className={classes.root}>
          {lookingFor.map((data) => {
            return (
              <li key={data.key} className={classes.buttons}>
                <OutlineButton onClick={handleClick}>
                  {data.label}
                </OutlineButton>
              </li>
            );
          })}
        </Paper>
      </Box>

      {/*Topic to follow */}
      <Box className={classes.box}>
        <Typography className={classes.text}>Topics To Follow </Typography>
        <Paper component="ul" className={classes.root}>
          {topics.map((data) => {
            const lastOne = topics.length - 1;
            return (
              <>
                <li key={data.key} className={classes.buttons}>
                  <OutlineButton onClick={handleClick}>
                    {data.label} +
                  </OutlineButton>
                </li>
                {data.key === lastOne && (
                  <li className={classes.buttons}>
                    <OutlineButton onClick={handleClick}>+</OutlineButton>
                  </li>
                )}
              </>
            );
          })}
        </Paper>
      </Box>

      {/*Authors to follow */}
      <Box className={classes.box}>
        <Typography className={classes.text}>Authors To Follow </Typography>
       {authors.map(author => <Card
       key={author}
       className={classes.card}>
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
            title={<Typography className={classes.title}>Jhon Doe</Typography>}
            subheader={
              <Typography className={classes.subheader}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                id magna massa. Ut vitae risus vehicula,
              </Typography>
            }
          />
        </Card> ) }
      </Box>
    </div>
  );
};

export default Suggestions;
