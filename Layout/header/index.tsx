import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { themes } from "../../utils/themes";

const Header = () => {
  return (
    <Center
      p="3rem"
      justifyContent="space-between"
      bg={themes.colors.primary}
      id="nav-bar"
    >
      <Heading
        color="white"
        fontSize="6xl"
        fontFamily="Zilla Slab"
        fontWeight="extrabold"
      >
        ChooseMyMinor
      </Heading>

      <Flex gap="2rem">
        <Link href="/">
          <Button
            _focus={{}}
            colorScheme="yellow"
            fontSize="3rem"
            padding="2rem"
          >
            Home
          </Button>
        </Link>
        <Link href="/api/auth/login">
          <Button
            _focus={{}}
            colorScheme="yellow"
            fontSize="3rem"
            padding="2rem"
          >
            Login
          </Button>
        </Link>
      </Flex>
    </Center>
  );
};
export default Header;
