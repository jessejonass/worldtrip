import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";

import { BackgroundProps } from './types';

const Background: FC<BackgroundProps> = ({ backgroundImage, children }) => {
  return (
    <Flex
      h="100%"
      borderRadius="12"
      overflow="hidden"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={backgroundImage}
    >
      {children}
    </Flex>
  );
};

export default Background;
