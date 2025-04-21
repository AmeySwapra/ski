import { Box, Container, Heading, SimpleGrid, Image, Text, Link } from '@chakra-ui/react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Slab Lifter",
      image: "assets/images/products/slab-lifter.jpg",
      link: "slab-lifter.php"
    },
    {
      id: 2,
      title: "Billet Lifter",
      image: "assets/images/products/billet-lifter.jpg",
      link: "billet-lifter.php"
    },
    {
      id: 3,
      title: "Glass Vacuum Lifter",
      image: "assets/images/products/glass-vacuum-lifter.jpg",
      link: "glass-vacuum-lifter.php"
    },
    {
      id: 4,
      title: "Industrial Vacuum Lifter",
      image: "assets/images/products/industrial-vacuum-lifter.jpg",
      link: "industrial-vacuum-lifter.php"
    },
    {
      id: 5,
      title: "Electric Vacuum Lifter",
      image: "assets/images/products/electric-vacuum-lifter.jpg",
      link: "electric-vacuum-lifter.php"
    },
    {
      id: 6,
      title: "Fork Mounted Vacuum Lifting",
      image: "assets/images/products/fork-mounted-vacuum-lifting.jpg",
      link: "fork-mounted-vacuum-lifting.php"
    },
    {
      id: 7,
      title: "Scissor Clamp Lifter",
      image: "assets/images/products/scissor-clamp-lifter.jpg",
      link: "scissor-clamp-lifter.php"
    },
    {
      id: 8,
      title: "Vacuum Lifters",
      image: "assets/images/products/vacuum-lifters.jpg",
      link: "vacuum-lifters.php"
    },
    {
      id: 9,
      title: "Block Lifter",
      image: "assets/images/products/block-lifters.jpg",
      link: "block-lifter.php"
    },
    {
      id: 10,
      title: "Vacuum Clamp",
      image: "assets/images/products/vacuum-clamp.jpg",
      link: "vacuum-clamp.php"
    },
    {
      id: 11,
      title: "Pipe / Bar Handling Clamp",
      image: "assets/images/products/pipe-bar-handling-clamp.jpg",
      link: "pipe-bar-handling-clamp.php"
    },
    {
      id: 12,
      title: "Drum Handling Clamp",
      image: "assets/images/products/drum-handling-clamp.jpg",
      link: "drum-handling-clamp.php"
    },
    {
      id: 13,
      title: "Vacuum Table",
      image: "assets/images/products/vacuum-table.jpg",
      link: "vacuum-table.php"
    },
    {
      id: 14,
      title: "Metal Sheet / Wooden Board Storage Tower",
      image: "assets/images/products/sheet-wooden-board.jpg",
      link: "metal-sheet-wooden-board-storage-tower.php"
    },
    {
      id: 15,
      title: "DE Palletizer",
      image: "assets/images/products/de-palletizer.jpg",
      link: "de-palletizer.php"
    }
  ];

  return (
    <Box as="section" bg="#f7f6f1" py={16} px={[4,8,24]}>
      <Container maxW="container.xl">
        <Box textAlign="center" mb={12}>
          <Heading as="h2" size="xl" color="gray.800">
            OUR PRODUCTS
          </Heading>
        </Box>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={8}
          position="relative"
        >
          {products.map((product) => (
            <Box
              key={product.id}
              as="article"
              position="relative"
              overflow="hidden"
              borderRadius="md"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "lg"
              }}
            >
              <Link href={product.link} _hover={{ textDecoration: "none" }}>
                <Box overflow="hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width="100%"
                    height="300px"
                    objectFit="cover"
                    transition="transform 0.5s ease"
                    _hover={{
                      transform: "scale(1.05)"
                    }}
                  />
                </Box>
                <Box
                  bg="black"
                  p={4}
                  textAlign="center"
                  borderTop="1px solid"
                  borderColor="gray.100"
                  _hover={{ bg: "#f6a408" }}
                >
                  <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    color="white"
                    
                  >
                    {product.title}
                  </Text>
                </Box>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ProductsSection;