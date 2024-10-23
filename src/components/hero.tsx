import React from "react";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import specific Swiper styles
import "swiper/css/pagination";
import slide1 from "../assets/slider1.png";
import slide2 from "../assets/slider2.png";
import slide3 from "../assets/slider3.png";

const App: React.FC = () => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <Box fontFamily="heading" color="white" height="90vh">
      <Box textTransform="uppercase" width="100%">
        <Swiper {...params}>
          <SwiperSlide className="hero_slider">
            <img src={slide1} alt="slider" />
          </SwiperSlide>
          <SwiperSlide className="hero_slider">
            {" "}
            <img src={slide2} alt="slider" />
          </SwiperSlide>
          <SwiperSlide className="hero_slider">
            {" "}
            <img src={slide3} alt="slider" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default App;
