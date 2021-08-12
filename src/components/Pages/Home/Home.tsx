import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

import Banner from 'components/Banner';

const Home: FC = () => {
  return (
    <Box w="100vw">
      <Banner />
    </Box>
  );
};

export default Home;
