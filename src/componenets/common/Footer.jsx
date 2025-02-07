import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";
import logo1 from "../../assets/logo/logo.png";
const Footer = () => {
  const courses = [
    { id: 1, title: "Fullstack Python" },
    { id: 2, title: "MERN/MEAN stack" },
    { id: 3, title: "Data Science" },
    { id: 4, title: "C Language" },
    { id: 5, title: "Data Structure Using CPP" },
    { id: 6, title: "C++ Language" },
    { id: 7, title: "Machine Learning" },
    { id: 8, title: "Azure Certification | Microsoft Azure" },
    { id: 9, title: "Software Testing" },
    { id: 10, title: "Fullstack Java" },
    { id: 11, title: "Cloud & DevOPS (AWS)" },
    { id: 12, title: "Data Analytics" },
  ];
  return (
    <Box as="footer" bg="bg" color="text" py={10} >
      <Container maxW="container.xl">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={8}
        >
          {/* Logo & Description */}
          <VStack align="start" spacing={4}>
            <Link href="https://www.webgurukul.org/">
              <Image src={logo1} alt="Webgurukul Logo" w="80%" />
            </Link>
            <Text fontSize="md">
              <strong>Code Academy: Pune's Best IT Training Institute</strong>{" "}
              <br />
              <br />
              Code Academy, located in Pune, stands as the leading IT training
              institute, offering comprehensive courses in programming, web
              development, and more. With dedicated trainers and hands-on
              practical training, we ensure you're fully prepared for a
              successful career in IT.
            </Text>
            <Heading size="sm">FOLLOW US:</Heading>
            <HStack spacing={3}>
              <Link href="https://www.facebook.com/WebgurukulEdu/" isExternal>
                <FaFacebook size="24px" />
              </Link>
              <Link href="https://twitter.com/WebgurukulEdu" isExternal>
                <FaTwitter size="24px" />
              </Link>
              <Link
                href="https://www.instagram.com/webgurukul/?hl=en"
                isExternal
              >
                <FaInstagram size="24px" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCvyg0Qdh5e4YNrXAe9PuC5w"
                isExternal
              >
                <FaYoutube size="24px" />
              </Link>
              <Link href="https://in.pinterest.com/webgurukul/" isExternal>
                <FaPinterest size="24px" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/webgurukul/"
                isExternal
              >
                <FaLinkedin size="24px" />
              </Link>
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align="start" spacing={3}>
            <Heading size="md">QUICK LINKS</Heading>
            {[
              "Home",
              "Gallery",
              "About Us",
              "Career",
              "Hire Me",
              "Contact Us",
            ].map((link, index) => (
              <Link key={index} href="#" _hover={{ color: "gray.400" }}>
                {link}
              </Link>
            ))}
          </VStack>

          {/* Foundational Courses */}
          <VStack align="start" spacing={3}>
            <Heading size="md">FOUNDATIONAL COURSES</Heading>
            {courses.map((course) => (
              <Text key={course.id}>{course.title}</Text>
            ))}
          </VStack>

          {/* Contact Us */}
          <VStack align="start" spacing={3}>
            <Heading size="md">CONTACT US</Heading>
            <Text>
              <Link href="tel:+911234567890">+91-1234567890</Link> |
              <Link href="tel:+919876543210">+91-9876543210</Link>
            </Text>
            <Text>
              <Link href="mailto:info@codeacademy.in">info@codeacademy.in</Link>
            </Text>
            <Text>
              <Link
                href="https://www.google.co.in/maps/place/CodeAcademy/"
                isExternal
              >
                Near Shivajinagar Metro Station, Pune
              </Link>
            </Text>
            <Text>
              <Link
                href="https://www.google.co.in/maps/place/CodeAcademy/"
                isExternal
              >
                First Floor, Plot No 10, Shivajinagar, Pune, 411005
              </Link>
            </Text>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
