import { Box, Container, Heading, List, ListItem, Link } from "@chakra-ui/react";
import bgImage from '../../assets/banner/header-pattern.webp'

const PageHeader = ({title}) => {
  return (
    <Box
      width="100%"
      height="400px"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      bgColor="#0b0b0b"
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      position="relative"
    >
      <Container maxW="container.xl" px={[4,8,24]}>
        <Heading as="h3" size="2xl" color="white" mb={2}>
          {title}
        </Heading>
        <List display="flex" color="white" fontWeight="medium" gap={2}>
          <ListItem>
            <Link href="/" _hover={{ textDecoration: "underline" }}>
              HOME
            </Link>
          </ListItem>
          <ListItem color={'#f6a408'}> / {title}</ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default PageHeader;
