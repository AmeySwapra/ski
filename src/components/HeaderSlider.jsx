import React, { useState, useRef } from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import slide1 from "../assets/slider/slide1.jpg";
import slide2 from "../assets/slider/slide2.jpg";
import slide3 from "../assets/slider/slide3.jpg";

const slides = [
  {
    title: "Shree Krishna Industries",
    text: "Vacuum Lifter Manufacturers in India & Exporters. Variety of vacuum lifters in latest standard modular designs available.",
    link: "about-us",
    linkText: "EXPLORE MORE",
    bg: slide1,
  },
  {
    title: "Vacuum Lifters Manufacturers",
    text: "Vacuum Lifters Are Designed And Manufacturer In A Modular Fashion. Standard Components Are Selected To Match Your Application.",
    link: "vacuum-lifters",
    linkText: "SEE MORE",
    bg: slide2,
  },
  {
    title: "Our Vision",
    text: "Our Vision Is To Be Partners In Eco-Friendly Development With Preservation And Treatments.",
    link: "about-us",
    linkText: "ABOUT US",
    bg: slide3,
  },
];

export default function HeaderSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box as="header" position="relative" w="full" mb={{ base: "80px", md: "100px" }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{ 
          prevEl: prevRef.current, 
          nextEl: nextRef.current,
          disabledClass: "swiper-button-disabled"
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="slider-main"
        style={{ height: "100%" }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Flex
              h={{ base: "auto", md: "500px", lg: "600px" }}
              direction={{ base: "column", md: "row" }}
            >
              {/* Left panel */}
              <Flex
                w={{ base: "100%", md: "35%" }}
                bg="black"
                color="white"
                p={{ base: 6, md: 8 }}
                direction="column"
                justify="center"
                position="relative"
                pb={{ base: "60px", md: "20px" }}
                minH={{ base: "350px", sm: "400px", md: "auto" }}
              >
                <Heading 
                  as="h2" 
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "6xl" }} 
                  mb={4}
                  lineHeight={{ base: "1.2", md: "1.3" }}
                >
                  {(() => {
                    const words = slide.title.split(" ");
                    return (
                      <>
                        {words[0]} <Text 
                          as="span" 
                          sx={{ 
                            WebkitTextStroke: { base: "1px #f6a408", md: "2px #f6a408" }, 
                            textStroke: { base: "1px #f6a408", md: "1px #f6a408" }, 
                            WebkitTextFillColor: "transparent" 
                          }}
                        >
                          {words.slice(1).join(" ")}
                        </Text>
                      </>
                    );
                  })()}
                </Heading>
                <Text 
                  mb={4} 
                  fontSize={{ base: "md", sm: "lg", md: "xl" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  {slide.text}
                </Text>
                <Button
                  as="a"
                  href={slide.link}
                  rightIcon={<FaArrowRight />}
                  color="black"
                  bg="#f6a408"
                  position="absolute"
                  left="50%"
                  bottom={{ base: "20px", md: "10px" }}
                  transform="translateX(-50%)"
                  zIndex={1000}
                  minW={{ base: "180px", md: "200px" }}
                  size={{ base: "md", md: "lg" }}
                  _hover={{ 
                    transform: "translateX(-50%) translateY(-10px)", 
                    boxShadow: "10px 10px 10px #f6a408" 
                  }}
                >
                  {slide.linkText}
                </Button>
              </Flex>

              {/* Right panel */}
              <Box 
                w={{ base: "100%", md: "65%" }} 
                position="relative" 
                h={{ base: "300px", sm: "350px", md: "500px", lg: "600px" }}
              >
                <Box 
                  w="full" 
                  h="full" 
                  bgImage={`url(${slide.bg})`} 
                  bgSize="cover" 
                  bgPos="center" 
                />
                <Flex
                  width={{ base: "100px", md: "160px" }}
                  height={{ base: "140px", md: "180px" }}
                
                  flexWrap="wrap"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  bg="#f6a408"
                  position="absolute"
                  left={{ base: "20%", md: "30px" }}
                  bottom={{ base: "10px", md: "30px" }}
                  transform={{ base: "translateX(-50%)", md: "none" }}
                  zIndex={1}
                >
                  <Text as="b" fontSize={{ base: "lg", md: "4xl" }} width="100%">
                    30
                  </Text>
                  <Text as="small" fontSize={{ base: "sm", md: "md" }} width="100%">
                    YEARS OF EXPERIENCE
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination & Arrows */}
      <Flex 
        position="absolute" 
        bottom={{ base: -20, md: -40 }} 
        left={{ base: 4, md: 8 }} 
        align="center" 
        px={{ base: 2, md: 8 }} 
        py={2} 
        rounded="md" 
        zIndex={10}
      >
        <Text fontSize={{ base: "5xl", md: "8xl" }} color="black" mr={{ base: 2, md: 4 }}>
          {activeIndex + 1}
        </Text>
        <Text fontSize={{ base: "5xl", md: "8xl" }} color="gray.500" mr={{ base: 4, md: 8 }}>
          /{slides.length}
        </Text>
        <Box 
          ref={prevRef} 
          cursor="pointer" 
          w={{ base: "60px", md: "80px" }} 
          h={{ base: "60px", md: "80px" }} 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          borderRadius="50%" 
          bg="blue.400" 
          mr={{ base: 2, md: 4 }} 
          _hover={{ bg: "#f6a408" }}
          fontSize={{ base: "16px", md: "24px" }}
        >
          <FaArrowLeft  color="black" />
        </Box>
        <Box 
          ref={nextRef} 
          cursor="pointer" 
          w={{ base: "60px", md: "80px" }} 
          h={{ base: "60px", md: "80px" }} 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          borderRadius="50%" 
          bg="blue.400" 
          _hover={{ bg: "#f6a408" }}
          fontSize={{ base: "16px", md: "24px" }}
        >
          <FaArrowRight  color="black" />
        </Box>
      </Flex>
    </Box>
  );
}