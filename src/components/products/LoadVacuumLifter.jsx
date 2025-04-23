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
        Image not available
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
  
  const LoadVacuumLifter = () => {
    const gridColumns = useBreakpointValue({ base: 1, md: 2 });
  
    return (
      <Box w={{ base: "100%", lg: "66.66%" }} p={4}>
        <Box className="news-box">
          {/* Hidden headings for SEO */}
          <Heading as="h1" size="lg" visibility="hidden" height={0} overflow="hidden">
            Load Vacuum Lifter Manufacturers, Suppliers, Exporters in India, Saudi Arabia, Riyadh, Bahrain, UAE, Dubai, Qatar, Oman, Germany, Ireland, UK
          </Heading>
          <Heading as="h2" size="md" visibility="hidden" height={0} overflow="hidden">
            Load Vacuum Lifter Manufacturers, Suppliers, Exporters in India from Pune, PCMC, Mumbai, Ahmedabad, Bangalore, Chennai, Hyderabad
          </Heading>
  
          <VStack align="start" spacing={4} fontSize={'xl'} className="content">
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h3" size="xl">
                <blockquote>Load Vacuum Lifter Manufacturers, Suppliers, Exporters in India, Pune, Maharashtra</blockquote>
              </Heading>
            </Box>
  
            <SimpleGrid columns={gridColumns} spacing={4} mb={6}>
              <FallbackImage src="assets/images/products/load-vacuum-lifter.jpg" alt="Load Vacuum Lifter" />
              <FallbackImage src="assets/images/products/load-vacuum-lifter1.jpg" alt="Load Vacuum Lifter in India" />
            </SimpleGrid>
  
            <Text>
              <Link as={RouterLink} to="/" color="blue.500">Shree Krishna Industries</Link> is one of the leading Load Vacuum Lifter manufacturers, suppliers in India from Pune, Maharashtra. We are the best Load Vacuum Lifter Suppliers, Exporters in India, Saudi Arabia, Riyadh, Bahrain, UAE, Dubai, Qatar, Oman, Germany, Ireland, UK. Our CE Certified load vacuum lifters are designed to provide maximum safety, efficiency, and cost-effectiveness when moving heavy, bulky, and awkward-shaped loads.
            </Text>
  
            <Text>
              Our range of vacuum lifters are suitable for a variety of applications such as industrial lifting, material handling, and construction. Our load lifters are designed with the highest quality materials and components to ensure maximum strength and durability.
            </Text>
  
            <Text>
              Load vacuum lifter suppliers and exporters in India provide the lifter which can provide a secure and stable lift for even the most difficult to move loads. These lifters are easy to operate and maintain.
            </Text>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h4" size="lg">
                <blockquote>What is a Load Vacuum Lifter?</blockquote>
              </Heading>
            </Box>
  
            <Text>
              <Link as={RouterLink} to="load-vacuum-lifter" color="blue.500">Load Vacuum Lifter</Link> is a device that is used for the safe handling of non-porous materials like glass sheets, granite slabs, metal sheets, and plastic sheets, etc. It works by creating a vacuum between the object and the device to create a strong suction force, which allows the object to be lifted and moved easily.
            </Text>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h5" size="lg">
                <blockquote>Features</blockquote>
              </Heading>
            </Box>
  
            <UnorderedList spacing={2}>
              <ListItem>Easy to operate: Offered Vacuum Lifter is easy to operate and can be used by a single person.</ListItem>
              <ListItem>Strong suction force: It creates a strong suction force between the object and device, making it easier to lift even heavy objects.</ListItem>
              <ListItem>Safe and secure: CE certified Load Vacuum Lifter ensures the safety and security of the objects being lifted. It prevents objects from slipping or falling while in transit.</ListItem>
              <ListItem>Versatile: It can be used for various materials, including glass, metal, and plastics.</ListItem>
            </UnorderedList>
  
            <SimpleGrid columns={gridColumns} spacing={4} mb={6}>
              <FallbackImage src="assets/images/products/load-vacuum-lifter2.jpg" alt="Load Vacuum Lifter manufacturers, suppliers in India" />
              <FallbackImage src="assets/images/products/load-vacuum-lifter3.jpg" alt="Load Vacuum Lifter manufacturers in India" />
            </SimpleGrid>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h6" size="lg">
                <blockquote>Application</blockquote>
              </Heading>
            </Box>
  
            <UnorderedList spacing={2}>
              <ListItem><strong>Construction works:</strong> It is used to lift and transport heavy construction materials like glass, marble, and granite.</ListItem>
              <ListItem><strong>Manufacturing:</strong> <Link as={RouterLink} to="load-vacuum-lifter" color="blue.500">Load Vacuum Lifters</Link> are used in the manufacturing industry to lift and transport metal sheets, plastic sheets, and other materials.</ListItem>
              <ListItem><strong>Warehousing:</strong> It is used in warehouses to move and stack heavy objects like boxes, drums, and barrels.</ListItem>
              <ListItem><strong>Automotive:</strong> It can lift and transport car windows, windshields, and other large parts.</ListItem>
            </UnorderedList>
  
            <Button as={RouterLink} to="/contact-us" colorScheme="red" rightIcon={<ArrowForwardIcon />} mt={4}>
              ENQUIRY NOW
            </Button>
          </VStack>
        </Box>
      </Box>
    );
  };
  
  export default LoadVacuumLifter;