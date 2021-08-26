import { FC } from "react";
import { Flex, Image, Link, Button, Icon } from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";

import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ hasBackButton = false }) => {
  return (
    <Flex
      as="header"
      w="100%"
      align="center"
      justify="space-evenly"
      paddingY="6"
    >
      {hasBackButton ? (
        <Button borderRadius="50%" variant="ghost" h="10" w="8">
          <Icon as={FiChevronLeft} h="32px" w="32px" color="tex.900" />
        </Button>
      ) : (
        <div />
      )}
      <Link href="/">
        <Image src="/images/logo.svg" h="45" />
      </Link>
      <div />
    </Flex>
  );
};

export default Header;
