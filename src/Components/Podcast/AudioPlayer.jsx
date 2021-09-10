import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import styles from "../../Styles/AudioPlayer.module.css";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Fab,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import volume from "../../Assets/icons/volume.svg";
import lyricsIco from "../../Assets/icons/lyrics.svg";
import NextIco from "../../Assets/icons/Next.svg";
import PrevIco from "../../Assets/icons/Prev.svg";
import ShuffleIco from "../../Assets/icons/shuffle.svg";
import PlayListIco from "../../Assets/icons/playlist.svg";
import PodcastCover from "../../Assets/img/sliderTrend.png";
import StopIcon from "@material-ui/icons/Stop";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    height: "auto",
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
  },
  fab: {
    backgroundColor: "#000000 !important",
    color: "#ffffff",
  },
  playerIcon: {
    margin: "0 30px",
    padding: "0 20px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 20px 12px 20px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    margin: "0",
    padding: "0",
    boxShadow: "none",
  },
  cardMedia: {
    height: "80px",
    width: "80px",
  },
  title: {
    color: "#00000",
    fontSize: "18px",
    fontWeight: "bold",
    paddingBottom: "10px",
  },
  subheader: {
    fontSize: "12px",
    width: "90%",
    lineHeight: "150%",
    color: "#797979",
  },
}));

const AudioPlayer = ({ setIsAudioPlay }) => {
  const classes = useStyles();
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // references
  const audioPlayer = useRef(); // ref audio component
  const progressBar = useRef(); // ref progress bar
  const stopPlayer = useRef(); // ref progress bar
  const animationRef = useRef(); // ref animation
  const playPauseBtnRef = useRef(); // ref Play/Pause button

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    !isPlaying && playPauseBtnRef.current.click();
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    if (progressBar.current) {
      progressBar.current.value = audioPlayer?.current?.currentTime;
      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 10);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 10);
    changeRange();
  };
  return (
    <>
      <audio
        ref={audioPlayer}
        src="https://www.drivehq.com/file/df.aspx/shareID46394/fileID873141/011 Eagles - Hotel California.mp3"
        preload="metadata"
      ></audio>
      <AppBar
        position="fixed"
        color="white"
        alignItems="center"
        className={classes.appBar}
      >
        <input
          type="range"
          className={styles.progressBar}
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
        <Toolbar className={classes.toolbar}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={PodcastCover}
              title="podcast cover"
            />
            <CardContent className={classes.cardContent}>
              <Typography className={classes.title}>TED Talks Daily</Typography>
              <Typography className={classes.subheader}>
                TED Talks Daily
              </Typography>
            </CardContent>
          </Card>
          <Box className={classes.fabButton}>
            <IconButton className={classes.playerIcon}>
              <img src={ShuffleIco} alt="" />
            </IconButton>
            <IconButton className={classes.playerIcon} onClick={backThirty}>
              <img src={PrevIco} alt="" />
            </IconButton>
            <Fab
              ref={playPauseBtnRef}
              onClick={togglePlayPause}
              className={classes.fab}
              aria-label="add"
            >
              {isPlaying ? (
                <PauseIcon />
              ) : (
                <PlayArrowIcon className={styles.play} />
              )}
            </Fab>
            <IconButton className={classes.playerIcon} onClick={forwardThirty}>
              <img src={NextIco} alt="" />
            </IconButton>
            <IconButton className={classes.playerIcon}>
              <img src={PlayListIco} alt="" />
            </IconButton>
          </Box>
          <Box className={classes.leftItems}>
            <IconButton
              color="inherit"
              ref={stopPlayer}
              onClick={() => setIsAudioPlay(false)}
            >
              <StopIcon color="error" />
            </IconButton>
            <IconButton color="inherit">
              <img src={volume} alt="" />
            </IconButton>
            <IconButton style={{ margin: "0 10px" }} color="inherit">
              <img src={lyricsIco} alt="" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AudioPlayer;
