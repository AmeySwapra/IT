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
  FormControl,
  FormLabel,
  Textarea,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import modalbg from "../../assets/modal/modal.bg.avif";
import { useTheme } from "@emotion/react";
const InquiryModal = ({ isOpen, onClose }) => {

  const theme = useTheme();

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
            <Input placeholder="Enter your name" bg="white" color="black" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="black">Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              bg="white"
              color="black"
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="black">Mobile Number</FormLabel>
            <Input
              type="tel"
              placeholder="Enter your mobile number"
              bg="white"
              color="black"
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="black">Select Course</FormLabel>
            <Select placeholder="Choose a course" bg="white" color="black">
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
            <Textarea placeholder="Your message" bg="white" color="black" />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button bg={"text"} color="bg" mr={3} onClick={onClose}>
            Submit
          </Button>
          <Button variant="ghost" bg="bg" color="text" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InquiryModal;
