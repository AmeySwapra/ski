import { Box, Image, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import bgImage from '../../assets/banner/pic1.png';
import logo from '../../assets/logo/logo.png';

const Brochure = () => {
  const handleDownload = () => {
    window.open('/assets/pdf/ski-lifter-brochure.pdf');
  };

  
 

  return (
    <Box
      as="section"
      position="relative"
      minH="400px"  
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="white"
      overflow="hidden"
    >
     
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="#0b0b0b"
        backgroundImage={`url(${bgImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        zIndex={0}
      />
      
    
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.100"
        zIndex={0}
      />

      {/* Content */}
      <VStack spacing={6} maxW="container.md" mx="auto" px={4} zIndex={1}>
        <Image 
          src={logo} 
          alt="Company Logo" 
          maxW="120px" 
          mx="auto" 
          mb={4}
        />

        <Heading as="h2" fontSize={{ base: '3xl', md: '6xl' }} fontWeight="bold">
          Download{' '}
          <Box
            as="span"
            sx={{
              WebkitTextStroke: '2px #f6a408',
              textStroke: '1px #f6a408',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            Catalogue
          </Box>
        </Heading>

        <Text fontSize={{ base: 'md', md: 'xl' }} maxW="2xl">
          Best quality Vacuum Lifters/Vacuum Lifter Manufacturers, Suppliers, Exporters.
        </Text>

        <Button
          bg="#f6a408"
          color="black"
          px={8}
          py={6}
          fontWeight="bold"
          rightIcon={<FaArrowRight />}
          _hover={{ bg: '#e69707', transform: 'scale(1.05)' }}
          onClick={handleDownload}
        >
          DOWNLOAD HERE
        </Button>
      </VStack>
    </Box>
  );
};

export default Brochure;