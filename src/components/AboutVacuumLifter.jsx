import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import pic from '../assets/about/pic.png'
const AboutVacuumLifter = () => {
  return (
    <Box bg="#f7f6f1" py={{ base: 10, md: 16 }} px={[4,8,24]}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={10}
        >
          {/* Image Section */}
          <Box flex="1">
            <Image
              src={pic}
              alt="Vacuum Lifter | Vacuum Lifting Equipment"
              borderRadius="md"
              
            />
          </Box>

          {/* Content Section */}
          <Box flex="1">
            <Box>
              <Text mb={4} fontSize={'xl'}>
                Shree Krishna Industries (SKI) vacuum lifters are robust and reliable tools that make lifting easy, for everyone. No matter who you are or what you need to lift, SKI vacuum lifters will make lifting easy and efficient. SKI has a complete range of vacuum lifters and vacuum lifting equipment. Self-powered mechanical vacuum lifters, electric and air-powered vacuum lifters are all available in lifting capacities ranging up to 30 ton or more depending on your needs. Choose from among the below listing of our more popular vacuum lifting and manual tilting end effectors, to request a quote on a vacuum lifter for your needs.
              </Text>
              <Text fontSize={'xl'}>
                We are having Special machinery such as Horizontal boring Machine, Milling Machine, Drilling Machine, Planner Machine, Lathe Machines. Currently Serving Automotive, Sugar cane Industry, SPM Machinery, Crane Industry, Basically we can Serve any industry where there is any requirement of Drilling, Milling, Horizontal Boring operation are required to complete their process.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutVacuumLifter;
