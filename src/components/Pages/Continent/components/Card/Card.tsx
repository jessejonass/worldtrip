import { FC } from "react";
import { Flex, Image, Text, VStack } from "@chakra-ui/react";

import { CityCardProps } from "./types";

const CityCard: FC<CityCardProps> = ({ image, capital, country, flag }) => {
  return (
    <Flex
      flexDir="column"
      maxW="260px"
      h="280px"
      borderWidth="1px"
      borderColor="rgba(255, 186, 8, 0.5)"
      borderRadius="4px"
    >
      <Image src={image} w="100%" h="175" />

      <Flex flex="1" align="center" justify="space-between" px="24px">
        <VStack align="flex-start" spacing="12px">
          <Text fontWeight="600" color="text.900" fontSize="1.25rem">
            {capital}
          </Text>
          <Text fontWeight="400" color="info.900">
            {country}
          </Text>
        </VStack>

        <Image src={flag} w="30px" h="30px" borderRadius="50%" />
      </Flex>
    </Flex>
  );
};

export default CityCard;
