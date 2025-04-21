import { Box, Container, Flex, Image, Link } from "@chakra-ui/react";
import pic1 from '../assets/certificate/pic1.jpg'
import pic2 from '../assets/certificate/pic2.jpg'

const CertificateSection = () => {
  return (
    <Box py={10}>
      <Container maxW="container.xl">
        <Flex
          wrap="wrap"
          justify={{ base: "center", lg: "start" }}
          gap={6}
        >
          {/* Empty space similar to col-lg-2 */}
          <Box flexBasis={{ base: "100%", lg: "16.6667%" }} />

          {/* CE Certificate */}
          <Box flexBasis={{ base: "100%", md: "50%", lg: "33.3333%" }}>
            <Box as="figure">
              <Link href={pic2} isExternal>
                <Image
                  src={pic2}
                  alt="ce-certificate"
                  borderRadius="md"
                  boxShadow="md"
                />
              </Link>
            </Box>
          </Box>

          {/* ISO Certificate */}
          <Box flexBasis={{ base: "100%", md: "50%", lg: "33.3333%" }}>
            <Box as="figure">
              <Link href={pic1} isExternal>
                <Image
                  src={pic1}
                  alt="iso-certificate"
                  borderRadius="md"
                  boxShadow="md"
                />
              </Link>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CertificateSection;
