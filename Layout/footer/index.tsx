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
    <Center justifyContent="flex-end" p="3rem" bg={themes.colors.primary}>
      <Center w="33%" />
      <Center w="33%">
        <Box>
          <Heading fontSize="5xl" fontWeight="extrabold" mb={3} color="white">
            Collaborators
          </Heading>
          <UnorderedList>
            <ListItem color="white" fontSize="1.5rem">
              Awais Irshad
            </ListItem>
            <ListItem color="white" fontSize="1.5rem">
              Mohammad Al-Shalabi
            </ListItem>
            <ListItem color="white" fontSize="1.5rem">
              Ross Enriquez
            </ListItem>
            <ListItem color="white" fontSize="1.5rem">
              Youssef El Mahallawy
            </ListItem>
          </UnorderedList>
        </Box>
      </Center>
      <Center w="33%" justifyContent="flex-end">
        <Heading color="white"> &copy; Copyright </Heading>
      </Center>
    </Center>
  );
};
export default Footer;
