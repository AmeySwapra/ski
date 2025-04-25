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
      { href: "vacuum-lifters", label: "Vacuum Lifters" },
      { href: "glass-vacuum-lifter", label: "Glass Vacuum Lifter" },
      { href: "industrial-vacuum-lifter", label: "Industrial Vacuum Lifter" },
      { href: "electric-vacuum-lifter", label: "Electric Vacuum Lifter" },
      { href: "mechanical-vacuum-lifter", label: "Mechanical Vacuum Lifter" },
      { href: "load-vacuum-lifter", label: "Load Vacuum Lifter" },
      { href: "/products/slab-vacuum-lifter", label: "Slab Vacuum Lifter" },
      { href: "/products/stone-vacuum-lifter", label: "Stone Vacuum Lifter" },
      { href: "/products/electric-vacuum-glass-lifter", label: "Electric Vacuum Glass Lifter" },
      { href: "/products/plate-vacuum-lifter", label: "Plate Vacuum Lifter" },
      { href: "/products/pneumatic-vacuum-lifter", label: "Pneumatic Vacuum Lifter" },
      { href: "/products/slab-lifter", label: "Slab Lifter" },
      { href: "/products/billet-lifter", label: "Billet Lifter" },
      { href: "/products/block-lifter", label: "Block Lifter" },
      { href: "/products/drum-lifters", label: "Drum Lifters" },
      { href: "/products/glass-lifter", label: "Glass Lifter" },
      { href: "/products/metal-sheet-lifters", label: "Metal Sheet Lifters" },
      { href: "/products/vacuum-block-lifter", label: "Vacuum Block Lifter" },
      { href: "/products/vacuum-clamp", label: "Vacuum Clamp" },
      { href: "/products/scissor-clamp-lifter", label: "Scissor Clamp Lifter" },
      { href: "/products/pipe-bar-handling-clamp", label: "Pipe / Bar Handling Clamp" },
      { href: "/products/drum-handling-clamp", label: "Drum Handling Clamp" },
      { href: "/products/fork-mounted-vacuum-lifting", label: "Fork Mounted Vacuum Lifting" },
      { href: "/products/horizontal-lifting", label: "Horizontal Lifting" },
      { href: "/products/pipe-lifting-equipment", label: "Pipe Lifting Equipment" },
      { href: "/products/lifting-equipment", label: "Lifting Equipment" },
      { href: "/products/fork-mounted-vacuum-lifting-attachment", label: "Fork Mounted Vacuum Lifting Attachment" },
      { href: "/products/vacuum-table", label: "Vacuum Table" },
      { href: "/products/metal-sheet-wooden-board-storage-tower", label: "Metal Sheet / Wooden Board Storage Tower" },
      { href: "/products/de-palletizer", label: "DE Palletizer" },
      { href: "/products/air-vacuum-generator", label: "Air Vacuum Generator" },
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
  