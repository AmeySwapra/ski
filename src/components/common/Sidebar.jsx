import {
    Box,
    Image,
    Heading,
    VStack,
    List,
    ListItem,
    Link as ChakraLink,
    Icon,
    Center
  } from "@chakra-ui/react";
  import { FaAngleDoubleRight } from "react-icons/fa";
  import { Link } from "react-router-dom"; 
  import pic1 from '../../assets/certificate/ce.png'
  import pic2 from '../../assets/certificate/iso.png'
  import pic3 from '../../assets/certificate/down.png'
  
  const Sidebar = () => {
    const productLinks = [
      { href: "vacuum-lifters.php", label: "Vacuum Lifters" },
      { href: "glass-vacuum-lifter.php", label: "Glass Vacuum Lifter" },
      { href: "industrial-vacuum-lifter.php", label: "Industrial Vacuum Lifter" },
      { href: "electric-vacuum-lifter.php", label: "Electric Vacuum Lifter" },
      { href: "mechanical-vacuum-lifter.php", label: "Mechanical Vacuum Lifter" },
      { href: "load-vacuum-lifter.php", label: "Load Vacuum Lifter" },
      { href: "slab-vacuum-lifter.php", label: "Slab Vacuum Lifter" },
      { href: "stone-vacuum-lifter.php", label: "Stone Vacuum Lifter" },
      { href: "electric-vacuum-glass-lifter.php", label: "Electric Vacuum Glass Lifter" },
      { href: "plate-vacuum-lifter.php", label: "Plate Vacuum Lifter" },
      { href: "pneumatic-vacuum-lifter.php", label: "Pneumatic Vacuum Lifter" },
      { href: "slab-lifter.php", label: "Slab Lifter" },
      { href: "billet-lifter.php", label: "Billet Lifter" },
      { href: "block-lifter.php", label: "Block Lifter" },
      { href: "drum-lifters.php", label: "Drum Lifters" },
      { href: "glass-lifter.php", label: "Glass Lifter" },
      { href: "metal-sheet-lifters.php", label: "Metal Sheet Lifters" },
      { href: "vacuum-block-lifter.php", label: "Vacuum Block Lifter" },
      { href: "vacuum-clamp.php", label: "Vacuum Clamp" },
      { href: "scissor-clamp-lifter.php", label: "Scissor Clamp Lifter" },
      { href: "pipe-bar-handling-clamp.php", label: "Pipe / Bar Handling Clamp" },
      { href: "drum-handling-clamp.php", label: "Drum Handling Clamp" },
      { href: "fork-mounted-vacuum-lifting.php", label: "Fork Mounted Vacuum Lifting" },
      { href: "horizontal-lifting.php", label: "Horizontal Lifting" },
      { href: "pipe-lifting-equipment.php", label: "Pipe Lifting Equipment" },
      { href: "lifting-equipment.php", label: "Lifting Equipment" },
      { href: "fork-mounted-vacuum-lifting-attachment.php", label: "Fork Mounted Vacuum Lifting Attachment" },
      { href: "vacuum-table.php", label: "Vacuum Table" },
      { href: "metal-sheet-wooden-board-storage-tower.php", label: "Metal Sheet / Wooden Board Storage Tower" },
      { href: "de-palletizer.php", label: "DE Palletizer" },
      { href: "air-vacuum-generator.php", label: "Air Vacuum Generator" },
    ];
  
    return (
      <Box w={{ base: "100%", lg: "33.33%" }} p={4}>
        <VStack spacing={6} align="stretch" className="sidebar">
          <Center border={'1px solid #ebebeb'} w={'100%'} h={'150px'}>
            <Image src={pic1} alt="CE Certification" />
          </Center>
          <Center border={'1px solid #ebebeb'} w={'100%'} h={'150px'}>
            <Image src={pic2} alt="ISO Certification" w="100px" />
          </Center>
  
          <Box border={'1px solid #ebebeb'} p={10}>
            <Heading as="h6" size="sm" mb={2}>
              OTHER PRODUCTS
            </Heading>
            <List spacing={1} >
              {productLinks.map((item, index) => (
                <ListItem key={index}>
                  <ChakraLink as={Link} to={item.href} display="flex" alignItems="center">
                    <Icon as={FaAngleDoubleRight} mr={2} />
                    {item.label}
                  </ChakraLink>
                </ListItem>
              ))}
            </List>
          </Box>
  
          <Box border={'1px solid #ebebeb'} p={10}>
            <Heading as="h6" size="sm" mb={2}>
              DOWNLOAD BROCHURE
            </Heading>
            <Center>
              <ChakraLink href="#" onClick={(e) => e.preventDefault()}>
                <Image src={pic3} alt="Image" />
              </ChakraLink>
            </Center>
          </Box>
        </VStack>
      </Box>
    );
  };
  
  export default Sidebar;
  