import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { 
  AiOutlineTrophy, 
  AiOutlineTeam, 
  AiOutlinePlayCircle, 
  AiOutlineBook, 
  AiOutlineGlobal 
} from "react-icons/ai";


const gradients = [
  "linear(to-r, #FF5733, #FF8C33)",
  "linear(to-r, #33C3FF, #338AFF)",
  "linear(to-r, #FFC300, #FFD700)",
  "linear(to-r, #4CAF50, #00C853)",
  "linear(to-r, #9C27B0, #D500F9)"
];

const stats = [
  { id: 1, count: 3500000, text: "Careers Advanced", suffix: "+", icon: AiOutlineTrophy },
  { id: 2, count: 3000, text: "Qualified Trainers", suffix: "+", icon: AiOutlineTeam },
  { id: 3, count: 3500, text: "Live Classes per month", suffix: "+", icon: AiOutlinePlayCircle },
  { id: 4, count: 500, text: "Courses", suffix: "+", icon: AiOutlineBook },
  { id: 5, count: 100, text: "Global Accreditations", suffix: "+", icon: AiOutlineGlobal },
];

const Counter = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <Box bg="bg" py={12} px={{base: 4, md: 8, lg: 16}} textAlign="center" ref={ref}>
      <Heading fontSize="4xl" color="text" mb={8} fontFamily="heading">
        Our Achievements 🚀
      </Heading>

      <Flex wrap="wrap" justify="center" gap={8}>
        {stats.map((item, index) => {
          const MotionBox = motion(Box);
          return (
            <MotionBox
              key={item.id}
              bgGradient={gradients[index]}
              p={6}
              borderRadius="xl"
              boxShadow="xl"
              minW="230px"
              textAlign="center"
              color="white"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ duration: 0.4 }}
              _hover={{ boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.6)" }}
            >
              <Box mb={4}>
                <item.icon size={50} />
              </Box>
              <Heading fontSize="3xl" fontFamily="heading">
                {inView ? <CountUp start={0} end={item.count} duration={3} separator="," /> : "0"}
                {item.suffix}
              </Heading>
              <Text fontSize="lg" fontFamily="body" mt={2}>
                {item.text}
              </Text>
            </MotionBox>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Counter;




