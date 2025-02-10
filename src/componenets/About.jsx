import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import star from "../assets/bg/star.svg";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
const About = () => {

  const theme = useTheme();
  return (
    <Box bg="bg" py={10} overflowX={"hidden"}>
      <Container maxW="6xl" overflow="hidden">
        <Flex direction={{ base: "column", lg: "row" }} align="center">
          {/* Left Section */}
          <Box flex={1} pr={{ lg: 10 }}>
            <Flex>
              <VStack spacing={4} align="stretch">
                <Box
                  bg="text"
                  color="white"
                  textAlign="center"
                  p={3}
                  borderRadius="lg"
                  w="100%"
                >
                  <Text fontSize="lg" fontWeight="bold">
                    10+ Years Of
                  </Text>
                  <Text fontSize="xl">Experiences</Text>
                </Box>
                <Image
                  src="https://www.webgurukul.org/assets/img/sec3girlbook.webp"
                  borderRadius="lg"
                />
              </VStack>
              <VStack spacing={4} align="stretch" ml={4}>
                <Image
                  src="https://www.webgurukul.org/assets/img/sec3boyhe.webp"
                  borderRadius="lg"
                />
                <Box position="relative">
                  <HStack p={4} boxShadow="lg" borderRadius="lg" bg="white">
                    <Flex position="relative" w={20} h={20}>
                      <Image
                        src="https://www.webgurukul.org/assets/img/kishitij2.jpg"
                        borderRadius="full"
                        boxSize={"45px"}
                        position="absolute"
                        top={0}
                        left={0}
                      />
                      <Image
                        src="https://www.webgurukul.org/assets/img/anchalbansod.jpg"
                        borderRadius="full"
                        boxSize={"45px"}
                        position="absolute"
                        top={5}
                        left={5}
                      />
                      <Image
                        src="https://www.webgurukul.org/assets/img/tejas.jpg"
                        borderRadius="full"
                        boxSize={"45px"}
                        position="absolute"
                        top={-2}
                        left={10}
                      />
                    </Flex>
                    <Box pl={5}>
                      <Text fontSize="xl" fontWeight="bold">
                        1K+
                      </Text>
                      <Text fontSize="md">Positive Reviews</Text>
                    </Box>
                  </HStack>
                  {/* Star Icon in Top Right Corner */}
                  <Image
                    src={star}
                    position="absolute"
                    top="-15px"
                    right="-10px"
                    boxSize="30px"
                  />
                </Box>
              </VStack>
            </Flex>
          </Box>

          {/* Right Section */}
          <Box flex={1} pl={{ lg: 10 }}>
            <Heading as="h2" fontSize="4xl" color="black" mb={4}>
              <Text as="span" fontSize="5xl" color="text">
                Pune's
              </Text>{" "}
              Top IT Training & Placement Institute
            </Heading>
            <Text fontSize="lg" fontWeight="bold" color="text">
              100% Job Guarantee, Internships, Certification, and Placement for
              All IT Courses
            </Text>
            <Text fontSize="md" color="secondary" mt={3}>
              Code Academy, Pune's best IT training institute, enhances your
              technical skills in web development and design. Our programs build
              confidence and job readiness, bridging the gap between academia
              and industry. We offer affordable, comprehensive education in web
              development, mobile app design, and digital marketing, empowering
              Pune's youth with cutting-edge skills and guaranteed job
              placement.
            </Text>
            <Text fontSize="md" mt={3} fontWeight="bold" color="secondary">
              Join Code Academy Today and Secure Your Future in IT!
            </Text>
            <Link to={"/courses"}>
              <Button
                bg={theme.colors.text}
                size="lg"
                _hover={{ bg: "hover" }}
                color="white"
                mt={2}
                rightIcon={<Image src="https://www.webgurukul.org/assets/img/Right1Arrow.svg" alt="Right arrow" w={5} />}
              >
                Explore All Courses
              </Button>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
