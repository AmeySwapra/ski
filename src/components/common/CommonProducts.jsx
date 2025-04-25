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
    { label: "Vacuum Lifter For Tiles", link: "#" },
    { label: "Vacuum Lifter For Concrete", link: "#" },
    { label: "Vacuum Lifter For Wood", link: "#" },
    { label: "Vacuum Lifters For Panel", link: "#" },
    { label: "Vacuum Lifters For Heavy Material", link: "#" },
    { label: "Vacuum Lifters For Industrial Use", link: "#" },
    { label: "Vacuum Lifters For Construction Site", link: "#" },
    { label: "Vacuum Lifters For Warehouse", link: "#" },
    { label: "Sheet Storage Rack", link: "#" },
    { label: "Sheet Storage Roll Out Racks", link: "#" },
    { label: "Puff Panel Lifter", link: "#" },
    { label: "Roof Panel Lifter", link: "#" },
    { label: "Vacuum Grippers", link: "#" },
    { label: "Server Lifter", link: "#" },
    { label: "Vacuum Solar Panel Lifters", link: "#" },
  ];
  
  
  const locations = [
    { label: "Mumbai", link: "/" },
    { label: "Ahmedabad", link: "/" },
    { label: "Bangalore", link: "/" },
    { label: "Chennai", link: "/" },
    { label: "Hyderabad", link: "/" },
    { label: "Secunderabad", link: "/" },
    { label: "Kolkata", link: "/" },
    { label: "Jaipur", link: "/" },
    { label: "Indore", link: "/" },
    { label: "Bhopal", link: "/" },
    { label: "Delhi", link: "/" },
    { label: "Gurugram", link: "/" },
    { label: "Coimbatore", link: "/" },
    { label: "Saudi Arabia", link: "/" },
    { label: "Riyadh", link: "/" },
    { label: "Bahrain", link: "/" },
    { label: "UAE", link: "/" },
    { label: "Dubai", link: "/" },
    { label: "Qatar", link: "/" },
    { label: "Oman", link: "/" },
    { label: "Germany", link: "/" },
    { label: "Ireland", link: "/" },
    { label: "UK", link: "/" }, 
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
  