import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import { OutlineButton } from "../../muiComponents/OutlineButton";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Box } from "@material-ui/core";

SwiperCore.use([Navigation]);
const TopicSlider = () => {
  const [topics, setTopics] = useState([
    { key: 0, label: "Software" },
    { key: 1, label: "Books" },
    { key: 2, label: "Science" },
    { key: 3, label: "Sports" },
    { key: 4, label: "Technology" },
    { key: 5, label: "Entertainment" },
    { key: 0, label: "Software" },
    { key: 1, label: "Books" },
    { key: 2, label: "Science" },
    { key: 3, label: "Sports" },
    { key: 4, label: "Technology" },
    { key: 5, label: "Sports" },
    { key: 51, label: "Software" },
    { key: 23, label: "Books" },
    { key: 212, label: "Science" },
    { key: 31, label: "Sports" },
    { key: 14, label: "Technology" },
    { key: 512, label: "Entertainment" },
  ]);

  return (
    <Box my={3} mx={3}>
      <Swiper
        // freeMode={true}
        slidesPerView="auto"
        className=""
        navigation={true}
        // breakpoints={{
        //   1300: {
        //     slidesPerView: 10,
        //     // spaceBetween: 20,
        //   },
        //   1200: {
        //     slidesPerView: 10,
        //     // spaceBetween: 20,
        //   },
        //   1100: {
        //     slidesPerView: 6.5,
        //     // spaceBetween: 2,
        //   },
        //   1000: {
        //     slidesPerView: 6,
        //     spaceBetween: 2,
        //   },
        //   760: {
        //     slidesPerView: 5,
        //     spaceBetween: 2,
        //   },
        //   550: {
        //     slidesPerView: 4,
        //     spaceBetween: 1,
        //   },
        //   400: {
        //     slidesPerView: 3,
        //     spaceBetween: 1,
        //   },
        // }}
      >
        {topics.map((data, i) => (
          <SwiperSlide
            key={i}
            style={{ width: "min-content", margin: "15px" }}
          >
            <OutlineButton size="small">{data.label}+</OutlineButton>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default TopicSlider;
