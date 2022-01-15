import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";
import { withPageAuthRequiredFactory } from "@auth0/nextjs-auth0/dist/helpers";
import {
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import { NextPageContext } from "next";
import { AppContext } from "next/app";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../../Layout";

type University = {
  ID: number;
  LOCATION: string;
  NAME: string;
  PICTUREURL: string;
};

const UniversityPage = ({ universityData }: { universityData: University }) => {
  const [minors, setminors] = useState([1, 2, 3, 4, 5]);

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
          <Image h="200px" src={universityData.PICTUREURL} />
          <Heading>
            {`${
              universityData.NAME[0].toUpperCase() +
              universityData.NAME.slice(1).toLowerCase()
            } University`}
          </Heading>
        </Center>
        <Divider />
        <Center flexDir="column">
          {minors.map((el, i) => {
            return (
              <Button w="100vw" h="10%" mt="1%" bg="red" key={i}>
                {el}
              </Button>
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
    `${process.env.NEXT_PUBLIC_AUTH0_BASE_URL}/api/getUniversity?q=${ctx.query.university}`
  );
  const { universityData } = await getUniversityData.json();

  return { props: { universityData } };
};
