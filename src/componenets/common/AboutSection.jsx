import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import about from "../../assets/images/about.png";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
const AboutSection = () => {

  const theme = useTheme();
  return (
    <Box bg="bg" py={10} px={5} overflowX={"hidden"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        maxW="1200px"
        mx="auto"
      >
        {/* Left Side - Text Content */}
        <Box flex={1} textAlign={{ base: "center", md: "left" }} px={5}>
          <Heading fontSize="5xl" color="black" mb={4} fontFamily="heading">
            About{" "}
            <Text as={"span"} color={"text"}>
              Code Academy
            </Text>
          </Heading>
          <Text fontSize="lg" color="secondary" fontFamily="body" mb={6}>
            At <b>Code Academy</b>, we are committed to providing top-notch IT
            education to aspiring developers and tech professionals. Our courses
            are designed to help students master in-demand skills, from
            programming and full-stack development to data science and cloud
            computing.
          </Text>
          <Text fontSize="lg" color="secondary" fontFamily="body" mb={6}>
            Whether you are a beginner looking to enter the tech industry or a
            professional aiming to upskill, we offer hands-on training and
            industry-recognized certifications to ensure you succeed.
          </Text>
          <Link to={"/courses"}>
            <Button
              bg={theme.colors.text}
              size="lg"
              _hover={{ bg: "hover" }}
              color="white"
              rightIcon={<Image src="https://www.webgurukul.org/assets/img/Right1Arrow.svg" alt="Right arrow" w={5} />}
            >
              Explore All Courses
            </Button>
          </Link>
        </Box>

        {/* Right Side - Image */}
        <Box flex={1} display="flex" justifyContent="center">
          <Image
            src={about}
            alt="About Code Academy"
            maxW="100%"
            bg="transparent"
            filter="brightness(1) contrast(1.2)"
            mixBlendMode="multiply"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutSection;
