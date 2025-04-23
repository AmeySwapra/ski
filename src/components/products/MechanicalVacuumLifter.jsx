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
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
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
  
  const MechanicalVacuumLifter = () => {
    const gridColumns = useBreakpointValue({ base: 1, md: 2 });
  
    return (
      <Box w={{ base: "100%", lg: "66.66%" }} p={4}>
        <Box className="news-box">
          {/* Hidden headings for SEO */}
          <Heading as="h1" size="lg" visibility="hidden" height={0} overflow="hidden">
            CE Certified Mechanical Vacuum Lifter Manufacturers in India, Suppliers, Exporters in India, Saudi Arabia, Riyadh, Bahrain, UAE, Dubai, Qatar, Oman, Germany, Ireland, UK
          </Heading>
          <Heading as="h2" size="md" visibility="hidden" height={0} overflow="hidden">
            Mechanical Vacuum Lifter Manufacturers, Suppliers, Exporters in India from Pune, PCMC, Mumbai
          </Heading>
  
          <VStack align="start" spacing={4} fontSize={'xl'} className="content">
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h3" size="xl">
                <blockquote>Mechanical Vacuum Lifter Manufacturers, Suppliers, Exporters in India, Pune, Maharashtra</blockquote>
              </Heading>
            </Box>
  
            <SimpleGrid columns={gridColumns} spacing={4} mb={6}>
              <FallbackImage src="assets/images/products/mechanical-vacuum-lifter.jpg" alt="Mechanical Vacuum Lifter Manufacturers" />
              <FallbackImage src="assets/images/products/mechanical-vacuum-lifter1.jpg" alt="Mechanical Vacuum Lifters in india" />
            </SimpleGrid>
  
            <Text>
              We <Link as={RouterLink} to="/" color="blue.500">Shree Krishna Industries</Link> are the leading Mechanical Vacuum Lifter manufacturers, suppliers, exporters in India from Pune, PCMC. We are also the leading manufacturers, suppliers, exporters of Mechanical Vacuum Lifter in India, Saudi Arabia, Riyadh, Bahrain, UAE, Dubai, Qatar, Oman, Germany, Ireland, UK. Our CE certified Fork Mechanical Vacuum Lifters provide a safe and efficient way to lift, move and transport a variety of objects.
            </Text>
  
            <Text>
              Our Mechanical Vacuum Lifter in India have designed them to be used in a variety of industries, including manufacturing, construction, warehousing, and logistics. These mechanical Lifters are easy to use, with a simple operating system that allows you to lift, move and transport with ease.
            </Text>
  
            <Text>
              Our lifter is designed with an ergonomic handle, allowing for comfortable and controlled movements. It is safe, easy to operate, and can be customized to meet specific requirements.
            </Text>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h4" size="lg">
                <blockquote>Introduction</blockquote>
              </Heading>
            </Box>
  
            <Text>
              <Link as={RouterLink} to="mechanical-vacuum-lifter" color="blue.500">Mechanical Vacuum Lifter</Link> is a type of lifting equipment used for handling objects in various industries. It works by creating a vacuum seal between the object and the lifting surface to lift, move or position it.
            </Text>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h5" size="lg">
                <blockquote>Advanced Properties</blockquote>
              </Heading>
            </Box>
  
            <UnorderedList spacing={2}>
              <ListItem><strong>Customization</strong> – <Link as={RouterLink} to="mechanical-vacuum-lifter" color="blue.500">Mechanical Vacuum Lifter</Link> can be customized based on the specific requirements of the industry, including size, weight capacity, and lifting tools.</ListItem>
              <ListItem><strong>Easy operation</strong> – With the user-friendly interface, the operator can easily control our CE certified Mechanical Vacuum Lifter with simple commands.</ListItem>
              <ListItem><strong>Safety</strong> – Certified Mechanical Vacuum Lifter is designed to ensure the safety of the user, the object being lifted, and the surrounding environment.</ListItem>
              <ListItem><strong>Versatility</strong> – It can be used in various industries, including construction, manufacturing, warehousing, and logistics.</ListItem>
            </UnorderedList>
  
            <SimpleGrid columns={gridColumns} spacing={4} mb={6}>
              <FallbackImage src="assets/images/products/mechanical-vacuum-lifter2.jpg" alt="Mechanical Vacuum Lifter manufacturers india" />
              <FallbackImage src="assets/images/products/mechanical-vacuum-lifter3.jpg" alt="Mechanical Vacuum Lifter manufacturers, suppliers india" />
            </SimpleGrid>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h6" size="lg">
                <blockquote>Specifications</blockquote>
              </Heading>
            </Box>
  
            <Box overflowX="auto">
              <Table variant="striped" colorScheme="gray" borderWidth="1px">
                <Tbody>
                  <Tr>
                    <Td fontWeight="bold">Product Name</Td>
                    <Td>Mechanical Vacuum Lifter</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Brand</Td>
                    <Td>Ski Lifters</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Material Type</Td>
                    <Td>Stainless Steel</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Power Source</Td>
                    <Td>Electric</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Maximum Load Capacity (in Kg)</Td>
                    <Td>Customized</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Usage/ Application</Td>
                    <Td>Industrial</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h6" size="lg">
                <blockquote>Uses of Mechanical Vacuum Lifter</blockquote>
              </Heading>
            </Box>
  
            <UnorderedList spacing={2}>
              <ListItem>Lifting and moving heavy objects such as glass sheets, metal plates, and wooden panels.</ListItem>
              <ListItem>Loading and unloading goods from trucks and containers.</ListItem>
              <ListItem>Positioning components for assembly and fabrication.</ListItem>
              <ListItem>Handling materials in harsh environments where manual lifting is not possible due to safety concerns.</ListItem>
            </UnorderedList>
  
            <Button as={RouterLink} to="/contact-us" colorScheme="red" rightIcon={<ArrowForwardIcon />} mt={4}>
              ENQUIRY NOW
            </Button>
          </VStack>
        </Box>
      </Box>
    );
  };
  
  export default MechanicalVacuumLifter;