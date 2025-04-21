import { 
  Box, 
  Container, 
  Flex, 
  Heading, 
  Text, 
  Accordion, 
  AccordionItem, 
  AccordionButton, 
  AccordionPanel, 
  AccordionIcon, 
  UnorderedList, 
  ListItem,
  useColorModeValue
} from "@chakra-ui/react";

export default function WhyChooseUs() {
  const infoBoxBg = useColorModeValue("gray.800", "gray.700");
  const infoBoxText = useColorModeValue("white", "gray.100");

  return (
    <Box bg="#f7f6f1" py={16} px={[4,8,24]}>
      <Container maxW="container.xl">
        <Box mb={8}>
          <Heading as="h2" size="2xl" textAlign="left">
            Why Choose Us?
          </Heading>
        </Box>

        <Flex direction={{ base: "column", lg: "row" }} gap={8}>
          <Box flex={{ base: 1, lg: 2 }}>
            <Accordion defaultIndex={[0]} allowToggle>
              <AccordionItem border="none" mb={4} bg="white" borderRadius="md" boxShadow="md">
                <AccordionButton 
                  p={6} 
                  _expanded={{ bg: "blue.500", color: "white" }}
                  _hover={{ bg: "blue.500", color: "white" }}
                  borderBottom={'8px solid #f6a408'}
                >
                  <Box flex="1" textAlign="left" >
                    <Text fontWeight="semibold" fontSize={'xl'}>
                      We strive to make SKI an excellent source for your vacuum lifting needs and an enjoyable company to do business with. We are large enough to consistently offer top quality and economical pricing yet small enough to offer excellent service and technical expertise. Call us and you will see why our innovative products, dedicated skilled employees and progressive company culture have made us a leader in the field of vacuum handling technology.
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} px={6}>
                  <UnorderedList spacing={3} fontSize={'xl'}>
                    <ListItem>We make it a point to continuously produce a stream of new, innovative, quality vacuum products.</ListItem>
                    <ListItem>We try to make our vacuum technology products as easy to understand and use as possible.</ListItem>
                    <ListItem>We devise flexible manufacturing processes that enable us to quickly deliver a wide range of innovative quality products to the market, and back them with excellent customer service.</ListItem>
                    <ListItem>As we sell niche products, we try to limit our distribution to the best, most experienced specialty dealers.</ListItem>
                    <ListItem>We stay lean, with low overhead, to remain competitive and entrepreneurial.</ListItem>
                    <ListItem>We put our profits back into the company to underwrite future growth.</ListItem>
                    <ListItem>We continuously strive to improve everything, and try to provide the best value for the job.</ListItem>
                    <ListItem>We take care of, and look after, each other, our vendors and customers.</ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box flex={{ base: 1, lg: 1 }}>
            <Box bg={infoBoxBg} color={infoBoxText} p={6} borderRadius="md" boxShadow="md">
              <Heading as="h6" size="xl" mb={4}>
                Our Speciality
              </Heading>
              <UnorderedList spacing={3} fontSize={'xl'}>
                <ListItem>
                  <Text as="strong">Lasting Reliability Buy with confidence –</Text> only SKI Lifters provides the long-term purchase security and support that the leader in the field of vacuum handling technology can offer.
                </ListItem>
                <ListItem>Our Vacuum Lifters Can Handle Almost Any Application.</ListItem>
                <ListItem>
                  <Text as="strong">Any Object –</Text> Sheet and plate, coil, pipe, ingots, boxes, bags, sacks, paper, appliances, etc.
                </ListItem>
                <ListItem>
                  <Text as="strong">Any Material –</Text> Porous as well as non-porous: metal, concrete, foam, wood, stone, plastic, glass, etc.
                </ListItem>
                <ListItem>
                  <Text as="strong">Any Shape –</Text> Concave, convex, flat, ribbed, uneven, wavy, rough, porous, etc.
                </ListItem>
                <ListItem>
                  <Text as="strong">Any Action –</Text> Lifting, tilting, rotating, turning over, picking, placing, packing, etc.
                </ListItem>
                <ListItem>
                  <Text as="strong">Any Environment –</Text> Indoors or out, dusty, hot, etc.
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}