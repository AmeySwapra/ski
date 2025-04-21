import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    Link,
    VStack,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
  
  const products = [
    { label: "Vacuum Lifter For Tiles", link: "vacuum-lifter-manufacturers-for-tiles.php" },
    { label: "Vacuum Lifter For Concrete", link: "vacuum-lifter-manufacturers-for-concrete.php" },
    { label: "Vacuum Lifter For Wood", link: "vacuum-lifter-manufacturers-for-wood.php" },
    { label: "Vacuum Lifters For Panel", link: "vacuum-lifters-for-panel.php" },
    { label: "Vacuum Lifters For Heavy Material", link: "vacuum-lifters-for-heavy-material.php" },
    { label: "Vacuum Lifters For Industrial Use", link: "vacuum-lifters-for-industrial-use.php" },
    { label: "Vacuum Lifters For Construction Site", link: "vacuum-lifters-for-construction-site.php" },
    { label: "Vacuum Lifters For Warehouse", link: "vacuum-lifters-for-warehouse.php" },
    { label: "Sheet Storage Rack", link: "sheet-storage-rack.php" },
    { label: "Sheet Storage Roll Out Racks", link: "sheet-storage-roll-out-racks.php" },
    { label: "Puff Panel Lifter", link: "puff-panel-lifter.php" },
    { label: "Roof Panel Lifter", link: "roof-panel-lifter.php" },
    { label: "Vacuum Grippers", link: "vacuum-grippers.php" },
    { label: "Server Lifter", link: "server-lifter-in-india.php" },
    { label: "Vacuum Solar Panel Lifters", link: "vacuum-solar-panel-lifters.php" },
  ];
  
  const locations = [
    { label: "Mumbai", link: "mumbai/index.php" },
    { label: "Ahmedabad", link: "ahmedabad/index.php" },
    { label: "Bangalore", link: "bangalore/index.php" },
    { label: "Chennai", link: "chennai/index.php" },
    { label: "Hyderabad", link: "hyderabad/index.php" },
    { label: "Secunderabad", link: "secunderabad/index.php" },
    { label: "Kolkata", link: "kolkata/index.php" },
    { label: "Jaipur", link: "jaipur/index.php" },
    { label: "Indore", link: "indore/index.php" },
    { label: "Bhopal", link: "bhopal/index.php" },
    { label: "Delhi", link: "delhi/index.php" },
    { label: "Gurugram", link: "gurugram/index.php" },
    { label: "Coimbatore", link: "coimbatore/index.php" },
    { label: "Saudi Arabia", link: "saudi-arabia/index.php" },
    { label: "Riyadh", link: "riyadh/index.php" },
    { label: "Bahrain", link: "bahrain/index.php" },
    { label: "UAE", link: "uae/index.php" },
    { label: "Dubai", link: "dubai/index.php" },
    { label: "Qatar", link: "qatar/index.php" },
    { label: "Oman", link: "oman/index.php" },
    { label: "Germany", link: "germany/index.php" },
    { label: "Ireland", link: "ireland/index.php" },
    { label: "UK", link: "uk/index.php" },
  ];
  
  const CommonProducts = () => {
    return (
      <Box bg="#f7f6f1" py={10} px={[4, 8, 24]}>
        <Container maxW="7xl">
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            OUR PRODUCTS
          </Heading>
  
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            {products.map((product, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                _hover={{ boxShadow: "lg", transform: "scale(1.02)", bg: '#f6a408' }}
                transition="0.3s"
                textAlign="center"
                bg="black"
                color={'white'}
              >
                <Link href={product.link} fontWeight="bold" fontSize="md">
                  {product.label}
                </Link>
              </Box>
            ))}
          </SimpleGrid>
  
          <Heading as="h2" size="xl" textAlign="center" mt={16} mb={4}>
            Shree Krishna Industries Vacuum Lifter Network
          </Heading>
  
          <Wrap justify="center" spacing={4}>
            {locations.map((loc, idx) => (
              <WrapItem key={idx}>
                <Link href={loc.link} color="black" fontWeight="medium">
                  {loc.label} |
                </Link>
              </WrapItem>
            ))}
          </Wrap>
        </Container>
      </Box>
    );
  }

  export default CommonProducts
  