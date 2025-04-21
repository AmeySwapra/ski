import { Box, SimpleGrid, Card, CardBody, CardHeader, CardFooter, Heading, Text } from "@chakra-ui/react";
import { memo } from "react";
import vission from '../../assets/icon/vision.png';
import mission from '../../assets/icon/mission.png';
import goal from '../../assets/icon/goal.png';

const CardItem = memo(({ icon, title, description, color }) => (
  <Card
    border={'1px solid #0296d7'}
    boxShadow={'6px 6px #0296d7'}
    transition="transform 0.2s, box-shadow 0.2s"
    _hover={{
      transform: "translateY(-20px)",
      boxShadow:'6px 6px #0296d7',
      bg: '#f6a408',
    }}
    h="500px"
    display="flex"
    flexDirection="column"
  >
    <CardHeader textAlign="center" pb={0}>
      <Box
        as="img"
        src={icon}
        alt=""
        
        w="80px"
        h="80px"
        loading="lazy"
        decoding="async"
      />
    </CardHeader>
    <CardBody textAlign="left" mt={20} flex="1">
      <Heading as="h3" size="lg" mb={4} color={`${color}.700`}>
        {title}
      </Heading>
      <Text fontSize="md" mt={10} color="gray.600" lineHeight="tall">
        {description}
      </Text>
    </CardBody>
    <CardFooter justifyContent="center" pt={0}>
      <Box w="50px" h="2px" bg={`${color}.500`} />
    </CardFooter>
  </Card>
));

const VisionMissionGoal = () => {
  const cardsData = [
    {
      id: 1,
      icon: vission, 
      title: "Our Vision",
      description: "Our Vision Is To Be Partners In Eco-Friendly Development With Preservation And Treatments.",
      color: "blue"
    },
    {
      id: 2,
      icon: mission,
      title: "Our Mission",
      description: "Only SKI Lifters provides the long-term purchase security and support that the leader in the field of vacuum handling technology can offer.",
      color: "green"
    },
    {
      id: 3,
      icon: goal,
      title: "Our Goal",
      description: "Our Goal as a Company Is To Provide Customer Service that Is not just the Best but Legendary.",
      color: "orange"
    }
  ];

  return (
    <Box as="section" py={[12, 16]} px={[4, 8, 24]} bg="white">
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={[6, 8]}
        maxW="1200px"
        mx="auto"
      >
        {cardsData.map((card) => (
          <CardItem
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
            color={card.color}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default memo(VisionMissionGoal);