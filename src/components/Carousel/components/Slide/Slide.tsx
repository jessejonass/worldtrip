import { FC } from "react";
import { Flex, Text, Link } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";

import Background from "../Background";
import Gradient from "../Gradient";

import { SlideProps } from "./types";

const Slide: FC<SlideProps> = ({ backgroundImage, href, title, subtitle }) => {
  return (
    <SwiperSlide>
      <Background backgroundImage={backgroundImage}>
        <Gradient>
          <Flex>
            <Link href={href} _hover={{ textDecoration: "none" }}>
              <Text
                mb="2"
                align="center"
                color="text.100"
                fontWeight="700"
                fontSize="4xl"
              >
                {title}
              </Text>
              <Text
                align="center"
                color="text.100"
                fontWeight="700"
                fontSize="medium"
              >
                {subtitle}
              </Text>
            </Link>
          </Flex>
        </Gradient>
      </Background>
    </SwiperSlide>
  );
};

export default Slide;
