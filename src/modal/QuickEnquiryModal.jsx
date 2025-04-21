import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
  } from "@chakra-ui/react";
  
  export const useQuickEnquiryModal = () => {
    const disclosure = useDisclosure();
    return disclosure;
  };
  
  const QuickEnquiryModal = ({ isOpen, onClose }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Quick Enquiry</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mb={4}>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="Enter your full name" />
            </FormControl>
  
            <FormControl mb={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input placeholder="Enter your phone number" />
            </FormControl>
  
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Enter your email address" />
            </FormControl>
          </ModalBody>
  
          <ModalFooter>
            <Button bg="#f6a408" color={'black'} mr={3}>
              REQUEST A CALL
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default QuickEnquiryModal;
  