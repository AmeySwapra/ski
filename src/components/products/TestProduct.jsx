import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    Link,
    UnorderedList,
    ListItem,
    Button,
    useBreakpointValue,
    Flex,
  } from '@chakra-ui/react';
  import { ArrowForwardIcon } from '@chakra-ui/icons';
  import { Link as RouterLink } from 'react-router-dom';
  import { useState } from 'react';
  
  
  const FallbackImage = ({ src, alt }) => {
    const [isError, setIsError] = useState(false);
  
    return isError ? (
      <Box
        width="300px"
        height="250px"
        bg="gray.800"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="gray.500"
        fontSize="sm"
        border="1px solid"
        borderColor="gray.300"
      >
       
      </Box>
    ) : (
      <Box w="100%" maxW="300px" h="250px">
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={() => setIsError(true)}
        />
      </Box>
    );
  };
  
  const TestProduct = () => {
    const gridColumns = useBreakpointValue({ base: 1, md: 2 });
  
    return (
      <Box w={{ base: "100%", lg: "66.66%" }} p={4}>
        <Box className="news-box">
          <Heading as="h1" fontSize="4xl" mb={4}>
            Blade Lifters &amp; Blade Lifting Services for Windmill Manufacturers and Suppliers in India from Pune
          </Heading>
  
          <SimpleGrid columns={gridColumns} spacing={4} mb={6}>
            <FallbackImage src="images/products/billet-lifter.jpg" alt="billet-lifter" />
            <FallbackImage src="images/products/billet-lifter.jpg" alt="billet-lifter" />
          </SimpleGrid>
  
          <VStack align="start" spacing={4} fontSize={'xl'} className="content">
            <Text>
              We are CE Certified Blade Lifters &amp; Blade Lifting Services for Windmill or Lifters Manufacturers,
              Suppliers, Exporters from India in Pune, PCMC, Mumbai, Ahmedabad, Bangalore, Chennai, Hyderabad,
              Secunderabad, Kolkata, Odisha, Jaipur, Indore, Bhopal, Delhi, Gurugram, Coimbatore, etc. We are also Blade
              Lifters &amp; Blade Lifting Services for Windmill Manufacturers, Suppliers, Exporters India, Saudi Arabia,
              Riyadh, Bahrain, UAE, Dubai, Qatar, Oman, Germany, Ireland, UK.
            </Text>
  
           <Box bg={'#f6930a'} p={6}>
           <Heading as="h3" size="xl" fontWeight="light">
              <blockquote>CE Certified Blade Lifters &amp; Blade Lifting Services for Windmill Manufacturers, Suppliers &amp; Exporters In India</blockquote>
            </Heading>
           </Box>
  
            <Text>
              Welcome to <Link as={RouterLink} to="/" color="blue.500">Shree Krishna Industries</Link>, where we specialize in providing CE certified blade
              lifters and blade lifting services in India. Our blade lifters manufacturers, suppliers, &amp; exporters in
              India work diligently to ensure that your blades are lifted safely and securely, while our cutting-edge
              technology ensures that the job is completed quickly and efficiently.
            </Text>
            <Text>
              With our state-of-the-art equipment, you can rest assured that your blades will be lifted with precision and
              accuracy. We understand the complexity of lifting blades, which is why we have developed a wide range of
              solutions to meet the diverse needs of our clients.
            </Text>
            <Text>
              We also offer customized solutions for unique requirements, so no matter what kind of blade lifting service
              you need, Shree Krishna Industries is here to help.
            </Text>
  
           <Box bg={'#f6930a'} p={6}>
           <Heading as="h4" size="lg">
              <blockquote>An Overview</blockquote>
            </Heading>
           </Box>
  
            <Text>
              <Link as={RouterLink} to="#" color="blue.500">Blade Lifters</Link> are an innovative solution to the problem of windmill blade
              maintenance. This service is designed to help businesses save time and money by lifting blades for repair and
              maintenance without the need for costly cranes or other heavy-duty machinery.
            </Text>
            <Text>
              Blade Lifters provide various features to make blade lifting easier and more efficient. These features include
              a modular design, adjustable height, adjustable speed, remote control operation, and safety features.
            </Text>
            <Text>
              These features make it possible for businesses to lift blades quickly and safely in order to minimize
              downtime during repairs or maintenance.
            </Text>
  
            <SimpleGrid columns={gridColumns} spacing={4}>
              <FallbackImage src="images/products/billet-lifter.jpg" alt="billet-lifter" />
              <FallbackImage src="images/products/billet-lifter.jpg" alt="billet-lifter" />
            </SimpleGrid>
  
            <Box bg={'#f6930a'} p={6}>
            <Heading as="h5" size="lg">
              <blockquote>Uses</blockquote>
            </Heading>
            </Box>
            <Text>
              <Link as={RouterLink} to="#" color="blue.500">Blade Lifting Services</Link> for Windmill can be used in a variety of
              applications including:
            </Text>
  
            <UnorderedList>
              <ListItem>Routine inspections.</ListItem>
              <ListItem>Blade replacement.</ListItem>
              <ListItem>Blade cleaning.</ListItem>
              <ListItem>Blade balancing, and more</ListItem>
            </UnorderedList>
  
            <Text>
              This service can help businesses save time and money on windmill maintenance while ensuring that their blades
              remain safe and secure throughout the process.
            </Text>
  
            <Button as={RouterLink} to="/contact-us" colorScheme="red" rightIcon={<ArrowForwardIcon />}>
              ENQUIRY NOW
            </Button>
          </VStack>
        </Box>
      </Box>
    );
  };
  
  export default TestProduct;
  