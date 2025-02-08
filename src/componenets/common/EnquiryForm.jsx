import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import InquiryModal from "../modal/InquiryModal";

const EnquiryForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box bg="text" py={8} className="sec12bg">
      <Container maxW="container.xl" pt={2}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
        >
          {/* Image Section */}
          <Box
            w={{ base: "100%", lg: "33%" }}
            display="flex"
            justifyContent="center"
          >
            <Image
              src="https://www.webgurukul.org/assets/img/sec12img.webp"
              alt="Graduation success icon, a proud student holding a rolled diploma"
              title="Celebrating academic achievement, empowering future leaders!"
              maxW="100%"
              objectFit="contain"
            />
          </Box>

          {/* Text Section */}
          <Flex
            w={{ base: "100%", lg: "33%" }}
            direction="column"
            align={{ base: "center", lg: "flex-start" }}
            textAlign={{ base: "center", lg: "left" }}
            color="white"
          >
            <Heading as="h2" fontSize="2xl" fontWeight="bold">
              <Text as="span">Begin Coding at Code Academy</Text>
              <Text as="span" display="block">
                The Best Institute for Coding Skills
              </Text>
            </Heading>
            <Text fontSize="lg" mt={2}>
              Join us and take your first step towards the IT industry.
            </Text>
          </Flex>

          {/* Button Section */}
          <Flex w={{ base: "100%", lg: "33%" }} justify="center" align="center">
            <Button
              bg="primary"
              color="white"
              rightIcon={<ArrowRightIcon />}
              _hover={{ bg: "text" }}
              size="lg"
              borderRadius="full"
              onClick={() => setIsOpen(true)}
            >
              Enquire Now
            </Button>
          </Flex>
        </Flex>
      </Container>

      {/* Inquiry Modal */}
      <InquiryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Box>
  );
};

export default EnquiryForm;
