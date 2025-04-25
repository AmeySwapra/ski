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
import { useState, useEffect } from 'react';


const productImages = [
  'vacuum-lifters.jpg',
      'glass-vacuum-lifter.jpg',
      'industrial-vacuum-lifter.jpg',
      'electric-vacuum-lifter.jpg',
      'mechanical-vacuum-lifter.jpg',
      'load-vacuum-lifter.jpg',
      'slab-vacuum-lifter.jpg',
      'stone-vacuum-lifter.jpg',
      'electric-vacuum-glass-lifter.jpg',
      'plate-vacuum-lifter.jpg',
      'pneumatic-vacuum-lifter.jpg',
      'slab-lifter.jpg',
      'billet-lifter.jpg',
      'block-lifter.jpg',
      'drum-lifters.jpg',
      'glass-lifter.jpg',
      'metal-sheet-lifters.jpg',
      'vacuum-block-lifter.jpg',
      'server-lifter.jpg',
      'vacuum-clamp.jpg',
      'scissor-clamp-lifter.jpg',
      'pipe-bar-handling-clamp.jpg',
      'drum-handling-clamp.jpg',
      'fork-mounted-vacuum-lifting.jpg',
      'horizontal-lifting.jpg',
      'pipe-lifting-equipment.jpg',
      'lifting-equipment.jpg',
      'fork-mounted-vacuum-lifting-attachment.jpg',
      'vacuum-table.jpg',
      'metal-sheet-wooden-board-storage-tower.jpg',
      'de-palletizer.jpg',
      'air-vacuum-generator.jpg',
      'marble-vacuum-lifter.jpg',
      'graphite-vacuum-lifter.jpg',
      'wind-turbine-blade-vacuum-lifter.jpg',
      'blade-lifters-for-windmill.jpg',
      'vacuum-lifting-solution.jpg',
      'vacuum-lifting-technologies-for-wind-energy-industry.jpg',
      'vacuum-forklift-attachment.jpg',
      'portable-vacuum-lifter-equipment.jpg',
];

const FallbackImage = ({ src, alt }) => {
  const [isError, setIsError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isElectricVacuumLifterPage, setIsElectricVacuumLifterPage] = useState(false);

  useEffect(() => {
 
    const path = window.location.pathname;
    console.log(path)
    setIsElectricVacuumLifterPage(path.includes('electric-vacuum-lifter'));
    
   
    if (!path.includes('electric-vacuum-lifter')) {
      const randomIndex = Math.floor(Math.random() * productImages.length);
      setCurrentSrc(`/assets/images/products/${productImages[randomIndex]}`);
    }
  }, []);

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
        src={isElectricVacuumLifterPage ? src : currentSrc}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onError={() => setIsError(true)}
      />
    </Box>
  );
};

const ElectricVacuumLifter = () => {
  const gridColumns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <Box w={{ base: "100%", lg: "66.66%" }} p={4}>
      <Box className="news-box">
        <VStack align="start" spacing={4} fontSize={'xl'} className="content">
          <Box bg={'#f6930a'} p={6} w="full">
            <Heading as="h3" size="xl">
              <blockquote>CE Certified Electric Vacuum Lifter Manufacturers, Suppliers, Exporters in India</blockquote>
            </Heading>
          </Box>

          <SimpleGrid columns={gridColumns} spacing={4} mb={6}>
            <FallbackImage src="/assets/images/products/electric-vacuum-lifter.jpg" alt="Electric Vacuum Lifter" />
            <FallbackImage src="/assets/images/products/electric-vacuum-lifter.jpg" alt="Electric Vacuum Lifter" />
          </SimpleGrid>

          <Text>
            <Link as={RouterLink} to="/" color="blue.500">Shree Krishna Industries</Link> is one of the leading Electric Vacuum Lifter Manufacturers, Suppliers, Exporters in India, Saudi Arabia, Riyadh, Bahrain, UAE, Dubai, Qatar, Oman, Germany, Ireland, UK. Our team has developed innovative electric vacuum lifters in India to meet today's demanding needs. We are the best CE Certified Electric Vacuum Lifter Manufacturers, Suppliers, Exporters in India, Pune, PCMC, Mumbai, Ahmedabad, Bangalore, Chennai, Hyderabad, Secunderabad, Kolkata, Odisha, Jaipur, Indore, Bhopal, Delhi, Coimbatore, Gurugram.
          </Text>

          <Text>
            We provide a range of different types of CE Certified Electric Vacuum Lifters to suit every application, making us a one-stop shop for all your lifting needs. Our Electric Lifters are designed to provide efficient, safe, and reliable handling of a variety of materials.
          </Text>

          <Text>
            We use the latest technologies and materials to ensure that our products are of the highest standard. Our Electric Vacuum Lifters are ideal for use in the construction industry, for lifting heavy objects such as building materials, machinery, and products. These are also used in the manufacturing industry for lifting and handling products.
          </Text>

          <Box bg={'#f6930a'} p={6} w="full">
            <Heading as="h4" size="lg">
              <blockquote>What is an Electric Vacuum Lifter?</blockquote>
            </Heading>
          </Box>

          <Text>
            An <Link as={RouterLink} to="electric-vacuum-lifter" color="blue.500">Electric Vacuum Lifter</Link> is a material handling equipment that uses vacuum suction to lift and move objects, mainly heavy and bulky items such as glass sheets, metal plates, and wooden boards. It is powered by an electric motor that creates a vacuum seal between the lifter's pad and the object to be lifted.
          </Text>

          <Box bg={'#f6930a'} p={6} w="full">
            <Heading as="h5" size="lg">
              <blockquote>Exclusive Features</blockquote>
            </Heading>
          </Box>

          <UnorderedList spacing={2}>
            <ListItem><strong>Lift capacity:</strong> Electric vacuum lifters come in various lift capacities, ranging from a few hundred pounds to several tons.</ListItem>
            <ListItem><strong>Versatility:</strong> These are versatile as they can be used to lift various shapes and sizes of objects, including curved and rough surfaces.</ListItem>
            <ListItem><strong>Safety:</strong> Our lifters are designed with safety features such as audio-visual alarms and automatic shut-off systems to prevent accidents.</ListItem>
            <ListItem><strong>Ease of use:</strong> These can be easily operated by one person, reducing the need for multiple workers, and are also easy to maintain, requiring little maintenance.</ListItem>
          </UnorderedList>

          <SimpleGrid columns={gridColumns} spacing={4} mb={6}>
            <FallbackImage src="/assets/images/products/electric-vacuum-lifter.jpg" alt="Electric Vacuum Lifter" />
            <FallbackImage src="/assets/images/products/electric-vacuum-lifter.jpg" alt="Electric Vacuum Lifter" />
          </SimpleGrid>

          <Box bg={'#f6930a'} p={6} w="full">
            <Heading as="h5" size="lg">
              <blockquote>Applications &amp; Uses</blockquote>
            </Heading>
          </Box>

          <UnorderedList spacing={2}>
            <ListItem><strong>Construction:</strong> These are used to lift and install glass panels, tiles, and other building materials in construction sites.</ListItem>
            <ListItem><strong>Manufacturing:</strong> <Link as={RouterLink} to="electric-vacuum-lifter" color="blue.500">Electric Vacuum Lifters</Link> in India are used in the assembly process of large products like automobiles, airplanes, and trailers.</ListItem>
            <ListItem><strong>Transportation:</strong> They aid in the loading and unloading of cargo in trucks, ships, and trains.</ListItem>
            <ListItem><strong>Warehousing:</strong> These are useful in the handling of heavy inventory items, such as crates and boxes, in warehouses.</ListItem>
          </UnorderedList>

          <Button as={RouterLink} to="/contact-us" colorScheme="red" rightIcon={<ArrowForwardIcon />} mt={4}>
            ENQUIRY NOW
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default ElectricVacuumLifter;