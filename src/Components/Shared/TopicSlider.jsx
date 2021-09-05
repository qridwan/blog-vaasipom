import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
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
    { key: 5, label: "Entertainment" },
    { key: 0, label: "Software" },
    { key: 1, label: "Books" },
    { key: 2, label: "Science" },
    { key: 3, label: "Sports" },
    { key: 4, label: "Technology" },
    { key: 5, label: "Entertainment" },
  ]);
  return (
    <Box my={3}>
      <Swiper
        slidesPerView={8}
        spaceBetween={1}
        freeMode={true}
        className=""
        navigation={true}
      >
        {topics.map((data) => (
          <SwiperSlide key={data.label}>
            <li className={"classes.buttons"}>
              <OutlineButton size="small">{data.label} +</OutlineButton>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default TopicSlider;
