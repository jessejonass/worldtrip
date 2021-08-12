import { FC } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

const Banner: FC = () => {
  const isWide = useBreakpointValue({
    base: false,
    xl: true,
  });

  return (
    <Box
      h="335px"
      bgImg="url('/images/bannerbg.png')"
      bgSize="cover"
      position="relative"
      display="flex"
      px={isWide ? "140px" : "20px"}
    >
      <Flex w="100%">
        <VStack mx={isWide ? "0" : "auto"} maxW="525px" spacing="4" align="flex-start" justify="center">
          <Heading
            lineHeight="55px"
            fontWeight="500"
            fontSize="2.25rem"
            color="text.100"
          >
            5 continentes, <br /> infinitas possibilidades
          </Heading>

          <Text color="text.400" fontSize="1.25rem">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>

        {isWide && (
          <Image
            src="/images/airplane.svg"
            position="absolute"
            right="140px"
            bottom="-20px"
            w="420px"
          />
        ) }
      </Flex>
    </Box>
  );
};

export default Banner;
