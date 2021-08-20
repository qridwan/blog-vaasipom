import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import Img from '../../Assets/img/sliderTrend.png';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import BookmarkIcon from '@material-ui/icons/Bookmark';
const sliderStyles = makeStyles(() => {
  return {
    root: {
      boxShadow: "none",
      margin: "40px 0",
    },
    title: {
      fontWeight: "bold",
      fontSize: "25px",
      lineHeight: "31px",
      color: "#000000",
    },
    card: {
      maxWidth: 245,
      boxShadow: "none",
      padding: "0px",
      cursor: "pointer",
      "&:hover": {
          backgroundColor: "transparent"
      },
      "&:focus": {
          backgroundColor: "transparent"
      }
    },
    media: {
      height: 200,
      borderRadius: "25px",
      position: "relative",
    },
    icon: {
      position: "absolute",
      top: "10px",
      right: "15px",
      color: "white",
    },
    cardTitle: {
      fontWeight: "bold",
      fontSize: "20px",
      lineHeight: "26px",
      color: "#000000",
      alignItems: "start",
      padding: "25px 0 10px 0",
    },
    sliderBox: {
      marginTop: "40px",
    },
    cardAuthor: {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#454545",
    },
  };
});

// install Swiper modules
SwiperCore.use([Pagination]);
const PodcastSlider = () => {
  const classes = sliderStyles();
  const [slider, setSlider] = useState([1, 2, 3, 4, 5]);
  return (
    <div className={classes.root}>
      <Box className={classes.sliderBox}>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={30}
          freeMode={true}
          className=""
        >
          {slider.map((numb) => (
            <SwiperSlide key={numb}>
              <Card className={classes.card}>
                
                  <CardMedia
                    className={classes.media}
                    image={Img}
                    title="Contemplative Reptile"
                  />
                  <BookmarkIcon className={classes.icon}/>
                  <CardContent style={{ padding: "0" }}>
                    <Typography gutterBottom className={classes.cardTitle}>
                      TED Talks Daily
                    </Typography>
                    <Typography className={classes.cardAuthor}>
                      Krishnamurthy
                    </Typography>
                  </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default PodcastSlider;
