import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide1 from "../assets/slider1.png";
import slide2 from "../assets/slider2.png";
import slide3 from "../assets/slider3.png";
import slide_mobile1 from "../assets/slide_mobile1.png";
import slide_mobile2 from "../assets/slide_mobile2.png";
import slide_mobile3 from "../assets/slide_mobile3.png";

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
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    modules: [Navigation, Pagination, Autoplay],
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box fontFamily="heading" color="white">
      <Box textTransform="uppercase" width="100%" position="relative">
        <Swiper {...params}>
          <SwiperSlide className="hero_slider">
            <img src={isMobile ? slide_mobile1 : slide1} alt="slider" />
          </SwiperSlide>
          <SwiperSlide className="hero_slider">
            <img src={isMobile ? slide_mobile2 : slide2} alt="slider" />
          </SwiperSlide>
          <SwiperSlide className="hero_slider">
            <img src={isMobile ? slide_mobile3 : slide3} alt="slider" />
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
        <Box
          className="swiper-button-prev"
          position="absolute"
          top="50%"
          left="10px"
          transform="translateY(-50%, -50%)"
          zIndex={10}
          cursor="pointer"
          color="primaryColor"
          border="1px solid red"
          borderRadius="50%"
          width="30px"
          height="30px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        ></Box>
        <Box
          className="swiper-button-next"
          position="absolute"
          top="50%"
          right="10px"
          transform="translateY(-50%, -50%)"
          zIndex={10}
          cursor="pointer"
          color="primaryColor"
          border="1px solid red"
        ></Box>
      </Box>
      <Flex
        width="100%"
        justify="center"
        bg="grayColor"
        gap={{ base: "0", md: "40px" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          gap={{ base: "0", sm: "40px" }}
          justifyContent="center"
          alignItems="center"
          bg={{ base: "grayColor", md: "transparent" }}
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            py={3}
          >
            <Text fontWeight="600" fontSize={{ base: "14px", md: "18px" }}>
              Next day delivery
            </Text>
            <Text>Order by 6.00pm</Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            py={3}
          >
            <Text fontWeight="600" fontSize={{ base: "14px", md: "18px" }}>
              SRB's Biggest
            </Text>
            <Text>Independent Games Retailer</Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          py={3}
        >
          <Text fontWeight="600" fontSize={{ base: "14px", md: "18px" }}>
            New Releases
          </Text>
          <Text>Every Week</Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          py={3}
          display={{ base: "none", md: " flex" }}
        >
          <Text fontWeight="600" fontSize={{ base: "14px", md: "18px" }}>
            5 star reputation
          </Text>
          <Text> 37532 reviews</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default App;
