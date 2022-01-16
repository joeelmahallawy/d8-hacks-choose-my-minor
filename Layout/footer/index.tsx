import {
  Box,
  Center,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { themes } from "../../utils/themes";

const Footer = () => {
  return (
    <Center
      justifyContent="space-between"
      p={["1rem", "2rem", "3rem", "3.5rem", "4rem"]}
      bg="#004892"
    >
      {/* <Center w="33%" display={["block", "none", "none", "block", "block"]} /> */}

      <Box>
        <Heading
          fontSize={["3xl", "3xl", "3xl", "4xl", "5xl"]}
          fontWeight="extrabold"
          mb={3}
          color="white"
        >
          Collaborators
        </Heading>
        <UnorderedList>
          <ListItem color="white" fontSize="1rem">
            Awais Irshad
          </ListItem>
          <ListItem color="white" fontSize="1rem">
            Mohammad Al-Shalabi
          </ListItem>
          <ListItem color="white" fontSize="1rem">
            Ross Enriquez
          </ListItem>
          <ListItem color="white" fontSize="1rem">
            Youssef El Mahallawy
          </ListItem>
        </UnorderedList>
      </Box>

      <Heading
        color="white"
        fontSize={["1rem", "1.5rem", "1.5rem", "2rem", "2rem"]}
      >
        {" "}
        &copy; Copyright{" "}
      </Heading>
    </Center>
  );
};
export default Footer;
