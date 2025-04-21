import {
    Box,
    Container,
    Flex,
    Text,
    Heading,
    Icon,
    useBreakpointValue,
    AspectRatio,
  } from "@chakra-ui/react";
  import { FaPlay, FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
  import { useRef, useState } from "react";
  import ReactPlayer from "react-player";
  import video from '../assets/video/video01.mp4';
  
  const TestimonialsSection = () => {
    
    const cardWidthNum = useBreakpointValue({ base: 300, md: 475 });
    const spacingNum = useBreakpointValue({ base: 15, md: 30 });
    const testimonialWidth = `${cardWidthNum}px`;
    const testimonialSpacing = `${spacingNum}px`;
  
    const testimonials = [
      {
        quote:
          "One of the best services providers in vacuum lifter with good quality product.",
        author: "Sagar Hunalli",
      },
      {
        quote:
          "Happy with the solution Given for glass handle by Shree Krishna Industries.",
        author: "S Singh",
      },
      {
        quote:
          "Great support. Happy to buy 1000kg vacuum lifter. Always the best solution for vacuum technology. Manufacturer vacuum lift equipment.",
        author: "Ajay",
      },
    ];
  
    const maxIndex = testimonials.length - 2; 
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handlePrev = () => {
      setActiveIndex(prev => (prev === 0 ? maxIndex : prev - 1));
    };
  
    const handleNext = () => {
      setActiveIndex(prev => (prev === maxIndex ? 0 : prev + 1));
    };
  
    return (
      <Box bg="#f7f6f1" py={16} px={[4,8,24]} position="relative">
        <Container maxW="container.xl">
         
          <Box mb={20} position="relative" borderRadius="lg" overflow="hidden">
            
            <AspectRatio ratio={16 / 9}>
              <ReactPlayer
                url={video}
                playing
                muted
                loop
                playsinline
                width="100%"
                height="100%"
              />
            </AspectRatio>
            <Box
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              bg="black"
              opacity={0.5}
              zIndex={1}
            />
           
            <Box
              as="a"
              href={video}
              target="_blank"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bg="white"
              w="80px"
              h="80px"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              _hover={{ transform: "translate(-50%, -50%) scale(1.1)" }}
              transition="all 0.3s"
              zIndex={2}
            >
              <Icon as={FaPlay} color="black" boxSize={6} />
            </Box>
  
            
            <Box
              position="absolute"
              bottom="20px"
              right="20px"
              zIndex={2}
            >
              
              <Box
                w={`calc(${testimonialWidth} * 2 + ${testimonialSpacing})`}
                overflow="hidden"
              >
                <Flex
                  w={`calc(${testimonialWidth} * ${testimonials.length} + ${testimonialSpacing} * ${testimonials.length - 1})`}
                  transform={`translateX(-${activeIndex * (cardWidthNum + spacingNum)}px)`}
                  transition="transform 0.5s ease"
                >
                  {testimonials.map((t, i) => (
                    <Box
                      key={i}
                      w={testimonialWidth}
                      mr={i < testimonials.length - 1 ? testimonialSpacing : 0}
                      bg="white"
                      p={6}
                      borderRadius="lg"
                      boxShadow="md"
                      flex="none"
                    >
                      <Icon as={FaQuoteLeft} color="#f6a408" boxSize={6} mb={3} />
                      <Text fontSize="md" mb={4} fontStyle="italic">
                        {t.quote}
                      </Text>
                      <Heading as="h6" size="sm" color="gray.600">
                        {t.author}
                      </Heading>
                    </Box>
                  ))}
                </Flex>
              </Box>
           
              <Flex justify="flex-end" mt={2} gap={2}>
                <Box
                  as="button"
                  onClick={handlePrev}
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  bg="#f6a408"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="md"
                  _hover={{ bg: "gray.100" }}
                >
                  <Icon as={FaArrowLeft} boxSize={4} />
                </Box>
                <Box
                  as="button"
                  onClick={handleNext}
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  bg="#f6a408"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="md"
                  _hover={{ bg: "gray.100" }}
                >
                  <Icon as={FaArrowRight} boxSize={4} />
                </Box>
              </Flex>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default TestimonialsSection;
  