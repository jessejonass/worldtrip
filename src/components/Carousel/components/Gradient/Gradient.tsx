import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";

type Gradient = {
  children: React.ReactNode;
};

const Gradient: FC<Gradient> = ({ children }) => {
  return (
    <Flex
      align="center"
      justify="center"
      h="100%"
      w="100%"
      px="10"
      bgGradient="linear(to-b, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35))"
    >
      {children}
    </Flex>
  );
};

export default Gradient;
