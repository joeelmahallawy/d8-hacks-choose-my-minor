import { Link, Center, Divider, Flex, Heading, Image } from "@chakra-ui/react";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { University } from "../../../interfaces";
import Layout from "../../../Layout";
import MinorDegrees from "../../../ryerson.json";

const UniversityPage = ({ universityData }: { universityData: University }) => {
  const router = useRouter();
  return (
    <Layout>
      <Center mt="10%" flexDir="column" m="auto">
        <Center
          borderBottom="1px solid black"
          p="1%"
          m="auto"
          w="100%"
          justifyContent="space-between"
        >
          <Image h="200px" src={universityData?.PICTUREURL} />
          <Heading>
            {`${
              universityData?.NAME[0].toUpperCase() +
              universityData?.NAME.slice(1).toLowerCase()
            } University`}
          </Heading>
        </Center>
        <Divider />
        <Center flexDir="column">
          {MinorDegrees.map((el, i) => {
            return (
              <Link
                key={i}
                mt="1%"
                _hover={{}}
                href={`/universities/${
                  router.query.university
                }/minors/${el.NAME.split(" ").join("-")}`}
              >
                <Center
                  _hover={{ bg: "gray.200", cursor: "pointer" }}
                  p="2rem"
                  w="50vw"
                  h="20%"
                  bg="gray.100"
                  borderRadius={5}
                  key={i}
                >
                  <Heading>{el.NAME}</Heading>
                </Center>
              </Link>
            );
          })}
        </Center>
      </Center>
    </Layout>
  );
};
export default UniversityPage;

export const getServerSideProps = async (ctx: NextPageContext) => {
  const getUniversityData = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH0_BASE_URL}/api/getUniversity?q=${ctx.query.university}` //ryerson
  );
  const universityData = await getUniversityData.json();

  return { props: { universityData } };
};
