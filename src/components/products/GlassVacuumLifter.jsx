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
  
  const GlassVacuumLifter = () => {
    const gridColumns = useBreakpointValue({ base: 1, md: 2 });
  
    return (
      <Box w={{ base: "100%", lg: "66.66%" }} p={4}>
        <Box className="news-box">
          <VStack align="start" spacing={4} fontSize={'xl'} className="content">
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h3" size="xl" fontWeight="light">
                <blockquote>Glass Vacuum Lifter/Glass Lifter Manufacturers, Suppliers, Exporters In India</blockquote>
              </Heading>
            </Box>
  
            <Text>
              Welcome to <Link as={RouterLink} to="/" color="blue.500">Shree Krishna Industries</Link>, located in the heart of Pune, Maharashtra. We pride ourselves as leading manufacturers, suppliers, and exporters of high-quality Glass Vacuum Lifters. With years of expertise and a commitment to innovation, we cater to diverse industries requiring safe and efficient glass handling solutions.
            </Text>
            <Text>
              Whether you need lifters for large sheets of glass or smaller panes, we have a comprehensive range of products to meet your needs. Our lifters are engineered to provide maximum grip and stability, ensuring safe transportation and installation.
            </Text>
  
            <SimpleGrid columns={gridColumns} spacing={4} mb={6}>
              <VStack>
                <FallbackImage src="assets/images/products/glass-vacuum-lifter.jpg" alt="Glass Vacuum Lifter/Glass Lifter Manufacturers" />
                <Button as={RouterLink} to="/contact-us" colorScheme="red" rightIcon={<ArrowForwardIcon />}>
                  ENQUIRY NOW
                </Button>
              </VStack>
              <VStack>
                <FallbackImage src="assets/images/products/glass-vacuum-lifter.jpg" alt="Glass Vacuum Lifter/Glass Lifter Manufacturers" />
                <Button as={RouterLink} to="/contact-us" colorScheme="red" rightIcon={<ArrowForwardIcon />}>
                  ENQUIRY NOW
                </Button>
              </VStack>
            </SimpleGrid>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h4" size="lg">
                <blockquote>Safety Features of Glass Lifters</blockquote>
              </Heading>
            </Box>
  
            <UnorderedList spacing={2}>
              <ListItem><strong>Robust Construction:</strong> Our vacuum lifters are built using durable materials that ensure long-lasting performance, even in demanding environments. They are designed to handle the weight and fragility of glass safely and securely.</ListItem>
              <ListItem><strong>Enhanced Safety:</strong> Safety is our top priority. Our vacuum lifters come equipped with advanced suction technology and safety features that prevent slippage and accidents during lifting and transportation.</ListItem>
              <ListItem><strong>User-Friendly Design:</strong> Designed with the user in mind, our vacuum lifters offer easy operation. With intuitive controls and ergonomic handles, they allow for quick setup and smooth handling of glass sheets.</ListItem>
              <ListItem><strong>Versatile Applications:</strong> Whether you're in construction, automotive, or manufacturing, our vacuum lifters are adaptable to various applications, making them ideal for lifting large panels, windows, and other glass products.</ListItem>
              <ListItem><strong>Custom Solutions:</strong> We understand that each project has unique requirements. Our team works closely with clients to provide customized vacuum lifters tailored to specific dimensions and lifting capacities.</ListItem>
            </UnorderedList>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h5" size="lg">
                <blockquote>Exclusive Features</blockquote>
              </Heading>
            </Box>
  
            <UnorderedList spacing={2}>
              <ListItem><strong>Strong Vacuum Power:</strong> These lifters have powerful suction cups that can hold heavy and fragile glass sheets securely.</ListItem>
              <ListItem><strong>Adjustable Capacity:</strong> A vacuum lifter can be adjusted to fit different sizes and shapes of glass sheets for easy lifting.</ListItem>
              <ListItem><strong>Easy Operation:</strong> <Link as={RouterLink} to="glass-vacuum-lifter" color="blue.500">Glass Vacuum Lifter</Link> is easy to operate and can be controlled from a remote location.</ListItem>
              <ListItem><strong>Safety Features:</strong> The vacuum lifter has safety features to prevent accidents and injuries.</ListItem>
            </UnorderedList>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h6" size="lg">
                <blockquote>Industrial Applications</blockquote>
              </Heading>
            </Box>
  
            <UnorderedList spacing={2}>
              <ListItem>Glass Manufacturing</ListItem>
              <ListItem>Architectural Glass Installation</ListItem>
              <ListItem>Repair and Maintenance of Glass Windows</ListItem>
              <ListItem>Storefront Glass Installation</ListItem>
            </UnorderedList>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h6" size="lg">
                <blockquote>Why Choose Shree Krishna Industries?</blockquote>
              </Heading>
            </Box>
  
            <UnorderedList spacing={2}>
              <ListItem><strong>Expertise:</strong> With years of industry experience, we leverage our knowledge to deliver innovative solutions that meet the highest standards.</ListItem>
              <ListItem><strong>Quality Assurance:</strong> Every vacuum lifter undergoes rigorous testing to ensure it meets stringent quality benchmarks before it reaches our clients.</ListItem>
              <ListItem><strong>Competitive Pricing:</strong> Our commitment to quality does not mean higher costs. We offer competitive pricing without compromising on the integrity of our products.</ListItem>
              <ListItem><strong>Global Network:</strong> As trusted manufacturers and exporters, we cater to clients both domestically and internationally, ensuring timely delivery and excellent service.</ListItem>
            </UnorderedList>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h6" size="lg">
                <blockquote>Product Details</blockquote>
              </Heading>
            </Box>
  
            <Box overflowX="auto">
              <Box as="table" borderWidth="1px" borderColor="gray.200" width="100%">
                <Box as="tbody">
                  <Box as="tr">
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Product Name</Box>
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Glass Vacuum Lifter</Box>
                  </Box>
                  <Box as="tr">
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Brand</Box>
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Ski Lifters</Box>
                  </Box>
                  <Box as="tr">
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Capacity (in kg)</Box>
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">360 – 1440</Box>
                  </Box>
                  <Box as="tr">
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">No of Cups</Box>
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">4 - 16</Box>
                  </Box>
                  <Box as="tr">
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Country Of Origin</Box>
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Made In India</Box>
                  </Box>
                  <Box as="tr">
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Usage</Box>
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Industrial</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
  
            <Text>
              We are Glass Vacuum Lifter Manufacturers, Suppliers, Exporters in India PCMC, Mumbai, Secunderabad, Kolkata, Odisha, Delhi. We are Glass Vacuum Lifter Exporters in Saudi Arabia, Riyadh, Bahrain, UAE, Dubai, Qatar, Oman, Germany, Ireland, UK
            </Text>
          </VStack>
        </Box>
      </Box>
    );
  };
  
  export default GlassVacuumLifter;