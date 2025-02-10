import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import modalbg from '../../../public/assets/job.avif'
  const JobApplicationModal = ({ isOpen, onClose, job }) => {
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      contact: "",
      resume: null,
      portfolio: "",
      coverLetter: "",
      expectedSalary: "",
      noticePeriod: "",
    });
  
    const handleChange = (e) => {
      const { name, value, type, files } = e.target;
      setFormData({
        ...formData,
        [name]: type === "file" ? files[0] : value,
      });
    };
  
    const handleSubmit = () => {
      console.log("Submitted Data:", formData);
      onClose();
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent
          bgImage={`url(${modalbg})`}
                  bgSize="cover"
                  bgPosition="center"
                  color="white"
        >
          <ModalHeader textAlign={'center'} color={'black'} >Apply for {job?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody color={'black'}>
            <FormControl mb={3}>
              <FormLabel >Full Name</FormLabel>
              <Input name="fullName" value={formData.fullName} onChange={handleChange} />
            </FormControl>
  
            <FormControl mb={3}>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            </FormControl>
  
            <FormControl mb={3}>
              <FormLabel>Contact Number</FormLabel>
              <Input name="contact" value={formData.contact} onChange={handleChange} />
            </FormControl>
  
            <FormControl mb={3}>
              <FormLabel>Upload Resume</FormLabel>
              <Input type="file" name="resume" onChange={handleChange} />
            </FormControl>
  
            <FormControl mb={3}>
              <FormLabel>Portfolio (Optional)</FormLabel>
              <Input name="portfolio" value={formData.portfolio} onChange={handleChange} />
            </FormControl>
  
            <FormControl mb={3}>
              <FormLabel>Cover Letter</FormLabel>
              <Textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} />
            </FormControl>
  
            <FormControl mb={3}>
              <FormLabel>Expected Salary</FormLabel>
              <Input name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} />
            </FormControl>
  
            <FormControl mb={3}>
              <FormLabel>Notice Period</FormLabel>
              <Input name="noticePeriod" value={formData.noticePeriod} onChange={handleChange} />
            </FormControl>
          </ModalBody>
  
          <ModalFooter>
            <Button color="bg" bg={'text'} onClick={handleSubmit}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default JobApplicationModal;
  