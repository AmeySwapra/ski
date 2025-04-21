import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
  HStack,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FaUser, FaPhone, FaEnvelope, FaSyncAlt } from "react-icons/fa";
import phone from "../assets/icon/phone.png";

const contactList = [
  {
    location: "Pune Head office",
    name: "Mr. Krishna Singh",
    phone: "+91 9823479223",
    email: "enq@skilifters.com",
  },
  {
    location: "Mumbai Sales Manager",
    name: "Mr. Singh",
    phone: "+91 7666883065",
    email: "enq@skilifters.com",
  },
  {
    location: "Chennai Sales Manager",
    name: "Mr. Sarvanan Naidu",
    phone: "+91 8087469725",
    email: "enq@skilifters.com",
  },
];

const ContactSection = () => {
  return (
    <>
      {/* Contact Boxes */}
      <Box py={10}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={6}
          maxW="1200px"
          mx="auto"
          px={4}
        >
          {contactList.map((contact, idx) => (
            <Box
              key={idx}
              textAlign="center"
              bg="white"
              p={6}
              h={'350px'}
              border={"1px solid grey"}
              boxShadow="md"
              transition="transform 0.2s, box-shadow 0.2s"
              _hover={{
                transform: "translateY(-20px)",
                boxShadow: "dark-lg",
              }}
            >
              <Image src={phone} mx="auto" h={"80px"} alt="icon" mb={4} />
              <Heading size="md" mt={8}>
                {contact.location}
              </Heading>
              <Text fontWeight="semibold" mt={4}>
                <Icon as={FaUser} mr={2} />
                {contact.name}
              </Text>
              <Text mt={2}>
                <Icon as={FaPhone} mr={2} />
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </Text>
              <Text mt={2}>
                <Icon as={FaEnvelope} mr={2} />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>

      {/* Address + Form Section */}
      <Box py={10}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={8}
          maxW="1200px"
          mx="auto"
          px={4}
        >
          <Box flex={1}>
            <Heading size="3xl" mb={4}>
              Address
            </Heading>
            <Text fontSize="2xl">
              Plot No. - 282/3, Sector No. 10, PCNTDA, Bhosari, Pune - 411026,
              MH, India
            </Text>
          </Box>

          <Box
            flex={2}
            as="form"
            method="post"
            action="emailsends.php"
            encType="multipart/form-data"
          >
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={4}
            >
              <Input name="name" placeholder="Enter Your Name" required />
              <Input name="cname" placeholder="Enter Company Name" required />
              <Input
                name="phone"
                type="number"
                placeholder="Enter Phone Number"
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Enter Email"
                required
              />
              <Input name="pname" placeholder="Enter Product Name" required />
              <Input name="city" placeholder="Enter City Name" required />
              <GridItem colSpan={2}>
                <Textarea
                  name="msg"
                  placeholder="Drop Your Message Here"
                  h="100px"
                  required
                />
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Upload File</FormLabel>
                  <Input type="file" name="file" />
                </FormControl>
              </GridItem>

              {/* Captcha */}
              <GridItem colSpan={2}>
                <Box>
                  <Heading size="sm" mb={2}>
                    Just to prove you are a human?
                  </Heading>
                  <HStack>
                    <Text>6 + 4 =</Text>
                    <Input maxLength={2} size="sm" w="50px" required />
                    <Icon as={FaSyncAlt} cursor="pointer" />
                  </HStack>
                </Box>
              </GridItem>

              <GridItem>
                <Button type="submit" colorScheme="blue" w="full">
                  Submit
                </Button>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Box>

      {/* Google Map Section */}
      <Box>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15121.341911670108!2d73.84616607946778!3d18.648935867434037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b80dcf21b0b7%3A0x7fd721daac3b9d63!2sSKI%20Lifters%20-%20vacuum%20lifters%2F%20Vacuum%20lifter%20in%20India%2C%20Sheet%20Vacuum%20Lifter%2C!5e0!3m2!1sen!2sin!4v1679392926057!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </>
  );
};

export default ContactSection;
