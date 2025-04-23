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
  
  const IndustrialVacuumLifter = () => {
    const gridColumns = useBreakpointValue({ base: 1, md: 2 });
  
    return (
      <Box w={{ base: "100%", lg: "66.66%" }} p={4}>
        <Box className="news-box">
          <VStack align="start" spacing={4} fontSize={'xl'} className="content">
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h1" size="xl" fontWeight="light">
                <blockquote>Industrial Vacuum Lifter Manufacturers, Suppliers, Exporters India</blockquote>
              </Heading>
            </Box>
  
            <Text>
              We <Link as={RouterLink} to="/" color="blue.500">Shree Krishna Industries</Link> are proud to introduce ourselves as the leading manufacturers, suppliers, and exporters of industrial vacuum lifters in India, based in the vibrant city of Pune, Maharashtra.
            </Text>
  
            <Text>
              With a strong commitment to innovation and quality, we have established ourselves as pioneers in the industry, providing our clients with cutting-edge solutions for their material handling needs. Our range of industrial vacuum lifters is designed to offer unmatched efficiency, reliability, and safety, making it the ideal choice for various applications across different industries.
            </Text>
  
            <SimpleGrid columns={gridColumns} spacing={4} mb={6}>
              <VStack>
                <FallbackImage src="assets/images/products/industrial-vacuum-lifter.jpg" alt="Industrial Vacuum Lifter" />
              </VStack>
              <VStack>
                <FallbackImage src="assets/images/products/industrial-vacuum-lifter.jpg" alt="Industrial Vacuum Lifter" />
              </VStack>
            </SimpleGrid>
  
            <Text>
              As manufacturers, we take pride in our state-of-the-art manufacturing facility, equipped with the latest technology and machinery. Our team of skilled engineers and technicians work diligently to ensure that each vacuum lifter is crafted to perfection, meeting the highest quality standards. We understand that every industry has unique requirements, which is why we offer customized solutions tailored to meet your specific needs.
            </Text>
  
            <Text>
              In addition to manufacturing, we also serve as trusted suppliers of industrial vacuum lifters. We maintain a vast inventory of products, ensuring prompt delivery and efficient service to our valued customers. Our dedicated team of professionals is always ready to assist you in selecting the right vacuum lifter for your application, providing expert guidance and support throughout the process.
            </Text>
  
            <Text>
              As exporters, we take pride in our ability to provide our world-class products to customers around the globe. We have built strong partnerships with international shipping companies, enabling us to deliver our vacuum lifters safely and efficiently to your doorstep, no matter where you are located.
            </Text>
  
            <Text>
              Whether you are in the manufacturing, construction, or logistics industry, our industrial vacuum lifters are designed to streamline your operations, improve productivity, and enhance workplace safety.
            </Text>
  
            <Text>
              So, if you are in search of reliable, high-quality industrial vacuum lifters, look no further. Contact us today and let us help you find the perfect solution for all your material handling needs. As the leading industrial vacuum lifter manufacturers, suppliers, and exporters in India, we are here to serve you with excellence.
            </Text>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h2" size="lg">
                <blockquote>Industrial Vacuum Lifter</blockquote>
              </Heading>
            </Box>
  
            <Text>
              <Link as={RouterLink} to="/" color="blue.500">Shree Krishna Industries</Link> is one of the leading industrial vacuum lifter manufacturers, suppliers, exporters in India, Pune, PCMC, Mumbai, Ahmedabad, Bangalore, Chennai, Hyderabad, Secunderabad, Kolkata, Odisha, Jaipur, Indore, Bhopal, Delhi, Coimbatore, Gurugram. Our CE Certified industrial vacuum lifters are designed to provide maximum efficiency, safety and reliability to our customers. We are the best Industrial Vacuum Lifter Manufacturers, Suppliers, Exporters in India, Saudi Arabia, Riyadh, Bahrain, UAE, Dubai, Qatar, Oman, Germany, Ireland, UK.
            </Text>
  
            <Text>
              We understand that industrial vacuum lifters are essential pieces of equipment for any industry, so our CE certified industrial vacuum lifter suppliers in India strive to provide the best quality products and services to our customers.
            </Text>
  
            <Text>
              Our industrial vacuum lifters are built using the latest technology and materials. These are designed to provide superior performance and reliability, and are built to last for years. Our lifters are available in a variety of sizes and capacities, so you can find the perfect one for your needs.
            </Text>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h3" size="lg">
                <blockquote>What is an Industrial Vacuum Lifter?</blockquote>
              </Heading>
            </Box>
  
            <Text>
              Certified Industrial Vacuum Lifter is a device used to lift and manipulate heavy objects by using a vacuum-powered suction cup. It is commonly used in manufacturing, construction, and logistics industries to transport materials and finished products.
            </Text>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h4" size="lg">
                <blockquote>Specialities of Industrial Vacuum Lifter</blockquote>
              </Heading>
            </Box>
  
            <UnorderedList spacing={2}>
              <ListItem><strong>Flexibility:</strong> Industrial Vacuum Lifters manufactured in India are highly adaptable and can be used to lift a wide range of materials, including glass, metal, plastics, and more. The suction cups can be customized to fit the specific shape and size of the object being lifted.</ListItem>
              <ListItem><strong>Durability:</strong> These lifters are built to withstand harsh working conditions and heavy use. The suction cups are made from high-quality materials and are designed to last for years.</ListItem>
              <ListItem><strong>Safety:</strong> Our CE certified Industrial vacuum lifters in Pune, India are designed with safety in mind. It has features such as automatic shut-off valves and alarms to prevent accidents, and can be operated by a single person, reducing the risk of injury.</ListItem>
              <ListItem><strong>Efficiency:</strong> It can improve productivity by speeding up the lifting and transporting process. These can lift heavy objects quickly and easily, reducing the time and labor required for manual lifting.</ListItem>
            </UnorderedList>
  
            <SimpleGrid columns={gridColumns} spacing={4} mb={6}>
              <FallbackImage src="assets/images/products/industrial-vacuum-lifter.jpg" alt="Industrial Vacuum Lifter" />
              <FallbackImage src="assets/images/products/industrial-vacuum-lifter.jpg" alt="Industrial Vacuum Lifter" />
            </SimpleGrid>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h5" size="lg">
                <blockquote>Specifications</blockquote>
              </Heading>
            </Box>
  
            <Box overflowX="auto">
              <Box as="table" borderWidth="1px" borderColor="gray.200" width="100%">
                <Box as="tbody">
                  <Box as="tr">
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Product Name</Box>
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Industrial Vacuum Lifter</Box>
                  </Box>
                  <Box as="tr">
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Brand</Box>
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Ski Lifters</Box>
                  </Box>
                  <Box as="tr">
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Suction Pads</Box>
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">2 - 12</Box>
                  </Box>
                  <Box as="tr">
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Maximum Rated Load Capacity (in kg)</Box>
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">10000 kg</Box>
                  </Box>
                  <Box as="tr">
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Country of Origin</Box>
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Made in India</Box>
                  </Box>
                  <Box as="tr">
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Usage</Box>
                    <Box as="td" p={2} borderWidth="1px" borderColor="gray.200">Industrial</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
  
            <Box bg={'#f6930a'} p={6} w="full">
              <Heading as="h6" size="lg">
                <blockquote>Uses</blockquote>
              </Heading>
            </Box>
  
            <UnorderedList spacing={2}>
              <ListItem>Lifting heavy objects such as metal sheets, glass panels, and plastic parts in manufacturing facilities.</ListItem>
              <ListItem>Transporting and loading finished products onto trucks for shipping in logistics and distribution centers.</ListItem>
              <ListItem>Installing windows and other building materials on construction sites.</ListItem>
              <ListItem>Handling large pieces of artwork and fragile objects in museums and exhibition centers.</ListItem>
            </UnorderedList>
  
            <Button as={RouterLink} to="/contact-us" colorScheme="red" rightIcon={<ArrowForwardIcon />} mt={4}>
              ENQUIRY NOW
            </Button>
          </VStack>
        </Box>
      </Box>
    );
  };
  
  export default IndustrialVacuumLifter;