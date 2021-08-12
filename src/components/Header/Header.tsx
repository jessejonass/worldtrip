import { FC } from "react";
import { Flex, Image, Link } from "@chakra-ui/react";

const Header: FC = () => {
  return (
    <Flex as="header" w="100%" align="center" justify="center" paddingY="6">
      <Link href="/">
        <Image src="/images/logo.svg" h="45" />
      </Link>
    </Flex>
  );
};

export default Header;
