import { FC } from "react";
import { SimpleGrid, Image, Text, Flex } from "@chakra-ui/react";

const Info: FC = () => {
  return (
    <SimpleGrid
      columns={[1, 1, 5]}
      my="80px"
      mx="auto"
      spacing="40px"
      maxW="1160"
    >
      <Flex
        height="145px"
        direction="column"
        align="center"
        justify="space-evenly"
      >
        <Image src="/images/cocktail.svg" />
        <Text fontSize="1.5rem" fontWeight="semibold" textAlign="center">
          vida noturna
        </Text>
      </Flex>

      <Flex
        height="145px"
        direction="column"
        align="center"
        justify="space-evenly"
      >
        <Image src="/images/beach.svg" />
        <Text fontSize="1.5rem" fontWeight="semibold" textAlign="center">
          praia
        </Text>
      </Flex>

      <Flex
        height="145px"
        direction="column"
        align="center"
        justify="space-evenly"
      >
        <Image src="/images/modern.svg" />
        <Text fontSize="1.5rem" fontWeight="semibold" textAlign="center">
          moderno
        </Text>
      </Flex>

      <Flex
        height="145px"
        direction="column"
        align="center"
        justify="space-evenly"
      >
        <Image src="/images/classic.svg" />
        <Text fontSize="1.5rem" fontWeight="semibold" textAlign="center">
          clássico
        </Text>
      </Flex>

      <Flex
        height="145px"
        direction="column"
        align="center"
        justify="space-evenly"
      >
        <Image src="/images/earth.svg" />
        <Text fontSize="1.5rem" fontWeight="semibold" textAlign="center">
          e mais...
        </Text>
      </Flex>
    </SimpleGrid>
  );
};

export default Info;
