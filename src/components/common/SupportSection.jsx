import React from 'react';
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import support from '../../assets/images/support.jpg'

const SupportSection = ({ reverse = false }) => {
  return (
    <Box bg="white" py={10}>
      <Flex
        direction={{ base: 'column', lg: reverse ? 'row-reverse' : 'row' }}
        align="center"
        justify="space-between"
        gap={10}
        px={{ base: 4, md: 10 }}
        maxW="1200px"
        mx="auto"
      >
        {/* Text Content */}
        <Box flex="1" bg={'black'} color={'white'} p={10}>
          <VStack align="start" spacing={5}>
            <Heading as="h2" fontSize="4xl">
              Need support? We’re here to help!
            </Heading>
            <Text fontSize="xl">
              We always recommend signing up for a service agreement when you choose a SKI system.
              Our skilled service technicians will be there for you, making sure that your lifting
              equipment runs smooth every day.
            </Text>
            <Text fontSize="xl">
              Contact us to learn more about beneficial service agreements, schedule a service
              appointment or order spare parts. Get in touch today, we are always just a phone call
              away.
            </Text>
          </VStack>
        </Box>

        {/* Image */}
        <Box flex="1">
          <Image
            src={support}
            alt="Support"
            objectFit="cover"
            borderRadius="md"
            w="100%"
            h={'600px'}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default SupportSection;
