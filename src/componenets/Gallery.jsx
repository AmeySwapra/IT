import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  Button,
  VStack,
} from "@chakra-ui/react";

const Gallery = () => {
    const allImages = [
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=300",
        "https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?w=300",
        "https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?w=300",
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?w=300",
        "https://images.pexels.com/photos/3747206/pexels-photo-3747206.jpeg?w=300",
        "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?w=300",
        "https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?w=300",
        "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?w=300",
        "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?w=300",
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?w=300",
        "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?w=300",
        "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?w=300",
        "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?w=300",
        "https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?w=300",
        "https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg?w=300",
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?w=300",
        "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?w=300",
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?w=300",
        "https://images.pexels.com/photos/3183161/pexels-photo-3183161.jpeg?w=300",
        "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?w=300",
        "https://images.pexels.com/photos/3747483/pexels-photo-3747483.jpeg?w=300",
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=300",
        "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?w=300",
        "https://images.pexels.com/photos/3197395/pexels-photo-3197395.jpeg?w=300",
        "https://images.pexels.com/photos/3182760/pexels-photo-3182760.jpeg?w=300",
        "https://images.pexels.com/photos/3202231/pexels-photo-3202231.jpeg?w=300",
        "https://images.pexels.com/photos/3202241/pexels-photo-3202241.jpeg?w=300",
        "https://images.pexels.com/photos/3184176/pexels-photo-3184176.jpeg?w=300",
        "https://images.pexels.com/photos/3183154/pexels-photo-3183154.jpeg?w=300",
        "https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?w=300",
        "https://images.pexels.com/photos/3885571/pexels-photo-3885571.jpeg?w=300",
        "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?w=300",
        "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?w=300",
        "https://images.pexels.com/photos/3748220/pexels-photo-3748220.jpeg?w=300"
    ];
    
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showAll ? allImages : allImages.slice(0, 10);

  return (
    <Box bg="bg" py={10} px={{base: 4, md: 8, lg: 24}}>
      <Container maxW="container.xl">
        {/* Introduction Section */}
       
        <VStack spacing={8} align="stretch">
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={8}
            alignItems="center"
          >
            <Box>
              <Heading fontSize="4xl"  mb={3} color="black">
                Welcome to Code Academy, <Text as={'span'} color={'text'}>Pune</Text>
              </Heading>
              <Text fontSize="xl">
                Code Academy, Pune, is a leading IT training institute that
                provides hands-on learning in software development, data
                analytics, cloud computing, and cybersecurity. Our goal is to
                prepare students for industry-ready careers through practical
                learning and real-world projects.
              </Text>
            </Box>
            <Image
              src="https://img.freepik.com/premium-photo/joyful-diverse-business-colleagues-watching-funny-videos_926199-2880249.jpg?uid=R142969143&ga=GA1.1.1421314315.1728888920&semt=ais_incoming" 
              alt="Students at Code Academy"
              borderRadius="lg"
              loading="lazy"
              w={{base: '100%', md: '80%'}}
            />
          </Grid>

          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={8}
            alignItems="center"
          >
            <Image
              src="https://img.freepik.com/premium-photo/young-woman-professional-showing-thumbs-up-while-sitting-her-office-desk_658385-35.jpg?uid=R142969143&ga=GA1.1.1421314315.1728888920&semt=ais_incoming"
              alt="IT Lab"
              borderRadius="lg"
              loading="lazy"
              w={{base: '100%', md: '100%'}}
            />
            <Box>
              <Heading fontSize="4xl" mb={3} color="black">
                Learn from Industry  <Text as={'span'} color={'text'}>Experts</Text>
              </Heading>
              <Text fontSize="xl">
                Our trainers are experienced professionals from leading tech
                companies. With expert mentorship and practical projects, we
                ensure that our students gain in-depth knowledge of software
                development, machine learning, and cloud technologies.
              </Text>
            </Box>
          </Grid>
        </VStack>

        {/* Gallery Section */}
        <Heading
          fontSize="4xl"
          textAlign="center"
          mt={10}
          mb={6}
          color="black"
        >
          Institute <Text as={'span'} color={'text'}>Gallery</Text>
        </Heading>

        <Grid
          templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
          gap={2}
          autoRows="minmax(100px, auto)"
        >
          {displayedImages.map((image, index) => {
          
            const colSpan = Math.random() > 0.7 ? 2 : 1;
            const rowSpan = Math.random() > 0.7 ? 2 : 1;

            return (
              <GridItem
                key={index}
                colSpan={colSpan}
                rowSpan={rowSpan}
                overflow="hidden"
              >
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  objectFit="cover"
                  borderRadius="md"
                  w="100%"
                  h="100%"
                  loading="lazy" 
                />
              </GridItem>
            );
          })}
        </Grid>

      
        <Box textAlign="center" mt={6}>
          <Button color={'bg'} bg={'text'} size={'lg'} onClick={() => setShowAll(!showAll)}>
            {showAll ? "View Less" : "View More"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;
