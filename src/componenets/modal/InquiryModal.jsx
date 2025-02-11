import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Input,
  useToast,
  FormControl,
  FormLabel,
  Textarea,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import modalbg from "../../assets/modal/modal.bg.avif";
import { useTheme } from "@emotion/react";
import emailjs from "@emailjs/browser";
const InquiryModal = ({ isOpen, onClose }) => {

  const theme = useTheme();


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

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent
        bgImage={`url(${modalbg})`}
        bgSize="cover"
        bgPosition="center"
        color="white"
      >
        <ModalHeader textAlign="center" color="black">
          Course Enrollment or Inquiry
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel color="black">Name</FormLabel>
            <Input
                    type="text"
                    name="user_name"
                    placeholder="Name *"
                    value={formData.user_name}
                    onChange={handleChange}
                    color='secondary'
                  />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="black">Email</FormLabel>
            <Input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    value={formData.user_email}
                    onChange={handleChange}
                    color='secondary'
                  />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="black">Mobile Number</FormLabel>
            <Input
                    type="tel"
                    name="user_phonenumber"
                    placeholder="Phone Number"
                    maxLength={10}
                    value={formData.user_phonenumber}
                    onChange={handleChange}
                  />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="black">Select Course</FormLabel>
            <Select  name="user_course"  value={formData.user_course}  onChange={handleChange}  placeholder="Choose a course" bg="white" color="black">
              {courses.map((course) => (
                <option
                  key={course.id}
                  value={course.title}
                  _hover={{
                    bg: theme.colors.hover,
                    color: theme.colors.white,
                  }}
                >
                  {course.title}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="black">Message</FormLabel>
            <Textarea name="message"  value={formData.message} onChange={handleChange} placeholder="Your message" bg="white" color="black" />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button bg={"text"} color="bg" mr={3} onClick={handleSubmit}>
            Submit
          </Button>
          <Button type="reset"
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
                    }>
            Reset
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InquiryModal;
