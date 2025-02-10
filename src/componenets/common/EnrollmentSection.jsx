import { Box, Flex, Button, Text, Heading, Link, Image } from "@chakra-ui/react";

const EnrollmentSection = () => {
  return (
    <Box bg="bg" py={{ base: 4, md: 8 }}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 4, md: 8 }}>
        {/* Heading and Description */}
        <Box textAlign="center" pb={{ base: 4, md: 8 }}>
          <Heading as="h3" fontSize={{ base: "xl", md: "4xl" }} fontWeight="bold" mb={4}>
          Want to Build a <Text as={'span'} color={'text'}>Successful Career</Text> in IT as a <Text as={'span'} color={'text'}>Skilled Developer</Text> or <Text as={'span'} color={'text'}>Programming Expert</Text>?
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={4}>
            Code Academy is rated 4.7/5 based on 318 reviews on Google
          </Text>
          <Heading as="h4" fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold" mb={4}>
            Join Code Acamedy to unlock your potential!
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
          Start your tech career today and become a skilled developer by learning from industry experts.
          </Text>
        </Box>

        {/* Buttons */}
        <Flex justify="center" align="center" gap={4}>
          {/* Enroll Now Button */}
          <Link href="/enrollment" _hover={{ textDecoration: "none" }}>
            <Button
              color="bg"
              bg={'text'}
              size="lg"
              rightIcon={<Image src="https://www.webgurukul.org/assets/img/Right1Arrow.svg" alt="Right arrow" w={5} />}
              _hover={{ bg: "blue.600" }}
            >
              Enroll Now
            </Button>
          </Link>

          {/* Contact Us Button */}
          <Link href="/contact" _hover={{ textDecoration: "none" }}>
            <Button
              variant="outline"
              color="text"
              bg={'white'}
              size="lg"
              rightIcon={<Image src="https://www.webgurukul.org/assets/img/Right1Arrow.svg"  filter="invert(17%) sepia(64%) saturate(5971%) hue-rotate(263deg) brightness(94%) contrast(94%)" alt="Right arrow" w={5} />}
              _hover={{ bg: "blue.50" }}
            >
              Contact Us
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default EnrollmentSection;