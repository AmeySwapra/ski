import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  useBreakpointValue,
  useInterval,
  useBoolean,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ContentSection = () => {
  const [happyClients, setHappyClients] = useState(0);
  const [workingHands, setWorkingHands] = useState(0);
  const [yearsEstablished, setYearsEstablished] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [isCounting, { on, off }] = useBoolean(false);

  const { ref: counterRef, inView: inViewport } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const counterSpeed = useBreakpointValue({ base: 50, md: 20 });

  const targetValues = {
    clients: 1500,
    hands: 200,
    years: 30,
    projects: 250,
  };

  useEffect(() => {
    if (inViewport && !isCounting) {
      on();
    }
  }, [inViewport, isCounting, on]);

  useInterval(() => {
    if (isCounting) {
      setHappyClients((prev) => {
        const increment = Math.ceil(targetValues.clients / 30);
        return prev < targetValues.clients
          ? prev + increment
          : targetValues.clients;
      });
      setWorkingHands((prev) => {
        const increment = Math.ceil(targetValues.hands / 30);
        return prev < targetValues.hands
          ? prev + increment
          : targetValues.hands;
      });
      setYearsEstablished((prev) => {
        const increment = Math.ceil(targetValues.years / 30);
        return prev < targetValues.years
          ? prev + increment
          : targetValues.years;
      });
      setCompletedProjects((prev) => {
        const increment = Math.ceil(targetValues.projects / 30);
        return prev < targetValues.projects
          ? prev + increment
          : targetValues.projects;
      });

      if (
        happyClients >= targetValues.clients &&
        workingHands >= targetValues.hands &&
        yearsEstablished >= targetValues.years &&
        completedProjects >= targetValues.projects
      ) {
        off();
      }
    }
  }, counterSpeed);

  return (
    <Box as="section" py={16} px={[4, 8, 24]} bg="white">
      <Container maxW="container.xl">
        <Box mb={16} textAlign={{ base: "left", md: "left" }}>
          <Heading as="h3" size="xl" mb={6} color="black.800">
            Connecting You with Premier Manufacturers, Suppliers, and Exporters
          </Heading>
          <Text fontSize="lg" mb={8} color="black">
            Our platform serves as a central hub for connecting businesses with
            reputable vacuum lifter manufacturers, suppliers, and exporters
            across India. Whether you are looking to procure vacuum lifters for
            local projects or aim to export them internationally, our service
            bridges the gap between local manufacturers and global markets.
            Experience seamless transactions backed by comprehensive support
            throughout the process.
          </Text>

          <Heading as="h3" size="xl" mb={6} color="black.800">
            Your Premier Source for Vacuum Lifters in India
          </Heading>
          <Text fontSize="lg" mb={4} color="black">
            As leading manufacturers of vacuum lifters, we possess the technical
            knowledge and experience needed to deliver high-quality lifting
            equipment tailored to your specific needs. From manufacturing to
            distribution, we serve as your all-in-one partner. Our efficient
            supply chain management guarantees timely delivery of vacuum lifters
            across India and beyond.
          </Text>
          <Text fontSize="lg" mb={4} color="black">
            Our products undergo rigorous testing and quality checks to meet
            international standards. With our vacuum lifters, you gain peace of
            mind knowing that safety and performance are our top priorities.
          </Text>
          <Text fontSize="lg" mb={4} color="black">
            Choose us as your vacuum lifter supplier and gain access to
            cutting-edge technology that enhances productivity while reducing
            labor costs. Elevate your operations with our innovative lifting
            solutions today.
          </Text>
          <Text fontSize="lg" mb={8} color="black">
            At Shree Krishna Industries, we are more than just vacuum lifter
            manufacturers – we are your partners in efficient material handling.
            Our goal is to enhance your operational efficiency, improve
            workplace safety, and contribute to your business success through
            our innovative lifting solutions.
          </Text>

          {/* Expertise Sections */}
          <Box textAlign="left">
            <Text fontSize="xl" mb={4} fontWeight="bold" color="black.800">
              Our Expertise:
            </Text>
            <Text fontSize="lg" mb={6} color="black">
              With years of experience in the field, our team of skilled
              engineers and technicians possesses in-depth knowledge of vacuum
              lifting technology. We continually invest in research and
              development to stay at the forefront of industry advancements,
              ensuring that our products incorporate the latest innovations.
            </Text>

            <Text fontSize="xl" mb={4} fontWeight="bold" color="black.800">
              Custom Solutions:
            </Text>
            <Text fontSize="lg" mb={6} color="black">
              Understanding that each client has unique requirements, we
              specialize in creating custom vacuum lifting solutions. Our team
              works closely with clients to design and manufacture vacuum
              lifters that perfectly match their specific needs, ensuring
              optimal performance and satisfaction.
            </Text>

            <Text fontSize="xl" mb={4} fontWeight="bold" color="black.800">
              Quality Assurance:
            </Text>
            <Text fontSize="lg" mb={6} color="black">
              At Shree Krishna Industries, quality is paramount. We adhere to
              strict quality control measures throughout the manufacturing
              process, ensuring that every vacuum lifter that leaves our
              facility meets our high standards. Our products are rigorously
              tested for performance and safety before delivery.
            </Text>

            <Text fontSize="xl" mb={4} fontWeight="bold" color="black.800">
              Customer Support:
            </Text>
            <Text fontSize="lg" mb={6} color="black">
              We believe in building long-term relationships with our clients.
              Our dedicated customer support team is always ready to assist with
              product selection, installation guidance, and after-sales service.
              We also offer comprehensive maintenance and repair services to
              keep your vacuum lifters operating at peak efficiency.
            </Text>

            <Text fontSize="lg" color="black">
              For all your vacuum lifting needs in Pune and beyond, trust Shree
              Krishna Industries to deliver excellence, reliability, and
              innovation.
            </Text>
          </Box>
        </Box>
        {/* Counter Section */}
        <Grid
          ref={counterRef}
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
          mt={12}
          alignItems="center"
          justifyItems="center"
        >
          {[
            { label: "Happy Clients", value: happyClients, height: "300px" },
            { label: "Working Hands", value: workingHands, height: "250px" },
            {
              label: "Years Of Establishment",
              value: yearsEstablished,
              height: "300px",
            },
            {
              label: "Completed Projects",
              value: completedProjects,
              height: "250px",
            },
          ].map((item, index) => (
            <Box
              key={index}
              textAlign="center"
              p={6}
              bg="white"
              border="1px solid #0296d7"
              borderRadius="md"
              h={item.height}
              w="250px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              position="relative"
              overflow="hidden"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-50px)",
                boxShadow: "2px 2px 10px black",
                borderColor: "transparent",
                "& .underline": {
                  width: "0%",
                },
              }}
            >
              <Heading as="h3" size="2xl" color="black.800" mb={4}>
                {item.value}+
              </Heading>

              <Text
                fontSize="xl"
                fontWeight="medium"
                color="black.800"
                position="relative"
                pb={2}
              >
                {item.label}
                <Box
                  className="underline"
                  position="absolute"
                  left="0"
                  bottom="0"
                  width="100%"
                  height="2px"
                  bg="#f6a408"
                  transition="width 0.3s ease"
                />
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContentSection;
