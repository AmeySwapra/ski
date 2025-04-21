import React from 'react';
import { Box, Image, SimpleGrid, Container } from '@chakra-ui/react';

const imagePaths = [
  'assets/images/gallery/1.jpg',
  'assets/images/gallery/2.jpg',
  'assets/images/gallery/3.jpg',
  'assets/images/gallery/4.jpg',
  'assets/images/gallery/5.jpg',
  'assets/images/gallery/6.jpg',
  'assets/images/gallery/7.jpg',
  'assets/images/gallery/8.jpg',
  'assets/images/gallery/9.jpg',
  'assets/images/gallery/10.jpg',
  'assets/images/gallery/11.jpg',
  'assets/images/gallery/12.jpg',
  'assets/images/gallery/13.jpg',
  'assets/images/gallery/14.jpg',
  'assets/images/gallery/15.jpg',
  'assets/images/gallery/16.jpg',
];

const GallerySection = () => {
  return (
    <Box py={10} px={[4,8,24]} className="content-section">
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {imagePaths.map((src, index) => (
            <Box key={index} as="figure" className="certificate" overflow="hidden">
              <a href={src} data-fancybox="">
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  w="100%"
                  h="auto"
                  borderRadius="md"
                  _hover={{ transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
                />
              </a>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default GallerySection;
