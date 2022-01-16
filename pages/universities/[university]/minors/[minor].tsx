import {
  Box,
  Button,
  Center,
  Image,
  Flex,
  Heading,
  Input,
  Divider,
  Link,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextPageContext } from "next/types";
import React from "react";
import Layout from "../../../../Layout";
import ReactStars from "react-stars";
import { MinorDegree, Review, University } from "../../../../interfaces";
import RateMinorModal from "../../../../components/rateMinorModal";
import capitalize from "../../../../helpers/capitalize";
import RenderReviews from "../../../../components/renderReviews";

const MinorPage = ({
  minorData,
  universityData,
  reviews,
}: {
  minorData: MinorDegree;
  universityData: University;
  reviews: Review[];
}) => {
  console.log(reviews);
  return (
    <Layout>
      <Center
        borderBottom="1px solid black"
        p="1%"
        m="auto"
        w="100%"
        justifyContent="space-between"
      >
        <Image src={universityData.PICTUREURL} />
        <Heading>{`${capitalize(universityData.NAME)} University`}</Heading>
      </Center>
      <Center mb="1000%" pb="3%" m="auto" flexDir="column" w="60%">
        <Flex
          flexDir="column"
          borderRadius={10}
          bg="gray.100"
          m="auto"
          mt="2%"
          p="1%"
        >
          <Heading fontSize="3.5rem">{minorData.NAME}</Heading>
          <Text
            mt={3}
            fontSize="1.5rem"
            fontWeight="500"
          >{`Rating: ${minorData.RATING} / 5 stars`}</Text>
          <Text fontWeight="400" fontSize="xl" m="1% 0">
            {minorData.DESCRIPTION}
          </Text>
          <Center gap={3} ml="auto">
            <Link
              _focus={{}}
              _active={{}}
              isExternal
              fontSize="1.5rem"
              color="darkblue"
              m="2% 0"
              href={minorData.LINKTOWEBSITE}
            >
              View official university website
            </Link>
            <RateMinorModal minor={minorData} />
          </Center>
        </Flex>
        <Flex flexDir="column" w="100%">
          <Heading mt={5}>Reviews</Heading>
          <RenderReviews reviews={reviews} />
        </Flex>
      </Center>
    </Layout>
  );
};
export default MinorPage;

export const getServerSideProps = async (ctx: NextPageContext) => {
  const getMinorData = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH0_BASE_URL}/api/getMinor?q=${ctx.query.minor}`
  );
  const minorData = await getMinorData.json();

  const getUniversityData = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH0_BASE_URL}/api/getUniversity?q=${ctx.query.university}`
  );
  const universityData = await getUniversityData.json();

  const getReviews = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH0_BASE_URL}/api/getReviews?q=${minorData.ID}`
  );
  const reviews = await getReviews.json();
  return { props: { minorData, universityData, reviews } };
};
