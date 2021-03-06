import { FC } from "react";
import Head from "next/head";
import { Box, Divider, Text } from "@chakra-ui/react";

import Banner from "./components/Banner";
import Info from "./components/Info";
import Carousel from "./components/Carousel";
import Header from "components/Header";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>home | worldtrip</title>
      </Head>

      <Header hasBackButton={false} />
      <Box w="100%">
        <Banner />
        <Info />

        <Divider borderWidth="1px" borderColor="text.900" maxW="90" mx="auto" />
        <Text textAlign="center" fontSize="2rem" fontWeight="medium" my="52px">
          Vamos nessa? <br /> Então escolha seu continente
        </Text>

        <Carousel />
      </Box>
    </>
  );
};

export default Home;
