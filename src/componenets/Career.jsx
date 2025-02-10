import { Box, Container, Heading, Text, Button, VStack, Flex, Divider } from "@chakra-ui/react";
import { useState } from "react";
import JobApplicationModal from "./modal/JobApplicationModal";

const jobListings = [
  { id: 1, title: "Full Stack Developer", location: "Pune, India", type: "Full-time" },
  { id: 2, title: "Frontend Developer", location: "Remote", type: "Part-time" },
  { id: 3, title: "Python Instructor", location: "Bangalore, India", type: "Full-time" },
  { id: 4, title: "Data Science Trainer", location: "Delhi, India", type: "Full-time" },
  { id: 5, title: "Cybersecurity Expert", location: "Mumbai, India", type: "Full-time" }
];

const Career = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsOpen(true);
  };

  return (
    <Box bg="bg" color="white" overflowX={'hidden'} py={10}>
      <Container maxW="container.lg" textAlign="center">
        <Heading as="h1" color={'text'} fontSize="4xl" mb={4}>
          Join Our Team
        </Heading>
        <Text fontSize="lg" fontWeight={'bold'} color={'secondary'} mb={8}>
          Explore exciting career opportunities at our IT Training Institute.
        </Text>
        
        <VStack spacing={6} align="stretch">
          {jobListings.map((job) => (
            <Box key={job.id} p={5} bg="text" borderRadius="lg" shadow="lg">
              <Flex justify="space-between" align="center">
                <Box>
                  <Heading as="h3" fontSize="xl">{job.title}</Heading>
                  <Text fontSize="md">{job.location} | {job.type}</Text>
                </Box>
                <Button colorScheme="red" onClick={() => handleApply(job)}>
                  Apply Now
                </Button>
              </Flex>
              <Divider mt={3} />
            </Box>
          ))}
        </VStack>
      </Container>

      <JobApplicationModal isOpen={isOpen} onClose={() => setIsOpen(false)} job={selectedJob} />
    </Box>
  );
};

export default Career;
