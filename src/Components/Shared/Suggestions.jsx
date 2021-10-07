import { Container, Divider } from "@material-ui/core";
import { Box, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import i18next from "i18next";
import React, { Fragment, useEffect, useState } from "react";
import { BaseUrl } from "../../BaseUrl.config";
import { OutlineButton } from "../../muiComponents/OutlineButton";
import { suggestionStyles } from "../../Styles/muiStyles";
import Footer from "./Footer";

const Suggestions = () => {
  const classes = suggestionStyles();
  const [topics, setTopics] = useState(false);
  const [isAddTopic, setIsAddTopic] = useState(false);
  const [showTopics, setShowTopics] = useState([]);

  const headers = {
    Authorization: localStorage.getItem("token"),
  };

  const getMyTopics = (allTopics) => {
    axios
      .get(BaseUrl + `/topic/interests`, { headers })
      .then((res) => {
        // setMyTopics(res.data);
        for (let i = 0; i < res.data.length; i++) {
          const myTopicId = res.data[i].interestId;
          for (let j = 0; j < allTopics.length; j++) {
            const suggTopicId = allTopics[j].interestId;
            if (myTopicId === suggTopicId) {
              allTopics.splice(j, 1);
            }
          }
        }
        setShowTopics(allTopics.slice(0, 5));
      })
      .catch((err) => console.error(err));
  };

  const addTopicOfInterest = (topic) => {
    console.log(
      "--Add topics--",
      BaseUrl + `/topic/interest?topic=${topic}`,
      {},
      { headers }
    );
    axios
      .post(BaseUrl + `/topic/interest?topic=${topic}`, {}, { headers })
      .then((response) => {
        setIsAddTopic(true);
        alert(`${topic} Added as your interest`);
      })
      .catch((error) => {
        alert(`${topic} failed`);
        console.error(error);
      });
  };

  const handleShowTopics = () => {
    console.log({ topics, showTopics });
    const newTopics = [
      ...showTopics,
      ...topics?.slice(showTopics.length, showTopics.length + 5),
    ];
    console.log("🚀 ~ handleShowTopics ~ newTopics", newTopics);
    setShowTopics(newTopics);
  };

  useEffect(() => {
    localStorage.token
      ? axios
          .get(BaseUrl + `/interests?`, { headers })
          .then((res) => {
            setTopics(res.data);
            getMyTopics(res.data);
            // setShowTopics(res.data.slice(0, 5));
          })
          .catch((err) => console.error(err))
      : axios
          .get(BaseUrl + `/auth/interests?`, { headers })
          .then((res) => {
            setTopics(res.data);
            setShowTopics(res.data.slice(0, 5));
          })
          .catch((err) => console.error(err));

    // return () => setIsAddTopic(false);
  }, [isAddTopic]);
  return (
    <Container className={classes.container}>
      {/* What Looking for
      <Box className={classes.box}>
        <Typography className={classes.text}>
          What You’re Looking For
        </Typography>
        <Paper component="ul" className={classes.root}>
          {lookingFor.map((data) => {
            let page = data.label.toLowerCase();
            if (page === "all") {
              page = "";
            }
            return (
              <li key={data.key} className={classes.buttons}>
                <NavLink to={`/${page}`}>
                  {splitLocation === page ? (
                    <DarkButton onClick={handleClick}>{data.label}</DarkButton>
                  ) : (
                    <OutlineButton onClick={handleClick}>
                      {data.label}
                    </OutlineButton>
                  )}
                </NavLink>
              </li>
            );
          })}
        </Paper>
      </Box> */}

      {/*Topic to follow */}
      <Box className={classes.box}>
        <Typography className={classes.text}>
          {i18next.t(`topics_to_follow`)}
        </Typography>
        <Paper component="ul" className={classes.root}>
          {topics &&
            showTopics.map((data, index) => {
              return (
                <Fragment key={data.interestId}>
                  <li className={classes.buttons}>
                    <OutlineButton
                      onClick={() => addTopicOfInterest(data.interestId)}
                      size="small"
                    >
                      {data.interestName} +
                    </OutlineButton>
                  </li>
                  {index === showTopics.length - 1 && (
                    <li className={classes.buttons}>
                      <OutlineButton size="small" onClick={handleShowTopics}>
                        +
                      </OutlineButton>
                    </li>
                  )}
                </Fragment>
              );
            })}
        </Paper>
      </Box>

      {/*Authors to follow */}
      {/* <Box className={classes.box}>
        <Typography className={classes.text}>Authors To Follow </Typography>
        <AuthorsToFollow />
      </Box> */}
      <Divider />
      <Footer />
    </Container>
  );
};

export default Suggestions;
