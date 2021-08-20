import { FC } from 'react';
import { Box, Divider } from '@chakra-ui/react';

import Banner from 'components/Banner';
import Info from 'components/Info';

const Home: FC = () => {
  return (
    <Box w="100vw">
      <Banner />
      <Info />

      <Divider mb="50" borderWidth="1px" borderColor="text.900" maxW="90" mx="auto" />
    </Box>
  );
};

export default Home;
