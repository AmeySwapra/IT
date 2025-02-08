import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import girl from "../assets/images/girl.webp";
import pic1 from "../assets/icon/pic1.webp";
import pic2 from "../assets/icon/pic2.webp";
import pic3 from "../assets/icon/pic3.webp";
import ava1 from "../assets/avatar/pic1.png";
import ava2 from "../assets/avatar/pic2.png";
import ava3 from "../assets/avatar/pic3.png";
import ava4 from "../assets/avatar/pic4.png";
import star from "../assets/bg/star.svg";
import { useTheme } from "@emotion/react";

const HeroSection = () => {
  const features = [
    {
      title: "Professional IT Courses",
      desc: "Including Latest Technologies",
      icon: pic1,
    },
    {
      title: "Industry Professionals",
      desc: "Having 10+ Years of Experience",
      icon: pic2,
    },
    {
      title: "Job Oriented Courses",
      desc: "Placement Opportunities",
      icon: pic3,
    },
  ];

  const theme = useTheme();

  return (
    <Box bg="#F8F9FA" py={{ base: 6, md: 10 }}>
      <Container maxW="6xl" px={{ base: 4, md: 6 }} position="relative">
        {/* Main Section */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={8}
          justify="center"
        >
          {/* Left Text Section */}
          <VStack
            align={{ base: "center", lg: "start" }}
            spacing={4}
            flex={1}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Text fontSize="lg" color={theme.colors.text} fontWeight="bold">
              100% PLACEMENT GUARANTEE
            </Text>
            <Heading as="h1" size="xl" lineHeight="short">
              Best IT Training &{" "}
              <Text as="span" color={theme.colors.text}>
                Placement
              </Text>
              <br />
              Institute in{" "}
              <Box as="span" position="relative" display="inline-block">
                <Text
                  as="span"
                  color={theme.colors.text}
                  fontWeight="bold"
                  fontSize={{ base: "3xl", md: "5xl" }}
                  position="relative"
                  zIndex={1}
                >
                  Pune
                </Text>
              </Box>
            </Heading>
            <Text fontSize="md">
              <Text as="span" fontWeight="bold">
                We Have
              </Text>{" "}
              <Text as="span" color={theme.colors.text} fontWeight="bold">
                15+
              </Text>{" "}
              Online Courses &{" "}
              <Text as="span" color={theme.colors.text} fontWeight="bold">
                10K+
              </Text>{" "}
              Registered Students.
            </Text>
            <Button bg={theme.colors.text} size="lg" _hover={{ bg: "hover" }} color="white">
              Explore All Courses
            </Button>
          </VStack>

          {/* Right Image Section */}
          <Box flex={1} textAlign="center" position="relative">
            <Image
              src={girl}
              alt="Smiling student with laptop"
              borderRadius="md"
              w={{ base: "100%", md: "80%" }}
              mx="auto"
            />
            {/* Review Card */}
            <Box
              position="absolute"
              top={{ base: "105%", md: "15%" }}
              left={{ base: "50%", md: "20%" }}
              transform="translate(-50%, -50%)"
              bg="white"
              p={3}
              borderRadius="md"
              boxShadow="md"
              w={{ base: "90%", md: "auto" }}
            >
              <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                100% Satisfied Students
              </Text>
              <HStack spacing={2} mt={2} justify="center">
                <Image src={ava1} boxSize="30px" borderRadius="full" />
                <Image src={ava2} boxSize="30px" borderRadius="full" />
                <Image src={ava3} boxSize="30px" borderRadius="full" />
                <Image src={ava4} boxSize="30px" borderRadius="full" />
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Text
                    fontWeight="bold"
                    fontSize="18px"
                    textAlign="center"
                    bg={theme.colors.text}
                    color="white"
                    borderRadius="full"
                    boxSize="35px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    10+
                  </Text>
                </Box>
              </HStack>
              <Image
                src={star}
                position="absolute"
                top={-4}
                right={-4}
                boxSize="30px"
              />
            </Box>
          </Box>
        </Flex>

        {/* Features Section */}
        <Flex
          gap={6}
          wrap="wrap"
          justify="center"
          mt={{ base: "100px", md: 0 }}
          mb={10}
        >
          {features.map((feature, index) => (
            <Flex
              key={index}
              bg="white"
              p={5}
              border={`1px solid ${theme.colors.text}`}
              borderRadius="lg"
              _hover={{
                boxShadow: `-10px -10px ${theme.colors.text}`,
                transform: "translateY(-5px) scale(1.05)",  
                transition: "all 0.5s ease-out", 
              }}
              align="center"
              w={{ base: "100%", md: "48%", lg: "30%" }}
              flexDirection="row"
            >
              <Image src={feature.icon} boxSize="50px" alt="Icon" mr={4} />
              <VStack align="start" spacing={1}>
                <Text
                  fontWeight="bold"
                  color={theme.colors.text}
                  fontSize={{ base: "sm", md: "md" }}
                >
                  {feature.title}
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }}>{feature.desc}</Text>
              </VStack>
            </Flex>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
