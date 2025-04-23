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
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
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
      />
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
  
  const VacuumProduct = () => {
    const gridColumns = useBreakpointValue({ base: 1, md: 2 });
  
    return (
      <Box w={{ base: '100%', lg: '66.66%' }} p={4}>
        <Box className="vacuum-box">
          <Heading as="h1" fontSize="4xl" mb={4}>
            Vacuum Lifter Manufacturers in India
          </Heading>
  
          <SimpleGrid columns={gridColumns} spacing={4} mb={6}>
            <FallbackImage src="assets/images/products/vacuum-lifters.jpg" alt="vacuum-lifter" />
            <FallbackImage src="assets/images/products/vacuum-lifters.jpg" alt="vacuum-lifter" />
          </SimpleGrid>
  
          <VStack align="start" spacing={4} fontSize="xl" className="content">
            <Text>
              We Shree Krishna Industries as a leading Vacuum Lifter Manufacturers in India. With years of expertise and a commitment to quality, we design and manufacture supply, export high-performance vacuum lifters that simplify lifting, moving, and positioning heavy loads across various industries.
            </Text>
  
            <Text>
              A Vacuum Lifter is a tool designed to lift safely and efficiently, and move heavy loads. It utilizes vacuum to generate a strong suction force to securely hold the load in place. Vacuum lifters are versatile and efficient material handling devices used in various industries. They rely on suction technology to securely and gently lift and transport a wide range of materials, such as glass panels, metal sheets, and various products in manufacturing, logistics, and construction.
            </Text>
  
            <Text>
              Vacuum lifters also known as "suction lifter," "vacuum handling equipment," "vacuum gripper," and "vacuum lifting system." These devices enhance workplace safety, minimize manual labor, and improve productivity, making them essential tools in industries where precision, control, and the safe movement of heavy or fragile loads are paramount.
            </Text>
  
            <Box bg="#f6930a" p={6} w="100%">
              <Heading as="h3" size="xl" fontWeight="light">
                <blockquote>Unique Features of Our Vacuum Lifters</blockquote>
              </Heading>
            </Box>
  
            <Text>
              With a focus on engineering excellence, quality assurance, and customer support, Shree Krishna Industries positions itself as a leader in the vacuum lifter market. Our dedication to innovation and sustainability ensures that we meet not only the demands of our clients but also contribute positively to the industry and environment. For more information or inquiries about our products, don’t hesitate to reach out!
            </Text>
  
            <Text>
              What sets Shree Krishna Industries apart from other vacuum lifter manufacturers in India is our focus on customization and innovation. Our vacuum lifters are designed with unique features that enhance performance, such as:
            </Text>
            <UnorderedList>
              <ListItem>Advanced Safety Mechanisms: Ensuring secure lifting and handling of materials.</ListItem>
              <ListItem>Ergonomic Design: Reducing the risk of injuries and improving operator comfort.</ListItem>
              <ListItem>Lightweight and portable fixtures for easy maneuverability.</ListItem>
              <ListItem>High-powered suction for secure lifting.</ListItem>
              <ListItem>Versatility: Capable of handling different materials, shapes, and sizes.</ListItem>
            </UnorderedList>
  
            <Box bg="#f6930a" p={6} w="100%">
              <Heading as="h4" size="lg">
                <blockquote>Expertise in Vacuum Lifter Manufacturing</blockquote>
              </Heading>
            </Box>
  
            <Text>
              With years of experience in the field, our team of experts specializes in the design and manufacture of vacuum lifters. We utilize state-of-the-art technology and adhere to the highest quality standards to ensure that our products are not only efficient but also durable and reliable. Our engineers work diligently to develop solutions that optimize lifting processes across various sectors, including construction, manufacturing, and logistics.
            </Text>
  
            <Text>
              Each vacuum lifter undergoes rigorous testing to ensure it meets international safety and quality standards. We perform load tests, vacuum tests, and operational tests to ensure reliability. Our products comply with European safety regulations and standards, including CE marking, ensuring they meet high quality and safety requirements.
            </Text>
  
            <Box bg="#f6930a" p={6} w="100%">
              <Heading as="h5" size="lg">
                <blockquote>Variety of Models</blockquote>
              </Heading>
            </Box>
  
            <UnorderedList>
              <ListItem>Battery-Powered Vacuum Lifters: Ideal for mobile applications, providing flexibility without the need for external power sources.</ListItem>
              <ListItem>Electric Vacuum Lifters: Designed for heavy-duty applications, these lifters offer consistent power and performance.</ListItem>
              <ListItem>Pneumatic Vacuum Lifters: Perfect for environments where electric solutions may not be feasible, offering reliability and safety.</ListItem>
            </UnorderedList>
  
            <Box bg="#f6930a" p={6} w="100%">
              <Heading as="h5" size="lg">
                <blockquote>Advantages of Choosing Our Vacuum Lifters</blockquote>
              </Heading>
            </Box>
  
            <UnorderedList>
              <ListItem>Increased Efficiency: Streamline your operations and reduce downtime with our quick and effective lifting solutions.</ListItem>
              <ListItem>Cost-Effective: Reduce labor costs and minimize the risk of damage to materials, leading to overall savings.</ListItem>
              <ListItem>Enhanced Productivity: Ability to lift heavy loads with ease, boosting productivity across operations.</ListItem>
            </UnorderedList>
  
            <Box bg="#f6930a" p={6} w="100%">
              <Heading as="h4" size="lg">
                <blockquote>Vacuum Lifter Technical Specification</blockquote>
              </Heading>
            </Box>
  
            <Text>We understand that every industry has unique requirements. Therefore, our vacuum lifters come with a range of specifications, including:</Text>
            <UnorderedList>
              <ListItem>Load Capacity: Ranging from light to heavy-duty options.</ListItem>
              <ListItem>Power Source: Electric, pneumatic, or manual options, depending on your operational needs.</ListItem>
              <ListItem>Size and Dimensions: Customizable to fit your specific application.</ListItem>
            </UnorderedList>
  
            <Table variant="striped" colorScheme="gray">
              <Thead>
                <Tr>
                  <Th>System Type</Th>
                  <Th>Maximum Lifting Capacity</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Horizontal Handling</Td>
                  <Td>150kg, 300kg, 500kg, 750kg, 1000kg, 2200kg</Td>
                </Tr>
              </Tbody>
            </Table>
  
            <Table variant="striped" colorScheme="gray">
              <Thead>
                <Tr>
                  <Th>Vacuum Lifter Type</Th>
                  <Th>Suction Cup Nos.</Th>
                  <Th>Workpiece Size (mm)</Th>
                  <Th>Suction Cup Dia.</Th>
                  <Th>Type</Th>
                  <Th>Voltage</Th>
                  <Th>Wt. Approx.</Th>
                </Tr>
              </Thead>
              <Tbody>
                {[
                  { cap: '150kg', nos: '2/4', size: '1250*2500', dia: '250', type: 'Electric', volt: 'Single Phase', wt: '50kgs' },
                  { cap: '300kg', nos: '4/6', size: '1250*2500', dia: '250', type: 'Electric', volt: 'Single Phase', wt: '75kgs' },
                  { cap: '500kg', nos: '6/8', size: '1500*3000', dia: '250', type: 'Electric', volt: 'Single Phase', wt: '100kgs' },
                  { cap: '750kg', nos: '6/8', size: '1500*3000', dia: '250', type: 'Electric', volt: 'Single Phase', wt: '120kgs' },
                  { cap: '1000kg', nos: '8/10', size: '1500*4000', dia: '250', type: 'Electric', volt: 'Single Phase', wt: '200kgs' },
                  { cap: '2200kg', nos: '10/16', size: '2000*6000', dia: '250', type: 'Electric', volt: 'Single Phase', wt: '350kgs' },
                ].map((row) => (
                  <Tr key={row.cap}>
                    <Td>{row.cap}</Td>
                    <Td>{row.nos}</Td>
                    <Td>{row.size}</Td>
                    <Td>{row.dia}</Td>
                    <Td>{row.type}</Td>
                    <Td>{row.volt}</Td>
                    <Td>{row.wt}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
  
            <Box bg="#f6930a" p={6} w="100%">
              <Heading as="h3" size="xl" fontWeight="light">
                <blockquote>Why Choose Shree Krishna Industries?</blockquote>
              </Heading>
            </Box>
  
            <Text>
              At Shree Krishna Industries, we prioritize quality above all else. Our vacuum lifters are crafted using premium-grade materials and advanced technology, ensuring durability and reliability even in the most demanding environments.
            </Text>
            <Text>
              Our team of experts works closely with clients to design and deliver customized vacuum lifters tailored to specific needs, ensuring optimal performance and efficiency.
            </Text>
            <Text>
              Safety is at the core of our designs. Our vacuum lifters are equipped with advanced safety features and ergonomic principles, minimizing the risk of workplace injuries while enhancing productivity.
            </Text>
            <Text>
              As a leading Vacuum Lifter Manufacturer in India, we offer competitive pricing without compromising on quality. Our solutions are designed to provide maximum value for your investment.
            </Text>
  
            <Button as={RouterLink} to="/contact-us" colorScheme="red" rightIcon={<ArrowForwardIcon />}>
              ENQUIRY NOW
            </Button>
  
            <Text pt={6} fontSize="sm" color="gray.500">
              Tags: Vacuum Lifter Manufacturers in India | Vacuum Lifter Suppliers in India | Vacuum Lifter Exporters in India | Vacuum Lifters in India
            </Text>
          </VStack>
        </Box>
      </Box>
    );
  };
  
  export default VacuumProduct;
  