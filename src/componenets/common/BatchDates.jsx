import { Box, Text, Table, Thead, Tr, Th, Tbody, Td, useBreakpointValue, VStack } from "@chakra-ui/react";

const BatchDates = ({ course }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box mt={6} p={4} border={"1px solid black"} bg="white" borderRadius="md" boxShadow="md">
      <Text fontSize="3xl" textAlign={"center"} fontWeight="bold" mb={4} color="text">
        Batch Dates:
      </Text>

      {isMobile ? (
     
        <VStack spacing={4} align="stretch">
          <Box p={4} border="1px solid black" borderRadius="lg" boxShadow="lg">
            <Text fontSize="xl"  fontWeight="bold">Fast Track</Text>
            <Text color="text" ><strong>Days:</strong> {course.courseDuration[0].fastTrackBatch.days}</Text>
            <Text color="text"><strong>Hours:</strong> {course.courseDuration[0].fastTrackBatch.hour}</Text>
            <Text color="text"><strong>Start Date:</strong> {course.batchs[0].fastTrackBatch.date}</Text>
          </Box>

          <Box p={4} border="1px solid black" borderRadius="md" boxShadow="sm">
            <Text fontSize="xl" fontWeight="bold">Normal</Text>
            <Text color="text"><strong>Days:</strong> {course.courseDuration[0].NormalBatch.days}</Text>
            <Text color="text"><strong>Hours:</strong> {course.courseDuration[0].NormalBatch.hour}</Text>
            <Text color="text"><strong>Start Date:</strong> {course.batchs[0].NormalBatch.date}</Text>
          </Box>
        </VStack>
      ) : (
        
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Batch Type</Th>
              <Th>Days</Th>
              <Th>Hours</Th>
              <Th>Start Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Fast Track</Td>
              <Td>{course.courseDuration[0].fastTrackBatch.days}</Td>
              <Td>{course.courseDuration[0].fastTrackBatch.hour}</Td>
              <Td>{course.batchs[0].fastTrackBatch.date}</Td>
            </Tr>
            <Tr>
              <Td>Normal</Td>
              <Td>{course.courseDuration[0].NormalBatch.days}</Td>
              <Td>{course.courseDuration[0].NormalBatch.hour}</Td>
              <Td>{course.batchs[0].NormalBatch.date}</Td>
            </Tr>
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default BatchDates;
