import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";

type BackgroundProps = {
  children: React.ReactNode;
};

const Background: FC<BackgroundProps> = ({ children }) => {
  return (
    <Flex
      h="100%"
      borderRadius="12"
      overflow="hidden"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage="url('/images/europe.jpg')"
    >
      {children}
    </Flex>
  );
};

export default Background;
