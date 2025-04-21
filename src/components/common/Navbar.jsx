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
    { name: 'Vacuum Lifters', href: 'vacuum-lifters.php' },
    { name: 'Glass Vacuum Lifter', href: 'glass-vacuum-lifter.php' },
    { name: 'Industrial Vacuum Lifter', href: 'industrial-vacuum-lifter.php' },
    { name: 'Electric Vacuum Lifter', href: 'electric-vacuum-lifter.php' },
    { name: 'Mechanical Vacuum Lifter', href: 'mechanical-vacuum-lifter.php' },
    { name: 'Load Vacuum Lifter', href: 'load-vacuum-lifter.php' },
    { name: 'Slab Vacuum Lifter', href: 'slab-vacuum-lifter.php' },
    { name: 'Stone Vacuum Lifter', href: 'stone-vacuum-lifter.php' },
    { name: 'Electric Vacuum Glass Lifter', href: 'electric-vacuum-glass-lifter.php' },
    { name: 'Plate Vacuum Lifter', href: 'plate-vacuum-lifter.php' },
    { name: 'Pneumatic Vacuum Lifter', href: 'pneumatic-vacuum-lifter.php' },
    { name: 'Slab Lifter', href: 'slab-lifter.php' },
    { name: 'Billet Lifter', href: 'billet-lifter.php' },
    { name: 'Block Lifter', href: 'block-lifter.php' },
    { name: 'Drum Lifters', href: 'drum-lifters.php' },
    { name: 'Glass Lifter', href: 'glass-lifter.php' },
    { name: 'Metal Sheet Lifters', href: 'metal-sheet-lifters.php' },
    { name: 'Vacuum Block Lifter', href: 'vacuum-block-lifter.php' },
    { name: 'Server Lifter', href: 'server-lifter.php' },
    { name: 'Vacuum Clamp', href: 'vacuum-clamp.php' },
    { name: 'Scissor Clamp Lifter', href: 'scissor-clamp-lifter.php' },
    { name: 'Pipe / Bar Handling Clamp', href: 'pipe-bar-handling-clamp.php' },
    { name: 'Drum Handling Clamp', href: 'drum-handling-clamp.php' },
    { name: 'Fork Mounted Vacuum Lifting', href: 'fork-mounted-vacuum-lifting.php' },
    { name: 'Horizontal Lifting', href: 'horizontal-lifting.php' },
    { name: 'Pipe Lifting Equipment', href: 'pipe-lifting-equipment.php' },
    { name: 'Lifting Equipment', href: 'lifting-equipment.php' },
    { name: 'Fork Mounted Vacuum Lifting Attachment', href: 'fork-mounted-vacuum-lifting-attachment.php' },
    { name: 'Vacuum Table', href: 'vacuum-table.php' },
    { name: 'Metal Sheet / Wooden Board Storage Tower', href: 'metal-sheet-wooden-board-storage-tower.php' },
    { name: 'DE Palletizer', href: 'de-palletizer.php' },
    { name: 'Air Vacuum Generator', href: 'air-vacuum-generator.php' },
    { name: 'Marble Vacuum Lifter', href: 'marble-vacuum-lifter.php' },
    { name: 'Graphite Vacuum Lifter', href: 'graphite-vacuum-lifter.php' },
    { name: 'Wind Turbine Blade Vacuum Lifter', href: 'wind-turbine-blade-vacuum-lifter.php' },
    { name: 'Blade Lifters For Windmill', href: 'blade-lifters-for-windmill.php' },
    { name: 'Vacuum Lifting Solution', href: 'vacuum-lifting-solution.php' },
    { name: 'Vacuum Lifting Technologies for Wind Energy Industry', href: 'vacuum-lifting-technologies-for-wind-energy-industry.php' },
    { name: 'Vacuum Forklift Attachment', href: 'vacuum-forklift-attachment.php' },
    { name: 'Portable Vacuum Lifter Equipment', href: 'portable-vacuum-lifter-equipment.php' }
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
