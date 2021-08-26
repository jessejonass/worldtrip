import { FC } from "react";
import { Flex, Text, SimpleGrid, VStack } from "@chakra-ui/react";

import CityCard from "./components/CityCard";
import Banner from "./components/Banner";

const Europe: FC = () => {
  return (
    <>
      <Banner title="Europa" backgroundImage="https://bit.ly/3kwPDmN" />

      <Flex flexDir="column" maxW="1160px" mx="auto" px="8px">
        <SimpleGrid my="80px" columns={[1, 1, 2]}>
          <Flex>
            <Text align="justify">
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Flex>

          <Flex align="center" justify="space-evenly">
            <VStack>
              <Text color="highlight.900" fontWeight="700" fontSize="3rem">
                50
              </Text>
              <Text fontWeight="600" fontSize="1rem">
                países
              </Text>
            </VStack>

            <VStack>
              <Text color="highlight.900" fontWeight="700" fontSize="3rem">
                60
              </Text>
              <Text fontWeight="600" fontSize="1rem">
                línguas
              </Text>
            </VStack>

            <VStack>
              <Text color="highlight.900" fontWeight="700" fontSize="3rem">
                27
              </Text>
              <Text fontWeight="600" fontSize="1rem">
                cidades +100
              </Text>
            </VStack>
          </Flex>
        </SimpleGrid>

        <Text
          mb="40px"
          fontWeight="600"
          fontSize="2.25rem"
          color="text.900"
          textAlign={["center", "center", "center", "start"]}
        >
          Cidades +100
        </Text>

        <SimpleGrid
          columns={[1, 1, 2, 3, 4]}
          spacing="45px"
          mx={["auto", "auto", "auto", "0"]}
        >
          <CityCard
            capital="London"
            country="United Kingdom"
            image="https://bit.ly/3sNJS7X"
            flag="https://bit.ly/2WlGV2I"
          />
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Europe;
