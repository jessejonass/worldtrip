import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
SwiperCore.use([Navigation, Pagination]);

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import Slide from "./components/Slide";

const swiperStyle = {
  "--swiper-navigation-color": "#FFBA08",
  "--swiper-pagination-color": "#FFBA08",
  "--swiper-navigation-size": "30px",
  height: "430px",
};

const Carousel: FC = () => {
  return (
    <Box px="2" maxW="1240px" mx="auto" mb="52px">
      <Swiper
        spaceBetween={30}
        navigation
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        style={swiperStyle}
      >
        <SwiperSlide>
          <Slide
            backgroundImage="url('/images/europe.jpg')"
            href="/continent/europa"
            title="Europa"
            subtitle="O continente mais antigo."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            backgroundImage="url('/images/africa.jpg')"
            href="/continent/africa"
            title="África"
            subtitle="Rico em biodiversidade e multicultural."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            backgroundImage="url('/images/asia.jpg')"
            href="/continent/asia"
            title="Ásia"
            subtitle="Maior dos continentes, tanto em área como em população."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            backgroundImage="url('/images/south-america.jpg')"
            href="/continent/america-do-sul"
            title="Améria do Sul"
            subtitle="Uma das maiores diversidades biológicas do planeta."
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Carousel;
