import React from "react";
import { Box, Image, Text, Heading, VStack, IconButton } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import girl from '../../assets/avatar/girl.jpg';
import boy from '../../assets/avatar/boy.avif';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTheme } from "@emotion/react";

const studentsData = [
    { id: 1, name: "Mayank Charpe", company: "Figment Global Solutions Pvt. Ltd.", year: 2024, img: boy, testimonial: "The best learning experience at Code Academy!" },
    { id: 2, name: "Dhanashree Deshmane", company: "Figment Global Solutions Pvt. Ltd.", year: 2024, img: girl, testimonial: "Code Academy helped me secure my dream job!" },
    { id: 3, name: "Prajyot Bagde", company: "Figment Global Solutions Pvt. Ltd.", year: 2024, img: boy, testimonial: "Amazing mentors and great learning environment." },
    { id: 4, name: "Tejas Ghatbandhe", company: "Figment Global Solutions Pvt. Ltd.", year: 2024, img: boy, testimonial: "Practical knowledge made all the difference!" },
    { id: 5, name: "Kanchan Kothar", company: "Figment Global Solutions Pvt. Ltd.", year: 2024, img: girl, testimonial: "Code Academy gave me the confidence to excel." },
    { id: 6, name: "Shubham Kalkar", company: "Figment Global Solutions Pvt. Ltd.", year: 2022, img: boy, testimonial: "The projects were industry-level, great exposure!" },
    { id: 7, name: "Shubham Kishor Manne", company: "Figment Global Solutions Pvt. Ltd.", year: 2024, img: boy, testimonial: "Incredible hands-on learning at Code Academy!" },
    { id: 8, name: "Kshitij Dhopte", company: "Figment Global Solutions Pvt. Ltd.", year: 2023, img: boy, testimonial: "I landed a great job thanks to their training." },
    { id: 9, name: "Aarav Mehta", company: "TCS", year: 2023, img: boy, testimonial: "Code Academy made learning fun and effective." },
    { id: 10, name: "Ishita Sharma", company: "Infosys", year: 2022, img: girl, testimonial: "The best decision of my career was joining Code Academy!" },
    { id: 11, name: "Rohan Gupta", company: "Wipro", year: 2024, img: boy, testimonial: "Supportive mentors and excellent curriculum." },
    { id: 12, name: "Sneha Kapoor", company: "HCL", year: 2023, img: girl, testimonial: "From beginner to pro, Code Academy guided me." },
    { id: 13, name: "Vihaan Joshi", company: "Google", year: 2022, img: boy, testimonial: "I got placed at Google, all thanks to Code Academy!" },
    { id: 14, name: "Ananya Reddy", company: "Microsoft", year: 2024, img: girl, testimonial: "Industry-focused training helped me a lot." },
    { id: 15, name: "Devansh Nair", company: "Amazon", year: 2023, img: boy, testimonial: "The best coding academy for career growth!" },
    { id: 16, name: "Simran Chauhan", company: "Adobe", year: 2022, img: girl, testimonial: "Excellent courses with real-world applications." },
    { id: 17, name: "Kabir Iyer", company: "Capgemini", year: 2024, img: boy, testimonial: "Practical learning that makes a difference." },
    { id: 18, name: "Riya Malhotra", company: "Deloitte", year: 2023, img: girl, testimonial: "Supportive faculty and excellent placements." },
    { id: 19, name: "Yash Rajput", company: "IBM", year: 2022, img: boy, testimonial: "Code Academy shaped my career for the better!" },
    { id: 20, name: "Tanisha Verma", company: "Cognizant", year: 2024, img: girl, testimonial: "A wonderful learning journey at Code Academy." },
    { id: 21, name: "Aryan Saxena", company: "Facebook", year: 2023, img: boy, testimonial: "I gained industry-level experience here!" },
    { id: 22, name: "Priya Singh", company: "Oracle", year: 2022, img: girl, testimonial: "Hands-on projects prepared me for the real world." },
    { id: 23, name: "Arjun Choudhary", company: "Netflix", year: 2024, img: boy, testimonial: "Code Academy took my skills to the next level!" },
    { id: 24, name: "Meera Pillai", company: "Paytm", year: 2023, img: girl, testimonial: "From zero to hero, thanks to Code Academy." },
    { id: 25, name: "Ritik Bhardwaj", company: "Ola", year: 2022, img: boy, testimonial: "An amazing journey of learning and growth!" },
    { id: 26, name: "Avni Kulkarni", company: "Flipkart", year: 2024, img: girl, testimonial: "Code Academy helped me land my first job." },
    { id: 27, name: "Siddharth Yadav", company: "Snapdeal", year: 2023, img: boy, testimonial: "The placement support was outstanding!" },
    { id: 28, name: "Aditi Sinha", company: "Accenture", year: 2022, img: girl, testimonial: "Code Academy transformed my coding skills!" },
    { id: 29, name: "Krishna Das", company: "Samsung", year: 2024, img: boy, testimonial: "They focus on real-world skills and projects." },
    { id: 30, name: "Esha Naik", company: "Siemens", year: 2023, img: girl, testimonial: "The best training experience of my life." },
    { id: 31, name: "Aman Chatterjee", company: "Tech Mahindra", year: 2022, img: boy, testimonial: "I highly recommend Code Academy to all!" },
    { id: 32, name: "Pooja Bansal", company: "Zomato", year: 2024, img: girl, testimonial: "Code Academy made coding so much fun!" },
    { id: 33, name: "Gaurav Kapoor", company: "Swiggy", year: 2023, img: boy, testimonial: "Incredible faculty and support system." },
    { id: 34, name: "Neha Jain", company: "Uber", year: 2022, img: girl, testimonial: "A life-changing experience at Code Academy!" },
    { id: 35, name: "Harsh Mishra", company: "Tesla", year: 2024, img: boy, testimonial: "Innovative and practical learning approach." },
    { id: 36, name: "Anushka Patel", company: "Apple", year: 2023, img: girl, testimonial: "I feel confident in my coding skills now." },
    { id: 37, name: "Vikram Rao", company: "Intel", year: 2022, img: boy, testimonial: "Great mentors who guide you at every step!" },
    { id: 38, name: "Sakshi Tandon", company: "Nvidia", year: 2024, img: girl, testimonial: "Code Academy taught me industry best practices." },
    { id: 39, name: "Nishant Ghosh", company: "LinkedIn", year: 2023, img: boy, testimonial: "An excellent academy for aspiring developers." },
    { id: 40, name: "Jahnavi Shetty", company: "Twitch", year: 2022, img: girl, testimonial: "Joining Code Academy was the best decision." }
];


const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "40px" } },
        { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "20px" } }
    ]
};

const StudentList = () => {
    const sliderRef = React.useRef(null);
    const theme = useTheme();
    return (
        <VStack overflowX={'hidden'} bg="bg" spacing={8} px={{base: 4, md: 8, lg: 24}} py={10} align="center">
            <Heading fontSize="4xl" textAlign="center">
                Our <Text as="span" color="text">Successful Students</Text>
            </Heading>
            <Box w="full" maxW="1200px" position="relative">
                <IconButton
                    icon={<FaArrowLeft />}
                    position="absolute"
                    left="-50px"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex="10"
                    display={{base: 'none', md: 'block'}}
                    color={'bg'}
                    bg={'text'}
                    onClick={() => sliderRef.current?.slickPrev()}
                    aria-label="Previous"
                />
                <Slider ref={sliderRef} {...sliderSettings}>
                    {studentsData.map((student) => (
                        <Box key={student.id} p={6} borderRadius="lg" boxShadow="lg" bg="white" mx={1} textAlign="center">
                            <Image 
                                src={student.img} 
                                alt={student.name} 
                                boxSize="100px" 
                                borderRadius="full" 
                                mx="auto" 
                                border={`3px solid ${theme.colors.text}`}  
                                boxShadow={`3px 3px 30px ${theme.colors.text}`} 
                            />
                            <Text fontSize="lg" fontWeight="bold" mt={3}>{student.name}</Text>
                            <Text fontSize="sm" color="gray.600"><strong>Company:</strong> {student.company}</Text>
                            <Text fontSize="sm" color="gray.600"><strong>Year:</strong> {student.year}</Text>
                            <Text fontStyle="italic" mt={3} color="gray.700">"{student.testimonial}"</Text>
                        </Box>
                    ))}
                </Slider>
                <IconButton
                    icon={<FaArrowRight />}
                    position="absolute"
                    right="-50px"
                    top="50%"
                    transform="translateY(-50%)"
                    color={'bg'}
                    bg={'text'}
                    display={{base: 'none', md: 'block'}}
                    zIndex="10"
                    onClick={() => sliderRef.current?.slickNext()}
                    aria-label="Next"
                />
            </Box>
        </VStack>
    );
};

export default StudentList;
