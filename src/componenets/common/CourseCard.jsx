import { Box, Image, Heading, Text, Button, VStack, Link, Flex } from "@chakra-ui/react";
import { FaStarHalfAlt } from "react-icons/fa";

const MernCourseCard = () => {
  return (
    <Box w={{ base: "100%", lg: "25%" }} textAlign="center" mt={5} borderWidth={1} borderRadius="md" p={4}>
      <Box borderWidth={1} borderRadius="md" py={3}>
        <Image 
          src="https://www.webgurukul.org/assets/img/mern.webp" 
          alt="Learn MERN Stack Development" 
          title="MERN Stack Course" 
          w="70%" 
          mx="auto" 
        />
      </Box>
      <Heading size="md" pt={3}>Learn MERN STACK Programming: Beginner to Advanced</Heading>
      
      <Flex justify="center" align="center" color="gray.500" mt={2}>
        {[...Array(4)].map((_, i) => (
          <FaStarHalfAlt key={i} color="#FFD43B" />
        ))}
        <FaStarHalfAlt color="#8a8a8a" /> 
        <Text ml={2}>4.10 (10)</Text>
      </Flex>
      
      <Text color="gray.500" mt={2}>
        <Image 
          src="https://www.webgurukul.org/assets/img/clock.svg" 
          alt="Clock Icon" 
          title="Duration" 
          display="inline" 
          w={5} 
          mr={2} 
        />
        100 Hr (50 Days)
      </Text>
      
      <Text mt={2} fontWeight="bold" color="gray.600">
        Course Contents: <Text as="span" fontWeight="normal">Python 3, MySQL, OOPs, Javascript, jQuery, Ajax, Flask (Framework)</Text>
      </Text>
      
      <VStack mt={4} spacing={2}>
        <Link href="https://www.webgurukul.org/Enrollment" isExternal>
          <Button colorScheme="blue" w="full">
            Enroll Now
          </Button>
        </Link>
        <Link href="https://www.webgurukul.org/assets/pdf/webdevelopment.pdf" isExternal fontWeight="bold" color="blue.500">
          Download Brochure
        </Link>
      </VStack>
      
      <Flex bg="blue.600" color="white" mt={4} p={3} justify="center" align="center" borderRadius="md">
        <Image 
          src="https://www.webgurukul.org/assets/img/pythoncertificate.svg" 
          alt="Certificate Icon" 
          title="Certification" 
          w={6} 
          mr={2} 
        />
        Certificate of Completion
      </Flex>
    </Box>
  );
};

export default MernCourseCard;
