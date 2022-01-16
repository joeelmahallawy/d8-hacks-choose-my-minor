import dateFormat, { masks } from "dateformat";
import {
  ScaleFade,
  Divider,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useToast,
  Text,
  useForceUpdate,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import ReactStars from "react-stars";
import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { MinorDegree } from "../interfaces";

const RateMinorModal = ({ minor }: { minor: MinorDegree }) => {
  const forceUpdate = useForceUpdate();
  const [user, setUser] = useState(useUser().user);
  const getUser = useUser().user;
  useEffect(() => {
    setUser(getUser);
  }, [useUser().user]);

  const toast = useToast();
  const [rating, setRating] = useState({
    stars: 0,
    specificDetails: "",
    studentProgram: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <Button
        colorScheme="teal"
        borderRadius="10px"
        onClick={() => {
          if (user) {
            onOpen();
          } else {
            router.push("/api/auth/login");
          }
        }}
      >
        Rate this minor!
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rate this minor</ModalHeader>
          <ModalCloseButton />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetch("/api/addReview", {
                method: "POST",
                body: JSON.stringify({
                  RATING: rating.stars,
                  STUDENT: user.name,
                  STUDENTPROGRAM: rating.studentProgram,
                  STUDENTPROFILEPIC: user.picture,
                  CONTENT: rating.specificDetails,
                  DATEPOSTED: `${dateFormat(new Date(), "fullDate")}`,
                  MINORID: minor.ID,
                }),
              }).then((val) => {
                forceUpdate();
                onClose();
                return toast({
                  title: "Review submitted.",
                  description: "Thanks for leaving a review!",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              });
            }}
          >
            <ModalBody>
              <Text fontWeight="bold">Out of 5:</Text>
              <ReactStars
                onChange={(e) => {
                  setRating({
                    ...rating,
                    stars: e,
                  });
                }}
                count={5}
                size={24}
                color2={"#ffd700"}
              />

              <FormControl isRequired mt={3}>
                <FormLabel>Reviews about current minor</FormLabel>
                <Input
                  onChange={(e) => {
                    setRating({
                      ...rating,
                      specificDetails: e.currentTarget.value,
                    });
                  }}
                  placeholder="This is what other students will be reading..."
                ></Input>
              </FormControl>

              <FormControl isRequired mt={3}>
                <FormLabel>Your current program:</FormLabel>
                <Input
                  onChange={(e) => {
                    setRating({
                      ...rating,
                      studentProgram: e.currentTarget.value,
                    });
                  }}
                  placeholder="e.g. 3rd Year Software Engineering"
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue" type="submit">
                Post!
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RateMinorModal;
