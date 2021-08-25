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
        <SwiperSlide >
          <Background backgroundImage="url('/images/europe.jpg')">
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

        <SwiperSlide>
          <Background backgroundImage="url('/images/africa.jpg')">
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
                    África
                  </Text>
                  <Text
                    align="center"
                    color="text.100"
                    fontWeight="700"
                    fontSize="medium"
                  >
                    Rico em biodiversidade e multicultural.
                  </Text>
                </Link>
              </Flex>
            </Gradient>
          </Background>
        </SwiperSlide>

        <SwiperSlide>
          <Background backgroundImage="url('/images/asia.jpg')">
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
                    Ásia
                  </Text>
                  <Text
                    align="center"
                    color="text.100"
                    fontWeight="700"
                    fontSize="medium"
                  >
                    Maior dos continentes, tanto em área como em população.
                  </Text>
                </Link>
              </Flex>
            </Gradient>
          </Background>
        </SwiperSlide>

        <SwiperSlide>
          <Background backgroundImage="url('/images/south-america.jpg')">
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
                    América do Sul
                  </Text>
                  <Text
                    align="center"
                    color="text.100"
                    fontWeight="700"
                    fontSize="medium"
                  >
                    Uma das maiores diversidades biológicas do planeta.
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
