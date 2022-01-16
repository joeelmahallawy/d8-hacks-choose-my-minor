import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { themes } from "../../utils/themes";
import { useUser } from "@auth0/nextjs-auth0";

const Header = () => {
  const [user, setUser] = useState(useUser().user);
  const getUser = useUser().user;
  useEffect(() => {
    setUser(getUser);
  }, [useUser().user]);

  return (
    // <Link href="/">
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
            _hover={{}}
            _active={{}}
            variant="ghost"
            color="white"
            fontSize="3rem"
            padding="2rem"
            borderRadius="1.5rem"
          >
            Home
          </Button>
        </Link>
        {user ? (
          <Link href="/api/auth/logout">
            <Button
              _focus={{}}
              colorScheme="yellow"
              fontSize="3rem"
              padding="2rem"
            >
              Logout
            </Button>
          </Link>
        ) : (
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
        )}
      </Flex>
    </Center>
    // </Link>
  );
};
export default Header;
