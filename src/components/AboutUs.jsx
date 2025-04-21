import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import pic from "../assets/about/pic.png";

const AboutUs = () => {
  return (
    <Box bg="#fff" py={12} px={[4, 8, 24]}>
      <Container maxW="7xl">
        <Stack spacing={10}>
          <Box textAlign="center">
            <Heading
              as="h6"
              fontSize="xl"
              color="black"
              borderBottom="6px solid #f6a408"
              display="inline-block"
              mb={2}
            >
              ABOUT US
            </Heading>

            <Heading as="h2" fontSize="4xl" fontWeight="bold" mb={2}>
              SHREE KRISHNA INDUSTRIES
            </Heading>
            <Text fontSize="xl" color="gray.600">
              CE Certified Vacuum Lifter Manufacturers
            </Text>
            {/* Hidden heading for SEO */}
            <Text as="h1" display="none">
              Vacuum Lifter Manufacturers in Pune Suppliers, Exporters in
              Maharashtra, India | SHREE KRISHNA INDUSTRIES
            </Text>
          </Box>

          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            gap={10}
          >
            {/* Left Image */}
            <Box flex="1">
              <Image
                src={pic}
                alt="Vacuum Lifter Manufacturers in India"
                borderRadius="md"
                objectFit="cover"
                w="100%"
              />
            </Box>

            {/* Right Text Content */}
            <Box flex="1">
              {/* Hidden Paragraph for SEO */}
              <Text display="none">
                We{" "}
                <Link href="https://skilifters.com" isExternal>
                  SHREE KRISHNA INDUSTRIES
                </Link>{" "}
                are CE Certified Vacuum Lifter Providers in India, Pune, PCMC,
                Mumbai, Ahmedabad, Bangalore, Chennai, Hyderabad, Secunderabad,
                Kolkata, Odisha, Jaipur, Indore, Bhopal, Delhi. We are also the
                best CE Certified Vacuum Lifter Manufacturers, Suppliers, and
                Exporters in India, Saudi Arabia, Riyadh, Bahrain, UAE, Dubai,
                Qatar, Oman, Germany, Ireland, UK.
              </Text>

              <Heading as="h3" fontSize="xl" mb={4}>
                Here are some of the benefits of using a vacuum lifter:
              </Heading>
              <Text mb={4} fontSize="lg">
                Safe and efficient way to lift objects. Can lift a variety of
                objects, including heavy objects. Easy to use. Versatile and can
                be used in a variety of industries.
              </Text>

    

              <Text fontWeight="bold" fontSize={'xl'} mt={6}>
                Mr. Krishna Singh (Director)
              </Text>
              <Text>
                <Link href="tel:+919823479223" fontSize="lg" color="teal.500">
                  +91 9823479223
                </Link>{" "}
                |{" "}
                <Link href="mailto:enq@skilifters.com" fontSize="lg" color="teal.500">
                  enq@skilifters.com
                </Link>
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutUs;
