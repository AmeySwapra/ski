import {
  Box,
  Flex,
  Image,
  Link,
  IconButton,
  Button,
  VStack,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import QuickEnquiryModal, { useQuickEnquiryModal } from "../../modal/QuickEnquiryModal";
import logo from '../../assets/logo/logo.png'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useQuickEnquiryModal();
  const mobileMenu = useDisclosure();

  const productItems = [
    { name: 'Vacuum Lifters', href: 'vacuum-lifters' },
    { name: 'Glass Vacuum Lifter', href: 'glass-vacuum-lifter' },
    { name: 'Industrial Vacuum Lifter', href: 'industrial-vacuum-lifter' },
    { name: 'Electric Vacuum Lifter', href: 'electric-vacuum-lifter' },
    { name: 'Mechanical Vacuum Lifter', href: 'mechanical-vacuum-lifter' },
    { name: 'Load Vacuum Lifter', href: 'load-vacuum-lifter' },
    { name: 'Slab Vacuum Lifter', href: 'products/slab-vacuum-lifter' },
    { name: 'Stone Vacuum Lifter', href: 'products/stone-vacuum-lifter' },
    { name: 'Electric Vacuum Glass Lifter', href: 'products/electric-vacuum-glass-lifter' },
    { name: 'Plate Vacuum Lifter', href: 'products/plate-vacuum-lifter' },
    { name: 'Pneumatic Vacuum Lifter', href: 'products/pneumatic-vacuum-lifter' },
    { name: 'Slab Lifter', href: 'products/slab-lifter' },
    { name: 'Billet Lifter', href: 'products/billet-lifter' },
    { name: 'Block Lifter', href: 'products/block-lifter' },
    { name: 'Drum Lifters', href: 'products/drum-lifters' },
    { name: 'Glass Lifter', href: 'products/glass-lifter' },
    { name: 'Metal Sheet Lifters', href: 'products/metal-sheet-lifters' },
    { name: 'Vacuum Block Lifter', href: 'products/vacuum-block-lifter' },
    { name: 'Server Lifter', href: 'products/server-lifter' },
    { name: 'Vacuum Clamp', href: 'products/vacuum-clamp' },
    { name: 'Scissor Clamp Lifter', href: 'products/scissor-clamp-lifter' },
    { name: 'Pipe / Bar Handling Clamp', href: 'products/pipe-bar-handling-clamp' },
    { name: 'Drum Handling Clamp', href: 'products/drum-handling-clamp' },
    { name: 'Fork Mounted Vacuum Lifting', href: 'products/fork-mounted-vacuum-lifting' },
    { name: 'Horizontal Lifting', href: 'products/horizontal-lifting' },
    { name: 'Pipe Lifting Equipment', href: 'products/pipe-lifting-equipment' },
    { name: 'Lifting Equipment', href: 'products/lifting-equipment' },
    { name: 'Fork Mounted Vacuum Lifting Attachment', href: 'products/fork-mounted-vacuum-lifting-attachment' },
    { name: 'Vacuum Table', href: 'products/vacuum-table' },
    { name: 'Metal Sheet / Wooden Board Storage Tower', href: 'products/metal-sheet-wooden-board-storage-tower' },
    { name: 'DE Palletizer', href: 'products/de-palletizer' },
    { name: 'Air Vacuum Generator', href: 'products/air-vacuum-generator' },
    { name: 'Marble Vacuum Lifter', href: 'products/marble-vacuum-lifter' },
    { name: 'Graphite Vacuum Lifter', href: 'products/graphite-vacuum-lifter' },
    { name: 'Wind Turbine Blade Vacuum Lifter', href: 'products/wind-turbine-blade-vacuum-lifter' },
    { name: 'Blade Lifters For Windmill', href: 'blade-lifters-for-windmill' },
    { name: 'Vacuum Lifting Solution', href: 'products/vacuum-lifting-solution' },
    { name: 'Vacuum Lifting Technologies for Wind Energy Industry', href: 'products/vacuum-lifting-technologies-for-wind-energy-industry' },
    { name: 'Vacuum Forklift Attachment', href: 'products/vacuum-forklift-attachment' },
    { name: 'Portable Vacuum Lifter Equipment', href: 'products/portable-vacuum-lifter-equipment' }
  ];
  

  return (
    <Box bg="black" px={[4,8,24]} shadow="md" position="relative" zIndex="10">
      <Flex justify="space-between" align="center" p={4} className="container">
        {/* Logo */}
        <Box>
          <Link href="/"><Image src={logo} alt="Logo" height="120px" /></Link>
        </Box>

        {/* Desktop Menu */}
        <HStack spacing={6} color={'white'} fontSize={'lg'} display={{ base: "none", md: "flex" }}>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>

          <Box position="relative" _hover={{ ".submenu": { display: "block" } }}>
            <Link href="#">Products</Link>
            <Box
              className="submenu"
              display="none"
              position="absolute"
              bg="#f6a408"
              p={2}
              shadow="md"
              maxH="100vh"
              w={'400px'}
              overflowY="scroll"
              zIndex="20"
            >
              <VStack align="start" color={'black'} spacing={4}>
                {
                  productItems.map((item, ind) => (
                    <Link href={item.href} key={ind}>{item.name}</Link>
                  ))
                }
              </VStack>
            </Box>
          </Box>

          <Link href="/services">Services</Link>
          <Link href="/infrastructure">Infrastructure</Link>
          <Link href="/clients">Clients</Link>

          <Box position="relative" _hover={{ ".submenu": { display: "block" } }}>
            <Link href="#">Gallery</Link>
            <Box className="submenu" display="none" w={'150px'} position="absolute" bg="#f6a408" p={2} shadow="md">
              <VStack align="start" color={'black'} textDecoration={'none'} spacing={4}>
                <Link href="/gallery-images" >Images</Link>
                <Link href="/gallery-videos">Videos</Link>
              </VStack>
            </Box>
          </Box>

          <Link href="/contact-us">Contact Us</Link>
        </HStack>

        {/* Mobile menu toggle */}
        <IconButton
          icon={mobileMenu.isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ base: "flex", md: "none" }}
          onClick={mobileMenu.onToggle}
        />

        {/* Quick Enquiry Button */}
        <Button
          colorScheme="red"
          variant="solid"
          ml={4}
          onClick={onOpen}
          display={{ base: "none", md: "flex" }}
        >
          QUICK ENQUIRY
        </Button>
      </Flex>

      {/* Mobile Menu */}
      {mobileMenu.isOpen && (
        <VStack bg="white" p={4} display={{ md: "none" }} spacing={4}>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/infrastructure">Infrastructure</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/gallery-images">Images</Link>
          <Link href="/gallery-videos">Videos</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Button colorScheme="red" onClick={onOpen}>QUICK ENQUIRY</Button>
        </VStack>
      )}

      {/* Modal */}
      <QuickEnquiryModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Navbar;
