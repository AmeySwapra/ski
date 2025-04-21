import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const VacuumLifterNote = () => {
  return (
    <Box  py={10} px={[4,8,24]} bg="#ffffff">
      <Heading as="h2" fontSize="4xl" textAlign="center" mb={6}>
        SHREE KRISHNA INDUSTRIES - VACUUM LIFTERS
      </Heading>

      <Text mb={4} fontSize="xl" color={'blackAlpha.900'} fontWeight={'700'}>
        We offer top-quality vacuum lifters in India designed to meet the demands of various industrial applications.
        Our vacuum lifters are engineered to streamline your material handling processes. They allow for quick and easy
        lifting of heavy objects. Our vacuum lifters are designed with advanced safety features that minimize the risk
        of accidents and injuries, providing peace of mind to your workforce.
      </Text>

      <Text mb={4} fontSize="xl" color={'blackAlpha.900'} fontWeight={'700'}>
        Whether you’re handling glass, metal sheets, or other materials, our vacuum lifters are versatile enough to
        handle a wide range of applications. We are one of the developing and among best chosen companies for a variety
        of vacuum lifters in latest standard modular designs.
      </Text>

      <Text mb={4} fontSize="xl" color={'blackAlpha.900'} fontWeight={'700'}>
        Our industry established in year 1995 is continuously focused on providing legendary services to our clients.
        We are offering quality services since 25 years in various industries namely as cone housing, gear boxes
        housing, feed roller, sugar cane and others. Our trusted services are highly appreciable by our clients and
        made us gain their trust.
      </Text>

      <Text fontWeight="bold" mb={2} color={'blackAlpha.900'} fontSize="xl" >
        Our Products:
      </Text>
      <UnorderedList spacing={2} pl={5} fontSize="xl" color={'blackAlpha.900'} fontWeight={'700'}>
        <ListItem>Heavy Material Vacuum Lifters</ListItem>
        <ListItem>Industrial Vacuum Lifters</ListItem>
        <ListItem>Heavy Duty Vacuum Lifters</ListItem>
        <ListItem>Custom Vacuum Lifters</ListItem>
        <ListItem>Pneumatic Vacuum Lifters</ListItem>
        <ListItem>Material Handling Vacuum Lifters</ListItem>
        <ListItem>Vacuum Lifters for Heavy Loads</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default VacuumLifterNote;
