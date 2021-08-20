import { FC } from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
SwiperCore.use([Navigation, Pagination]);

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import Background from "./components/Background";
import Gradient from "./components/Gradient";

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
        navigation
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        style={swiperStyle}
      >
        <SwiperSlide>
          <Background>
            <Gradient>
              <Flex>
                <Link href="/" _hover={{ textDecoration: "none" }}>
                  <Text
                    mb="2"
                    align="center"
                    color="text.100"
                    fontWeight="700"
                    fontSize="4xl"
                  >
                    Europa
                  </Text>
                  <Text
                    align="center"
                    color="text.100"
                    fontWeight="700"
                    fontSize="medium"
                  >
                    O continente mais antigo.
                  </Text>
                </Link>
              </Flex>
            </Gradient>
          </Background>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Carousel;
