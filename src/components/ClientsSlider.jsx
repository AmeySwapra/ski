import { Box, Container, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const scroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

import pic1 from "../assets/client/1.jpg";
import pic2 from "../assets/client/2.jpg";
import pic3 from "../assets/client/3.jpg";
import pic4 from "../assets/client/4.jpg";
import pic5 from "../assets/client/5.jpg";
import pic6 from "../assets/client/6.jpg";
import pic7 from "../assets/client/7.jpg";
import pic8 from "../assets/client/8.jpg";
import pic9 from "../assets/client/9.jpg";
import pic10 from "../assets/client/10.jpg";
import pic11 from "../assets/client/11.jpg";
import pic12 from "../assets/client/12.jpg";
import pic13 from "../assets/client/13.jpg";
import pic14 from "../assets/client/14.jpg";
import pic15 from "../assets/client/15.jpg";
import pic16 from "../assets/client/16.jpg";
import pic17 from "../assets/client/17.jpg";
import pic18 from "../assets/client/18.jpg";
import pic19 from "../assets/client/19.jpg";
import pic20 from "../assets/client/20.jpg";
import pic21 from "../assets/client/21.jpg";
import pic22 from "../assets/client/22.jpg";

const logos = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
  pic17,
  pic18,
  pic19,
  pic20,
  pic21,
  pic22,
];

const ClientsSlider = () => {
  const trackWidth = logos.length * 100 * 2;

  return (
    <Box as="section" bg="#f7f6f1" py={10} px={[4,8,24]}>
      <Container maxW="container.xl" overflow="hidden">
        <Box
          display="flex"
          width={`${trackWidth}px`}
          animation={`${scroll} 80s linear infinite`}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <Box key={idx} flex="0 0 auto" w="200px" h="150px" mr={4}>
              <Image
                src={logo}
                alt={`client ${(idx % logos.length) + 1}`}
                objectFit="contain"
                w="100%"
                h="100%"
                draggable="false"
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ClientsSlider;
