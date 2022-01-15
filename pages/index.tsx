import {
  Box,
  Button,
  Center,
  Image,
  Flex,
  Heading,
  Input,
} from "@chakra-ui/react";
import Head from "next/head";
import UniversityBGImage from "../images/uni-bg.jpeg";
import React from "react";
import { themes } from "../utils/themes";
import Link from "next/link";
import Layout from "../Layout";

const IndexPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Center
          h="52.5vh"
          bgSize="cover"
          backgroundImage={UniversityBGImage.src}
          bgPosition="bottom"
          objectFit="fill"
          bgRepeat="no-repeat"
        >
          <Center
            w="100%"
            h="100%"
            opacity="0.65"
            bgGradient="linear(to-b, white, black)"
          />
          <Heading pos="absolute" fontSize="5rem" color="white">
            Find student's reviews on minors
          </Heading>
        </Center>
        <Center h="40vh">
          {/* TODO: MUST ADD ALL UNIVERSITIES TO CURRENT SECTION */}
          {/* <Button _focus={{}} colorScheme="yellow" fontSize="4rem" padding="4rem">
          Select school
        </Button> */}
          <Link href="/universities/ryerson">
            <Button
              _focus={{}}
              colorScheme="yellow"
              fontSize="4rem"
              padding="4rem"
            >
              Check Ryerson's Minors
            </Button>
          </Link>
        </Center>
      </Layout>
    </>
  );
};
export default IndexPage;
