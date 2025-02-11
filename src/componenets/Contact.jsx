import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  SimpleGrid,
  Icon,
  Link,
  Text,
  Card,
  CardBody,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaHome } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useTheme } from "@emotion/react";
const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_phonenumber: "",
    user_email: "",
    user_course: "",
    message: "",
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Success!",
            description: "Your message has been sent successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
          setFormData({
            user_name: "",
            user_phonenumber: "",
            user_email: "",
            user_course: "",
            message: "",
          });
        },
        (error) => {
          toast({
            title: "Error!",
            description: "Something went wrong. Please try again.",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

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

  const theme = useTheme();

  return (
    <Box bg={"bg"} overflowX={"hidden"}>
      <Container maxW="container.xl" px={{ base: 4, md: 8, lg: 20 }} py={10}>
        <Heading as="h2" textAlign="left" mb={1}>
          Course Enrollment or{" "}
          <Text as={"span"} color={"text"}>
            Inquiry
          </Text>
        </Heading>
        <Text textAlign="left" mb={6}>
          Your details will not be shared. Compulsory fields are marked.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Card
            bg="white"
            p={6}
            borderRadius="lg"
            _hover={{
              boxShadow: `10px 10px ${theme.colors.text}`,
              transform: "translateY(-5px) scale(1.05)",
              transition: "all 2s ease-out",
            }}
          >
            <CardBody>
              <VStack spacing={4} as="form" onSubmit={handleSubmit}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="user_name"
                    placeholder="Name *"
                    value={formData.user_name}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Mobile No.</FormLabel>
                  <Input
                    type="tel"
                    name="user_phonenumber"
                    placeholder="Phone Number"
                    maxLength={10}
                    value={formData.user_phonenumber}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    value={formData.user_email}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Select Course</FormLabel>
                  <Select
                    name="user_course"
                    placeholder="Select a course"
                    value={formData.user_course}
                    onChange={handleChange}
                  >
                    {courses.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="Message *"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </FormControl>

                <VStack spacing={3} width="full">
                  <Button
                    type="submit"
                    bg={"text"}
                    color={"white"}
                    width="full"
                  >
                    Submit
                  </Button>
                  <Button
                    type="reset"
                    color={"black"}
                    bg={"white"}
                    width="full"
                    onClick={() =>
                      setFormData({
                        user_name: "",
                        user_phonenumber: "",
                        user_email: "",
                        user_course: "",
                        message: "",
                      })
                    }
                  >
                    Reset
                  </Button>
                </VStack>
              </VStack>
            </CardBody>
          </Card>

          <Card p={6} bg="bg" boxShadow={"lg"}>
            <CardBody>
              <Heading as="h3" size="lg" mb={4}>
                Address Details
              </Heading>
              <VStack align="start" spacing={"50px"}>
                <Flex alignItems="center">
                  <Box
                    bg="#00cbf3"
                    p={2}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaPhoneAlt} color="white" w={6} h={6} />
                  </Box>
                  <VStack align="start" spacing={0} ml={3}>
                    <Text fontWeight="bold">Call us directly:</Text>
                    <Link href="tel:+919890655874">+91 989 065 5874</Link>
                    <Link href="tel:+917385619448">+91 738 561 9448</Link>
                  </VStack>
                </Flex>
                <Flex alignItems="center">
                  <Box
                    bg="#f68c1f"
                    p={2}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaEnvelope} color="white" w={6} h={6} />
                  </Box>
                  <VStack align="start" spacing={0} ml={3}>
                    <Text fontWeight="bold">Email us directly:</Text>
                    <Link href="mailto:info@swapratechnologies.com">
                      info@swapratechnologies.com
                    </Link>
                    <Link href="mailto:swapratechnologies@gmail.com">
                      swapratechnologies@gmail.com
                    </Link>
                  </VStack>
                </Flex>
              </VStack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;
