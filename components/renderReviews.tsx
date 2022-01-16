import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import dateFormat, { masks } from "dateformat";
import React from "react";
import ReactStars from "react-stars";
import { Review } from "../interfaces";

const RenderReviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <>
      {reviews
        .sort((a, b) => Number(b.DATEPOSTED) - Number(a.DATEPOSTED))
        .map((review, i) => {
          return (
            <Box
              key={i}
              border="1px solid black"
              bg="yellow.100"
              w="100%"
              borderRadius={10}
              m="auto"
              mt="3%"
            >
              {/* <Text>Check out what students have to say about this minor!</Text> */}
              <Box m="2% 2%" p={3} borderRadius={10}>
                <Center justifyContent="space-between">
                  <Center gap={3}>
                    <Image
                      h="40px"
                      src={review.STUDENTPROFILEPIC}
                      borderRadius="full"
                    />

                    <Text fontWeight="bold">{review.STUDENT}</Text>
                    <Text>{review.STUDENTPROGRAM}</Text>
                  </Center>
                  <Text>
                    {dateFormat(
                      new Date(Number(review.DATEPOSTED)),
                      "fullDate"
                    )}
                  </Text>
                </Center>
                <Box>
                  <Flex justifyContent="space-between"></Flex>
                  <ReactStars
                    count={5}
                    size={24}
                    color2={"#ffd700"}
                    edit={false}
                    value={review.RATING}
                  />
                  {review.CONTENT}
                </Box>
              </Box>
            </Box>
          );
        })}
    </>
  );
};
export default RenderReviews;
