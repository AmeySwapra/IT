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
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import emailjs from "@emailjs/browser";

  const JobApplicationModal = ({ isOpen, onClose, job }) => {
    const toast = useToast();
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
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setFormData({ ...formData, resume: reader.result });
        };
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!formData.resume) {
        toast({
          title: "Error",
          description: "Please upload your resume.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }
  
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_JOB_TEMPLATE_ID,
          {
            fullName: formData.fullName,
            email: formData.email,
            contact: formData.contact,
            resume: formData.resume, 
            portfolio: formData.portfolio,
            coverLetter: formData.coverLetter,
            expectedSalary: formData.expectedSalary,
            noticePeriod: formData.noticePeriod,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
        )
        .then(() => {
          toast({
            title: "Application Submitted",
            description: "Your job application has been sent successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: 'top-right'
          });
          onClose();
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          toast({
            title: "Error",
            description: "There was an error submitting your application.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent
         bgImage="url('/assets/job.avif')"
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
  