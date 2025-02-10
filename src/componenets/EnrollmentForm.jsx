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
} from "@chakra-ui/react";
import { useState } from "react";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    courses: [],
    referral: [],
    message: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (name, values) => {
    setFormData({ ...formData, [name]: values });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
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
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Phone</FormLabel>
                <Input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Select a Course</FormLabel>
                <Select placeholder="Select course">
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
