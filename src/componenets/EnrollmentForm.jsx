import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Stack,
  Textarea,
  VStack,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const EnrollmentForm = () => {
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
    { id: 2, title: "MERN Stack" },
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
 
  const handleCheckboxChange = (name, values) => {
    console.log(name)
  };
 

  return (
    <Box bg="bg">
      <Container maxW="container.lg" py={10}>
        <Box p={8} boxShadow="lg" borderRadius="lg" bg="white">
          <Heading as="h1" size="xl" color={"text"} textAlign="center" mb={6}>
            Enrollment Form
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
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
                <FormLabel>Phone</FormLabel>
                <Input
                  type="number"
                  name="user_phonenumber"
                  value={formData.user_phonenumber}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Select a Course</FormLabel>
                <Select name="user_course"
                    placeholder="Select a course"
                    value={formData.user_course}
                    onChange={handleChange}>
                  {courses.map((course) => (
                    <option key={course.id} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>I came to know about Code Academy from</FormLabel>
                <CheckboxGroup
                  onChange={(values) =>
                    handleCheckboxChange("referral", values)
                  }
                >
                  <Stack spacing={2} direction="column">
                    {["Newspaper", "Banner", "Social Media", "Google"].map(
                      (source) => (
                        <Checkbox key={source} value={source}>
                          {source}
                        </Checkbox>
                      )
                    )}
                  </Stack>
                </CheckboxGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Message (Optional)</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Message *"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                />
              </FormControl>

              <Button
                type="submit"
                color="white"
                size="lg"
                bg="text"
                w="full"
                borderRadius="full"
                rightIcon={
                  <Image
                    src="https://www.webgurukul.org/assets/img/Right1Arrow.svg"
                    alt="Right arrow"
                    w={5}
                  />
                }
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default EnrollmentForm;
