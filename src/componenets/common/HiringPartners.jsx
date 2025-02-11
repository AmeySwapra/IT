import React from "react";
import { Box, Container, Heading, Text, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const hiringPartners = [
  { id: 1, logo: "https://logo.clearbit.com/google.com", name: "Google" },
  { id: 2, logo: "https://logo.clearbit.com/microsoft.com", name: "Microsoft" },
  { id: 3, logo: "https://logo.clearbit.com/amazon.com", name: "Amazon" },
  {
    id: 4,
    logo: "https://logo.clearbit.com/meta.com",
    name: "Meta (Facebook)",
  },
  { id: 5, logo: "https://logo.clearbit.com/apple.com", name: "Apple" },
  { id: 6, logo: "https://logo.clearbit.com/netflix.com", name: "Netflix" },
  { id: 7, logo: "https://logo.clearbit.com/tesla.com", name: "Tesla" },
  { id: 8, logo: "https://logo.clearbit.com/adobe.com", name: "Adobe" },
  { id: 9, logo: "https://logo.clearbit.com/ibm.com", name: "IBM" },
  { id: 10, logo: "https://logo.clearbit.com/oracle.com", name: "Oracle" },
  { id: 11, logo: "https://logo.clearbit.com/uber.com", name: "Uber" },
  {
    id: 12,
    logo: "https://logo.clearbit.com/twitter.com",
    name: "X (Twitter)",
  },
  {
    id: 13,
    logo: "https://logo.clearbit.com/salesforce.com",
    name: "Salesforce",
  },
  { id: 14, logo: "https://logo.clearbit.com/intel.com", name: "Intel" },
  { id: 15, logo: "https://logo.clearbit.com/nvidia.com", name: "NVIDIA" },
  { id: 16, logo: "https://logo.clearbit.com/spotify.com", name: "Spotify" },
  { id: 17, logo: "https://logo.clearbit.com/cisco.com", name: "Cisco" },
  { id: 18, logo: "https://logo.clearbit.com/zoom.us", name: "Zoom" },
  { id: 19, logo: "https://logo.clearbit.com/shopify.com", name: "Shopify" },
  { id: 20, logo: "https://logo.clearbit.com/airbnb.com", name: "Airbnb" },
  { id: 21, logo: "https://logo.clearbit.com/siemens.com", name: "Siemens" },
  { id: 22, logo: "https://logo.clearbit.com/samsung.com", name: "Samsung" },
  { id: 23, logo: "https://logo.clearbit.com/hp.com", name: "HP" },
  { id: 24, logo: "https://logo.clearbit.com/dell.com", name: "Dell" },
  {
    id: 25,
    logo: "https://logo.clearbit.com/accenture.com",
    name: "Accenture",
  },
  { id: 26, logo: "https://logo.clearbit.com/infosys.com", name: "Infosys" },
  { id: 27, logo: "https://logo.clearbit.com/tcs.com", name: "TCS" },
  { id: 28, logo: "https://logo.clearbit.com/wipro.com", name: "Wipro" },
  {
    id: 29,
    logo: "https://logo.clearbit.com/cognizant.com",
    name: "Cognizant",
  },
  {
    id: 30,
    logo: "https://logo.clearbit.com/capgemini.com",
    name: "Capgemini",
  },
];

const settings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: false,
  swipe: false,
  draggable: true,
  variableWidth: true, 
};

const HiringPartners = () => {
  return (
    <Box bg="bg" overflow="hidden" py={10}>
      <Container maxW="container.xl" textAlign="center">
        <Heading as="h2" fontSize="4xl" color="black" mb={6}>
          Our{" "}
          <Text as="span" color="text">
            Hiring Partners
          </Text>
        </Heading>

        {/* Row 1 */}
        <Slider {...settings}>
          {hiringPartners.map((partner) => (
            <Box
            key={partner.id}
            p={4}
            bg="white"
            borderRadius="lg"
            m={5} 
            width="350px" 
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "0 0 20px #881fc5",
            }}
            >
              <Image src={partner.logo} alt={partner.name} maxH="70px" />
            </Box>
          ))}
        </Slider>

        {/* Row 2 (reversed order for variation) */}
        <Slider {...settings} rtl={true}>
          {hiringPartners.reverse().map((partner) => (
            <Box
            key={partner.id}
            p={4}
            bg="white"
            borderRadius="lg"
            m={5} 
            width="350px" 
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "0 0 20px #881fc5",
            }}
            >
              <Image src={partner.logo} alt={partner.name} maxH="70px" />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default HiringPartners;
