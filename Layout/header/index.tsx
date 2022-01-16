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
      // bg={themes.colors.primary}
      bg="#004892"
      id="nav-bar"
    >
      <Heading
        color="white"
        fontSize={["2xl", "3xl", "4xl", "5xl", , "5xl", "6xl"]}
        fontFamily="Zilla Slab"
        fontWeight="extrabold"
        _focus={{}}
        _hover={{ cursor: "pointer" }}
        _active={{}}
        variant="ghost"
      >
        ChooseMyMinor
      </Heading>

      <Center gap={["0.5rem", "0.5rem", "1.5rem", "1.5rem", "2rem"]}>
        <Link href="/">
          <Button
            _focus={{}}
            _hover={{}}
            _active={{}}
            variant="ghost"
            color="white"
            d={["none", "none", "flex", "flex", "flex"]}
            fontSize={["1rem", "1rem", "1.5rem", "2rem", "2.5rem", "3rem"]}
            padding={["1rem", "1rem", "1.5rem", "1.5rem", "2rem"]}
          >
            Home
          </Button>
        </Link>
        {user ? (
          <Link href="/api/auth/logout">
            <Button
              _focus={{}}
              colorScheme="yellow"
              fontSize={["1rem", "1rem", "1.5rem", "2rem", "2.5rem", "3rem"]}
              padding={["1rem", "1rem", "1.5rem", "1.5rem", "2rem"]}
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
      </Center>
    </Center>
    // </Link>
  );
};
export default Header;
