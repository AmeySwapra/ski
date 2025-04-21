import {
    Box,
    Heading,
    SimpleGrid,
    UnorderedList,
    ListItem,
    Text,
    Container,
  } from "@chakra-ui/react";
  
  const machines = [
    {
      title: "LATHE MACHINE",
      details: [
        "Make : Caption made in Punjab",
        "Chuck size : 600 outer diameter",
        "Bed way : 9 foot",
      ],
    },
    {
      title: "LATHE MACHINE (SMALL SIZE)",
      details: [
        "Make : Jamnagar made",
        "Chuck size : 350 outer diameter",
        "Bed way : 11 ½ foot",
      ],
    },
    {
      title: "MILLING MACHINE",
      details: [
        "Make : H.M.T",
        "Axis travel : +X axis : 750 mm",
        "-X axis : 750 mm | +Y axis : 350 mm | - axis : 350 mm | Z-axis : 350 mm",
      ],
    },
    {
      title: "VERTICAL MILLING MACHINE",
      details: [
        "Make : Graffenstaden (France)",
        "Axis travel : X axis: 850 mm",
        "Y axis : 350 mm",
        "Z-axis : 450 mm",
      ],
    },
    {
      title: "VERTICAL MILLING MACHINE",
      details: [
        "Make : Milwaukee (U.S.A)",
        "Axis travel : X axis: 750 mm",
        "Y axis : 350 mm",
        "Z-axis : 450 mm",
      ],
    },
    {
      title: "VERTICAL MILLING MACHINE",
      details: [
        "Make : Kolb (Germany)",
        "2 Inch Drill capacity",
        "Ram : 1100 mm",
        "Height : 1000 mm",
      ],
    },
    {
      title: "VERTICAL MILLING MACHINE",
      details: [
        "Make : Toss (Czechia)",
        "Axis travel : X axis: 1000 mm",
        "Y axis : 350 mm",
        "Z-axis : 450 mm",
      ],
    },
    {
      title: "PLANER MACHINE",
      details: [
        "Make : Punjab",
        "Bedway : 4500 mm",
        "Bedsize : 700 x 3000mm",
        "Between column : 900 mm",
      ],
    },
    {
      title: "HORIZONTAL MILLING MACHINE",
      details: [
        "Make : Milwaukee (U.S.A)",
        "Axis travel : X axis : 750 mm",
        "Y axis : 350 mm",
        "Z-axis : 450 mm",
      ],
    },
    {
      title: "HORIZONTAL BORING MACHINE",
      details: [
        "Make : WMW (Italy)",
        "Bedway travel : 8 ½ foot",
        "Drilling spindle : 80mm",
        "Chuck diameter : 640mm diameter through chuck",
        "Bed size : 1200 x 900mm",
        "Axis travel : + X axis : 1000mm",
        "- X axis: 1000mm",
        "Y axis : 2600mm",
        "Z axis : 800mm",
        "With DRO",
      ],
    },
    {
      title: "HORIZONTAL BORING MACHINE",
      details: [
        "Make : Union (U.S)",
        "Bedway : 1500 x1500 mm",
        "Drilling spindle : 100mm",
        "Chuck diameter : 800mm diameter through chuck",
        "Bed size: 1500 x 1500mm",
        "Axis travel : X axis : 2000mm",
        "Y axis : 5000mm",
        "Z axis : 2000mm",
        "With DRO",
      ],
    },
    {
      title: "HORIZONTAL MILLING MACHINE",
      details: [
        "Make : MU IBI",
        "Bedway : 1500 x1500 mm",
        "Drilling spindle : 100mm",
        "Bed size: 1500 x 1500mm",
        "Axis travel : X axis : 2000mm",
        "Y axis : 5000mm",
        "Z axis : 2000mm",
        "With DRO",
      ],
    },
  ];
  
  const MachineGrid = () => {
    return (
      <Box as="section" py={10} px={[4,8,24]}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {machines.map((machine, index) => (
              <Box
                key={index}
                bg="white"
                p={5}
                border={'1px solid #0296d7'}
                boxShadow="10px 10px #0296d7"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-10px)", bg: '#f6a408' }}
              >
                <Heading as="h3" size="md" mb={2}>
                  {machine.title}
                </Heading>
                <UnorderedList spacing={1} fontSize="sm" color="gray.700">
                  {machine.details.map((detail, i) => (
                    <ListItem key={i}>{detail}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  };
  
  export default MachineGrid;
  