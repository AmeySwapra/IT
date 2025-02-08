


import { useState } from "react";
import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import girl from '../../assets/avatar/girl.jpg';
import boy from '../../assets/avatar/boy.avif';

const studentsData = [
    { id: 1, name: "Mayank Charpe", company: "Figment Global Solutions Pvt. Ltd.", year: 2024, img: boy },
    { id: 2, name: "Dhanashree Deshmane", company: "Figment Global Solutions Pvt. Ltd.", year: 2024, img: girl },
    { id: 3, name: "Prajyot Bagde", company: "Figment Global Solutions Pvt. Ltd.", year: 2024, img: boy },
    { id: 4, name: "Tejas Ghatbandhe", company: "Figment Global Solutions Pvt. Ltd.", year: 2024, img: boy },
    { id: 5, name: "Kanchan Kothar", company: "Figment Global Solutions Pvt. Ltd.", year: 2024, img: girl },
    { id: 6, name: "Shubham Kalkar", company: "Figment Global Solutions Pvt. Ltd.", year: 2022, img: boy },
    { id: 7, name: "Shubham Kishor Manne", company: "Figment Global Solutions Pvt. Ltd.", year: 2024, img: boy },
    { id: 8, name: "Kshitij Dhopte", company: "Figment Global Solutions Pvt. Ltd.", year: 2023, img: boy },
  
    { id: 9, name: "Aarav Mehta", company: "TCS", year: 2023, img: boy },
    { id: 10, name: "Ishita Sharma", company: "Infosys", year: 2022, img: girl },
    { id: 11, name: "Rohan Gupta", company: "Wipro", year: 2024, img: boy },
    { id: 12, name: "Sneha Kapoor", company: "HCL", year: 2023, img: girl },
    { id: 13, name: "Vihaan Joshi", company: "Google", year: 2022, img: boy },
    { id: 14, name: "Ananya Reddy", company: "Microsoft", year: 2024, img: girl },
    { id: 15, name: "Devansh Nair", company: "Amazon", year: 2023, img: boy },
    { id: 16, name: "Simran Chauhan", company: "Adobe", year: 2022, img: girl },
    { id: 17, name: "Kabir Iyer", company: "Capgemini", year: 2024, img: boy },
    { id: 18, name: "Riya Malhotra", company: "Deloitte", year: 2023, img: girl },
    { id: 19, name: "Yash Rajput", company: "IBM", year: 2022, img: boy },
    { id: 20, name: "Tanisha Verma", company: "Cognizant", year: 2024, img: girl },
    { id: 21, name: "Aryan Saxena", company: "Facebook", year: 2023, img: boy },
    { id: 22, name: "Priya Singh", company: "Oracle", year: 2022, img: girl },
    { id: 23, name: "Arjun Choudhary", company: "Netflix", year: 2024, img: boy },
    { id: 24, name: "Meera Pillai", company: "Paytm", year: 2023, img: girl },
    { id: 25, name: "Ritik Bhardwaj", company: "Ola", year: 2022, img: boy },
    { id: 26, name: "Avni Kulkarni", company: "Flipkart", year: 2024, img: girl },
    { id: 27, name: "Siddharth Yadav", company: "Snapdeal", year: 2023, img: boy },
    { id: 28, name: "Aditi Sinha", company: "Accenture", year: 2022, img: girl },
    { id: 29, name: "Krishna Das", company: "Samsung", year: 2024, img: boy },
    { id: 30, name: "Esha Naik", company: "Siemens", year: 2023, img: girl },
    { id: 31, name: "Aman Chatterjee", company: "Tech Mahindra", year: 2022, img: boy },
    { id: 32, name: "Pooja Bansal", company: "Zomato", year: 2024, img: girl },
    { id: 33, name: "Gaurav Kapoor", company: "Swiggy", year: 2023, img: boy },
    { id: 34, name: "Neha Jain", company: "Uber", year: 2022, img: girl },
    { id: 35, name: "Harsh Mishra", company: "Tesla", year: 2024, img: boy },
    { id: 36, name: "Anushka Patel", company: "Apple", year: 2023, img: girl },
    { id: 37, name: "Vikram Rao", company: "Intel", year: 2022, img: boy },
    { id: 38, name: "Sakshi Tandon", company: "Nvidia", year: 2024, img: girl },
    { id: 39, name: "Nishant Ghosh", company: "LinkedIn", year: 2023, img: boy },
    { id: 40, name: "Jahnavi Shetty", company: "Twitch", year: 2022, img: girl }
  ];

const ITEMS_PER_PAGE = 8;

const PlacedStudents = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredStudents = studentsData.filter(student => student.year === selectedYear);
  const totalPages = Math.ceil(filteredStudents.length / ITEMS_PER_PAGE);
  const paginatedStudents = filteredStudents.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box bg='bg'>
        <Box py={10} px={{ base: 4, md: 8, lg: 24 }} textAlign="center">
      <Heading mb={6}>Our <Text as={'span'} color={'text'}>Placed Students</Text></Heading>
      <Flex justifyContent="center" wrap="wrap" gap={2} mb={6}>
        {[2024, 2023, 2022].map((year) => (
          <Button key={year} bg="text" boxShadow={'lg'} color={'bg'} size={'lg'} onClick={() => { setSelectedYear(year); setCurrentPage(0); }}>
            {year}
          </Button>
        ))}
      </Flex>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6} px={4}>
        {paginatedStudents.map((student) => (
          <Box key={student.id} boxShadow="md" borderRadius="lg" p={4} textAlign="center" bg="white">
            <Image borderRadius="full" boxSize="100px" mx="auto" src={student.img} alt={student.name} />
            <Text mt={3} fontWeight="bold" color="orange.500">{student.name}</Text>
            <Text fontSize="sm">Placed @ {student.company}</Text>
            <Text fontSize="sm">Placement Year: {student.year}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <Flex justifyContent="center" mt={6} gap={4}>
        <Button onClick={prevPage} bg={'text'} color={'bg'} isDisabled={currentPage === 0}>Previous</Button>
        <Button onClick={nextPage} bg={'text'} color={'bg'}  isDisabled={currentPage === totalPages - 1}>Next</Button>
      </Flex>
    </Box>
    </Box>
  );
};

export default PlacedStudents;

