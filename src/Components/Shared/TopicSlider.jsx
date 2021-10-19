import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import { OutlineButton } from "../../muiComponents/OutlineButton";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Box, Container } from "@material-ui/core";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl.config";
import { NavLink } from "react-router-dom";

SwiperCore.use([Navigation]);
const TopicSlider = () => {
  const [topics, setTopics] = useState(false);
  const headers = {
    Authorization: sessionStorage.getItem("token"),
  };
  useEffect(() => {
    sessionStorage.token &&
      axios
        .get(BaseUrl + `/topic/interests`, { headers })
        .then((res) => {
          setTopics(res.data);
        })
        .catch((err) => console.error(err));
  }, []);

  return (
    <Container maxWidth="lg">
      {topics && (
        <Box my={3} mx={3}>
          <Swiper
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
                key={data.interestName}
                style={{ width: "min-content", margin: "15px" }}
              >
                <NavLink to={`/tag/${data.interestId}`}>
                  <OutlineButton size="small" style={{ whiteSpace: "nowrap" }}>
                    {data.interestName}
                  </OutlineButton>
                </NavLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      )}
    </Container>
  );
};

export default TopicSlider;
