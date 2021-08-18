import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Chip,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import AvatarImg from "../../Assets/img/avatar.png";

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
    margin: 0,
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
  chip: {
    margin: theme.spacing(0.5),
    "&:focus": {
      background: "#000000 !important",
      color: "white",
    },
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
}));

const Suggestions = () => {
  const [follow, setFollow] = useState(false);
  const classes = suggestionStyles();
  const [chipData, setChipData] = useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
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
          {chipData.map((data) => {
            return (
              <li key={data.key}>
                <Chip
                  variant="outlined"
                  label={data.label}
                  // onDelete={handleDelete(data)}
                  // deleteIcon={<AddIcon />}
                  onClick={handleClick}
                  className={classes.chip}
                />
              </li>
            );
          })}
        </Paper>
      </Box>

      {/*Topic to follow */}
      <Box className={classes.box}>
        <Typography className={classes.text}>Topics To Follow </Typography>
        <Paper component="ul" className={classes.root}>
          {chipData.map((data) => {
            return (
              <li key={data.key}>
                <Chip
                  variant="outlined"
                  label={data.label}
                  onDelete={handleDelete(data)}
                  deleteIcon={<AddIcon />}
                  onClick={handleClick}
                  h
                  className={classes.chip}
                />
              </li>
            );
          })}
        </Paper>
      </Box>

      {/*Authors to follow */}
      <Box className={classes.box}>
        <Typography className={classes.text}>Authors To Follow </Typography>
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
              <Chip
                className={follow ? classes.follow : classes.unFollow}
                label={follow ? "Unfollow" : "Follow"}
                onClick={handleFollow}
                variant="outlined"
              />
            }
            title={<Typography className={classes.title}>Jhon Doe</Typography>}
            subheader={
              <Typography className={classes.subheader}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                id magna massa. Ut vitae risus vehicula,
              </Typography>
            }
          />
        </Card>
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
              <Chip
                className={follow ? classes.follow : classes.unFollow}
                label={follow ? "Unfollow" : "Follow"}
                onClick={handleFollow}
                variant="outlined"
              />
            }
            title={<Typography className={classes.title}>Jhon Doe</Typography>}
            subheader={
              <Typography className={classes.subheader}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                id magna massa. Ut vitae risus vehicula,
              </Typography>
            }
          />
        </Card>
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
              <Chip
                className={follow ? classes.follow : classes.unFollow}
                label={follow ? "Unfollow" : "Follow"}
                onClick={handleFollow}
                variant="outlined"
              />
            }
            title={<Typography className={classes.title}>Jhon Doe</Typography>}
            subheader={
              <Typography className={classes.subheader}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                id magna massa. Ut vitae risus vehicula,
              </Typography>
            }
          />
        </Card>
      </Box>
    </div>
  );
};

export default Suggestions;
