import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import banner from '../assets/banner/banner.jpg'
const RelationshipSection = () => {
  return (
    <Box
      bgImage={`url(${banner})`}
      bgPosition="center"
      bgSize="contain"
      bgRepeat="no-repeat"
      py={{ base: 8}}
      px={[4,8,24]}
    >
      <Container maxW="container.xl">
        <Flex justify="start">
          <Box
            bg="#026ab0"
            p={{ base: 6, md: 10 }}
            borderRadius="md"
            maxW="container.sm"
            boxShadow="md"
            color={'white'}
          >
            <Heading as="h4" size="4xl" mb={4}>
              The first thing we build relationships
            </Heading>
            <Text fontSize={'xl'}>
              Started to create milestones, We Shree Krishna Industries (SKI)
              marked our presence in the year 1995 and operates in the servicing
              of For Gear Boxes Housing, Precision Turned Components, Sleeve
              Shaft, Feed Roller, Cone Housing, and Sugar cane Industry since 25
              years. Our quality services have always won us many appreciations
              from our clients. Our spontaneous performance and confident
              approach in offering the excellent range of Rolling Steady for Gear
              Box Housing, Precision Turned Components, Sleeve Shaft, Feed
              Roller, Cone Housing, Industrial Precision Components that has made
              us deepen our roots in the market. We Shree Krishna Industries
              breathe with the aim to satisfy our clients with our smart
              services. We are a unit of highly experienced professionals who all
              contribute best of their potentials to offer high efficiency.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default RelationshipSection;
