import {
  Box,
  Text,
  Link,
  HStack,
  VStack,
  Divider,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
  FaWhatsapp,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Box 
      bg="black" 
      color="white" 
      px={[4, 8, 24]} 
      py={20}
      position="relative" // This makes the footer the positioning context
    >
      <Box maxW="container.xl" mx="auto">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {/* Pune Head Office */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Pune Head Office
            </Text>
            <VStack align="start" spacing={2}>
              <HStack>
                <Icon as={FaUser} />
                <Text>Mr. Krishna Singh (Pune Head office)</Text>
              </HStack>
              <HStack>
                <Icon as={FaPhone} />
                <Link href="tel:+919823479223" color="teal.200">
                  +91 9823479223
                </Link>
              </HStack>
              <HStack>
                <Icon as={FaEnvelope} />
                <Link href="mailto:enq@skilifters.com" color="teal.200">
                  enq@skilifters.com
                </Link>
              </HStack>
            </VStack>

            <HStack mt={4} spacing={4}>
              <Link href="#" isExternal>
                <Icon as={FaPhone} boxSize={6} color="green.400" />
              </Link>
              <Link href="https://wa.me/919823479223" isExternal>
                <Icon as={FaWhatsapp} boxSize={6} color="green.500" />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaYoutube} boxSize={6} color="red.500" />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaFacebookF} boxSize={6} color="#1877F2" />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaLinkedinIn} boxSize={6} color="#0A66C2" />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaInstagram} boxSize={6} color="#E1306C" />
              </Link>
            </HStack>
          </Box>

          {/* Sales Offices */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              SALES OFFICES
            </Text>
            <VStack align="start" spacing={3}>
              <HStack>
                <Icon as={FaUser} />
                <Text>Mr. Singh (Mumbai Sales Manager)</Text>
              </HStack>
              <HStack>
                <Icon as={FaPhone} />
                <Link href="tel:+917666883065" color="teal.200">
                  +91 7666883065
                </Link>
              </HStack>

              <Divider borderColor="gray.400" />

              <HStack>
                <Icon as={FaUser} />
                <Text>Mr. Sarvanan Naidu (Chennai Sales Manager)</Text>
              </HStack>
              <HStack>
                <Icon as={FaPhone} />
                <Link href="tel:+918087469725" color="teal.200">
                  +91 8087469725
                </Link>
              </HStack>
            </VStack>
          </Box>

          {/* Location */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Location
            </Text>
            <Text mb={4}>
              Plot No. - 282/3, Sector No. 10, PCNTDA, Bhosari, Pune - 411026,
              MH, India
            </Text>
            <Box
              as="iframe"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1890.1797356472603!2d73.83202010912318!3d18.647858318318995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b80dcf21b0b7%3A0x7fd721daac3b9d63!2sSKI%20Lifters%20-%20vacuum%20lifters%2F%20Vacuum%20lifter%20in%20India%2C%20Sheet%20Vacuum%20Lifter%2C!5e0!3m2!1sen!2sin!4v1679043679913!5m2!1sen!2sin"
              width="100%"
              height="150"
              border="0"
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </SimpleGrid>
        <Box display="flex" justifyContent="center" my={10}>
          <Divider borderColor="gray.500" w="80%" />
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={10}>
          <Box textAlign="center">
            <Text fontSize="sm">
              © 2023 Shree Krishna Industries | All Rights Reserved.
            </Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="sm">
              Designed & Developed By Swapra Technologies
            </Text>
          </Box>
        </SimpleGrid>

        {/* Scroll to Top - Positioned at bottom of footer component */}
        <Box
          position="absolute"
          bottom="20px"
          right="20px"
          zIndex="999"
        >
          <Link
            onClick={handleScrollToTop}
            bg="#f6a408"
            color="black"
            p={3}
            borderRadius="full"
            display="flex"
            alignItems="center"
            _hover={{ bg: "teal.600", textDecoration: "none" }}
            boxShadow="md"
          >
            <Icon as={FaArrowUp} mr={2} />
            <Text fontSize="sm">Scroll Up</Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;