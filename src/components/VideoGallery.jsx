import { Box, Container, SimpleGrid, AspectRatio } from '@chakra-ui/react';

const VideoGallery = () => {
  const videoUrls = [
    "https://www.youtube.com/embed/fETEyYGB3tM",
    "https://www.youtube.com/embed/4KHWdl8TJ3o",
    "https://www.youtube.com/embed/f1L_lNgmNyU",
    "https://www.youtube.com/embed/BhVEYlRoBFc",
    "https://www.youtube.com/embed/ECWg2rAbKhE",
    "https://www.youtube.com/embed/6NRlXVmK24E",
    "https://www.youtube.com/embed/eV-Lvrxv9xE",
    "https://www.youtube.com/embed/tW8MD6CHvEY",
    "https://www.youtube.com/embed/rwxlUXfv7ok",
    "https://www.youtube.com/embed/aNtKoxaeXC8",
    "https://www.youtube.com/embed/TtnTecUA824",
    "https://www.youtube.com/embed/hOoB1hnJ-TE",
  ];

  return (
    <Box as="section" py={10} px={[4,8,24]}>
      <Container maxW="container.xl">
        <SimpleGrid columns={[1, 2, 2, 4]} spacing={6}>
          {videoUrls.map((url, index) => (
            <AspectRatio key={index} ratio={16 / 9}>
              <iframe
                src={url}
                title={`Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </AspectRatio>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default VideoGallery;
