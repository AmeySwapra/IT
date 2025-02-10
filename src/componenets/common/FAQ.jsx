import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
const FAQ = () => {
  
    const theme = useTheme();

    const faqs = [
        {
            question: "What courses do you offer?",
            answer: "We offer a variety of coding courses including Web Development, Data Science, Python, JavaScript, and Full-Stack Development."
        },
        {
            question: "Are your courses beginner-friendly?",
            answer: "Yes! We have courses for beginners as well as advanced learners. Our structured curriculum ensures a smooth learning experience."
        },
        {
            question: "Do you provide certificates upon course completion?",
            answer: "Yes, we provide industry-recognized certificates after successfully completing any of our courses."
        },
        {
            question: "How can I enroll in a course?",
            answer: "You can enroll by visiting our website, selecting a course, and completing the registration process."
        },
        {
            question: "Do you offer online classes?",
            answer: "Yes, we offer both online and offline classes to provide flexibility for our students."
        },
        {
            question: "Is there a refund policy?",
            answer: "Yes, we offer a 7-day refund policy if you're not satisfied with the course."
        },
        {
            question: "Do you provide job placement assistance?",
            answer: "Yes, we offer career guidance, resume building, and job placement support for our students."
        },
        {
            question: "What is the duration of the courses?",
            answer: "Course duration varies from 3 months to 1 year, depending on the program."
        },
        {
            question: "What is the mode of payment?",
            answer: "We accept multiple payment methods including credit/debit cards, UPI, bank transfers, and EMI options."
        },
        {
            question: "How can I contact support?",
            answer: "You can reach our support team via email or phone. Visit our website's 'Contact Us' page for details."
        }
    ];

    return (
        <Box bg='bg' overflowX={'hidden'}>
            <Box maxW="1000px" mx="auto"   p={5}>
            <Heading as="h2" fontSize="4xl" textAlign="center" mb={6}>
                Frequently Asked <Text as={'span'} color='text'>Questions</Text>
            </Heading>
            <Accordion allowToggle>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} border={`1px solid ${theme.colors.secondary}`} borderRadius="md" mb={2}>
                        <h2>
                            <AccordionButton _expanded={{ bg: "text", color: "white" }} px={4} py={3}>
                                <Box flex="1" textAlign="left" fontSize={'lg'} fontWeight="bold">
                                    {faq.question}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel p={4} fontSize="lg" color="gray.700">
                            {faq.answer}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
        </Box>
    );
};

export default FAQ;
