import { Box, Container, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const hiringPartners = [
  { id: 1, logo: "https://logo.clearbit.com/google.com", name: "Google" },
  { id: 2, logo: "https://logo.clearbit.com/microsoft.com", name: "Microsoft" },
  { id: 3, logo: "https://logo.clearbit.com/amazon.com", name: "Amazon" },
  { id: 4, logo: "https://logo.clearbit.com/meta.com", name: "Meta (Facebook)" },
  { id: 5, logo: "https://logo.clearbit.com/apple.com", name: "Apple" },
  { id: 6, logo: "https://logo.clearbit.com/netflix.com", name: "Netflix" },
  { id: 7, logo: "https://logo.clearbit.com/tesla.com", name: "Tesla" },
  { id: 8, logo: "https://logo.clearbit.com/adobe.com", name: "Adobe" },
  { id: 9, logo: "https://logo.clearbit.com/ibm.com", name: "IBM" },
  { id: 10, logo: "https://logo.clearbit.com/oracle.com", name: "Oracle" },
  { id: 11, logo: "https://logo.clearbit.com/uber.com", name: "Uber" },
  { id: 12, logo: "https://logo.clearbit.com/twitter.com", name: "X (Twitter)" },
  { id: 13, logo: "https://logo.clearbit.com/salesforce.com", name: "Salesforce" },
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
  { id: 25, logo: "https://logo.clearbit.com/accenture.com", name: "Accenture" },
  { id: 26, logo: "https://logo.clearbit.com/infosys.com", name: "Infosys" },
  { id: 27, logo: "https://logo.clearbit.com/tcs.com", name: "TCS" },
  { id: 28, logo: "https://logo.clearbit.com/wipro.com", name: "Wipro" },
  { id: 29, logo: "https://logo.clearbit.com/cognizant.com", name: "Cognizant" },
  { id: 30, logo: "https://logo.clearbit.com/capgemini.com", name: "Capgemini" },
];

const HiringPartners = () => {
  return (
    <Box bg="bg" overflowX={'hidden'} py={10}>
      <Container maxW="container.xl" textAlign="center">
        <Heading as="h2" fontSize="4xl" color="black" mb={6}>
          Our <Text as='span' color='text'>Hiring Partners</Text>
        </Heading>

        <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={6}>
          {hiringPartners.map((partner) => (
            <Box
              key={partner.id}
              p={4}
              bg="white"
              borderRadius="lg"
              boxShadow="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                boxShadow: `0 0 20px #881fc5`,
              }}
            >
              <Image src={partner.logo} alt={partner.name} maxH="50px" />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default HiringPartners;
