import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";

import { BannerProps } from "./types";

const Banner: FC<BannerProps> = ({ backgroundImage, title }) => {
  return (
    <Flex
      h="500px"
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={backgroundImage}
    >
      <Flex
        w="100%"
        h="100%"
        bgGradient="linear(to-b, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35))"
      >
        <Text
          position="absolute"
          bottom="60px"
          left="140px"
          fontWeight="700"
          color="text.100"
          fontSize="3rem"
        >
          {title}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Banner;
