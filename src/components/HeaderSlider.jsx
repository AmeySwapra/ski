import React, { useState, useRef, useEffect } from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import slide1 from "../assets/slider/slide1.jpg";
import slide2 from "../assets/slider/slide2.jpg";
import slide3 from "../assets/slider/slide3.jpg";
import banner from '../assets/banner/header-pattern.webp';

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
  const swiperRef = useRef(null);

  const swiperParams = {
    modules: [Navigation, Autoplay],
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    },
    slidesPerView: 1,
    loop: true,
    autoplay: { delay: 5000 },
    onSlideChange: (swiper) => setActiveIndex(swiper.realIndex),
    onInit: (swiper) => {
      // wire up our custom nav buttons
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    },
  };

  return (
    <Box as="header" position="relative" w="full" >
      <Swiper
        ref={swiperRef}
        {...swiperParams}
        className="slider-main"
        style={{ height: "100%" }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Flex
              h={{ base: "auto", md: "600px" }}
              direction={{ base: "column", md: "row" }}
              position="relative"
            >
              {/* Left panel */}
              <Flex
                w={{ base: "100%", md: "45%" }}
                h={{ base: "400px", md: "400px" }}
                bgImage={`url(${banner})`}
                bgSize="cover"
                color="white"
                bgColor="#0b0b0b"
                px={{ base: 6, md: 8, lg: 24 }}
                py={
                  activeIndex === 0
                    ? 20
                    : activeIndex === 1
                    ? 16
                    : activeIndex === 2
                    ? 24
                    : 16 
                }
                direction="column"
                justify="flex-start"
                position="relative"
                
              >
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  key={`text-${activeIndex}`}
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
                    minW={{ base: "180px", md: "200px" }}
                    size={{ base: "md", md: "lg" }}
                    _hover={{ 
                      transform: "translateY(-5px)", 
                      boxShadow: "5px 5px 10px rgba(246, 164, 8, 0.5)" 
                    }}
                    transition="all 0.3s ease"
                  >
                    {slide.linkText}
                  </Button>
                </motion.div>
              </Flex>

              {/* Right panel */}
              <Box 
                w={{ base: "100%", md: "55%" }} 
                position="relative" 
                h={{ base: "300px", sm: "350px", md: "480px" }}
              >
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  key={`image-${activeIndex}`}
                  style={{ height: "100%" }}
                >
                  <Box 
                    w="full" 
                    h="full" 
                    bgImage={`url(${slide.bg})`} 
                    bgSize="cover" 
                    bgPos="center" 
                  />
                </motion.div>
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

      {/* Counter and navigation */}
      <Flex 
        position="absolute" 
        bottom={{ base: "-60px", md: "80px" }}
        left={{ base: "50%", md: "100px" }}
        transform={{ base: "translateX(-50%)", md: "none" }}
        gap={10}
        w={{ base: "100%", md: "35%" }}
        align="center" 
        justify="space-between"
        px={{ base: 4, md: 8, lg: 24 }} 
        py={4}
        zIndex={2}             
      >
        <Flex align="center">
          <Text fontSize={{ base: "5xl", md: "6xl" }} color="gray.800" mr={{ base: 2, md: 2 }}>
            {activeIndex + 1}
          </Text>
          <Text fontSize={{ base: "5xl", md: "6xl" }} color="gray.500">
            /{slides.length}
          </Text>
        </Flex>
        
        <Flex>
          <Box 
            ref={prevRef} 
            cursor="pointer" 
            w={{ base: "50px", md: "80px" }} 
            h={{ base: "50px", md: "80px" }} 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            borderRadius="50%" 
            bg="blue.400" 
            mr={{ base: 2, md: 4 }}
            _hover={{ bg: "#f6a408" }}
            transition="background-color 0.3s ease"
            fontSize={{ base: "16px", md: "20px" }}
          >
            <FaArrowLeft color="black" />
          </Box>
          <Box 
            ref={nextRef} 
            cursor="pointer" 
            w={{ base: "50px", md: "80px" }} 
            h={{ base: "50px", md: "80px" }} 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            borderRadius="50%" 
            bg="blue.400" 
            _hover={{ bg: "#f6a408" }}
            transition="background-color 0.3s ease"
            fontSize={{ base: "16px", md: "20px" }}
          >
            <FaArrowRight color="black" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
