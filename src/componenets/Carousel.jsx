import React, { useState, useRef } from "react";
import {
  Box,
  IconButton,
  Stack,
  Heading,
  Container,
  Text,
  Skeleton,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";


const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
      },
    },
  ],
};

export default function Carousel() {
  const [slider, setSlider] = useState(null);

  const courses = [
    { 
      id: 1, 
      title: "Fullstack Python", 
      overview: "Learn full-stack web development with Python, Django, and Flask.", 
      image: "https://logo.clearbit.com/python.org"
    },
    { 
      id: 2, 
      title: "MERN Stack", 
      overview: "Master MongoDB, Express.js, React, and Node.js for modern web applications.", 
      image: "https://logo.clearbit.com/reactjs.org"
    },
    { 
      id: 3, 
      title: "Data Science", 
      overview: "Gain expertise in data analysis, machine learning, and visualization using Python and R.", 
      image: "https://logo.clearbit.com/kaggle.com"
    },
    { 
      id: 4, 
      title: "C Language", 
      overview: "Understand the fundamentals of C programming and memory management.", 
      image: "https://logo.clearbit.com/cprogramming.com"
    },
    { 
      id: 5, 
      title: "Data Structure Using CPP", 
      overview: "Learn essential data structures like arrays, linked lists, stacks, and trees in C++.", 
      image: "https://logo.clearbit.com/cplusplus.com"
    },
    { 
      id: 6, 
      title: "C++ Language", 
      overview: "Master C++ programming, object-oriented concepts, and STL.", 
      image: "https://logo.clearbit.com/cplusplus.com"
    },
    { 
      id: 7, 
      title: "Machine Learning", 
      overview: "Understand ML algorithms, supervised & unsupervised learning, and neural networks.", 
      image: "https://logo.clearbit.com/tensorflow.org"
    },
    { 
      id: 8, 
      title: "Azure Certification | Microsoft Azure", 
      overview: "Get certified in Microsoft Azure and learn cloud computing essentials.", 
      image: "https://logo.clearbit.com/microsoft.com"
    },
    { 
      id: 9, 
      title: "Software Testing", 
      overview: "Learn manual and automated software testing methodologies.", 
      image: "https://logo.clearbit.com/selenium.dev"
    },
    { 
      id: 10, 
      title: "Fullstack Java", 
      overview: "Become a full-stack Java developer with Spring Boot and Angular/React.", 
      image: "https://logo.clearbit.com/java.com"
    },
    { 
      id: 11, 
      title: "Cloud & DevOPS (AWS)", 
      overview: "Learn AWS cloud computing, Docker, Kubernetes, and CI/CD pipelines.", 
      image: "https://logo.clearbit.com/aws.amazon.com"
    },
    { 
      id: 12, 
      title: "Data Analytics", 
      overview: "Analyze and visualize data using SQL, Python, and Power BI.", 
      image: "https://logo.clearbit.com/powerbi.microsoft.com"
    }
  ];
  

  

  return (
    <Box
      position="relative"
      height={{ base: "400px", md: "600px" }}
      width="full"
      overflow="hidden"
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Arrow (Desktop Only) */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={{ base: "-9999px", md: "40px" }}
        top="50%"
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" color="white" />
      </IconButton>

      {/* Right Arrow (Desktop Only) */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={{ base: "-9999px", md: "40px" }}
        top="50%"
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" color="white" />
      </IconButton>

      {/* Carousel Slider */}
      <Slider {...settings} ref={(c) => setSlider(c)}>
        {courses.map((course, index) => (
           
           <Box
  key={index}
  height={{ base: "400px", md: "600px" }}
  position="relative"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
  backgroundSize="cover"
  backgroundImage={`url(${course.image})`}
  
  
>
<Skeleton isLoaded={Boolean(course.image)}>
    {/* Course Content */}
  </Skeleton>
            {/* Dark Overlay */}
           
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              backgroundColor="rgba(0, 0, 0, 0.4)" 
            />

            {/* Content Container */}
            <Container size="container.xl" height="100%" position="relative">
              <Stack
                spacing={4}
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                color="white"
                textAlign="center"
                width={{ base: "90%", md: "70%" }}
              >
                {/* Title */}
                <Heading
                  fontSize={{ base: '30px', md: '45px', lg: '58px' }}
                  lineHeight="shorter"
                  letterSpacing="wide"
                >
                  {course.title}
                  
                </Heading>

                {/* Overview Text */}
                <Text fontSize={{ base: "16px", md: "20px" }} fontWeight="medium">
                  {course.overview}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}