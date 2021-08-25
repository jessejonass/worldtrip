import { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Europe: FC = () => {
  return (
    <>
      <Flex
        h="500px"
        position="relative"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage="https://i.picsum.photos/id/215/1440/500.jpg?hmac=wy-zYtZys88EfSRbfYhi05SMkt9_UN-tonUtU6IA2AE"
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
            Europa
          </Text>
        </Flex>
      </Flex>

      <Box
        h="500px"
        background="#f5f5f5"
        maxW="1160px"
        mx="auto"
        px="8px"
      ></Box>
    </>
  );
};

export default Europe;
