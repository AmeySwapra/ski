import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Container,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import slide1 from '../assets/slider/slide1.jpg';
import slide2 from '../assets/slider/slide2.jpg';
import slide3 from '../assets/slider/slide3.jpg';

const slides = [
  {
    title: 'Shree Krishna Industries',
    text: 'Vacuum Lifter Manufacturers in India & Exporters. Variety of vacuum lifters in latest standard modular designs available.',
    link: 'about-us.php',
    linkText: 'EXPLORE MORE',
    bg: slide1,
  },
  {
    title: 'Vacuum Lifters Manufacturers',
    text: 'Vacuum Lifters Are Designed And Manufacturer In A Modular Fashion. Standard Components Are Selected To Match Your Application.',
    link: 'vacuum-lifters.php',
    linkText: 'SEE MORE',
    bg: slide2,
  },
  {
    title: 'Our Vision',
    text: 'Our Vision Is To Be Partners In Eco-Friendly Development With Preservation And Treatments.',
    link: 'about-us.php',
    linkText: 'ABOUT US',
    bg: slide3,
  },
];

export default function HeaderSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box as="header" position="relative" w="full" h={{base: '300px', md: '600px'}}>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: 5000 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="slider-main"
        style={{ height: '100%' }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Flex h={{base: '300px', md: '600px'}}>
             
              <Flex
                w="50%"
                bg="black"
                color="white"
                p={8}
                direction="column"
                justify="center"
              >
                <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
                  {(() => {
                    const words = slide.title.split(' ');
                    return (
                      <>
                        {words[0]}{' '}
                        <Text
                          as="span"
                          sx={{
                            WebkitTextStroke: '2px #f6a408',
                            textStroke: '1px #f6a408',
                            WebkitTextFillColor: 'transparent',
                            color: 'transparent',
                          }}
                        >
                          {words.slice(1).join(' ')}
                        </Text>
                      </>
                    );
                  })()}
                </Heading>
                <Text mb={4}>{slide.text}</Text>
                <Button
                  as="a"
                  href={slide.link}
                  rightIcon={<FaArrowRight />}
                  variant="outline"
                  borderColor="white"
                  color="white"
                >
                  {slide.linkText}
                </Button>
              </Flex>

              {/* Right side: background image & count */}
              <Box w="50%" position="relative" h={{base: '300px', md: '600px'}}>
                <Box
                  w="full"
                  h="full"
                  bgImage={`url(${slide.bg})`}
                  bgSize="cover"
                  bgPos="center"
                />
                <Box
                  position="absolute"
                  bottom={4}
                  right={4}
                  bg="rgba(0,0,0,0.6)"
                  color="white"
                  px={3}
                  py={1}
                  rounded="md"
                >
                  {activeIndex + 1}/{slides.length}
                </Box>
              </Box>
            </Flex>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <Box
          className="swiper-button-prev"
          position="absolute"
          top="50%"
          left={2}
          transform="translateY(-50%)"
          zIndex={10}
          cursor="pointer"
        >
          <FaArrowLeft color="white" />
        </Box>
        <Box
          className="swiper-button-next"
          position="absolute"
          top="50%"
          right={2}
          transform="translateY(-50%)"
          zIndex={10}
          cursor="pointer"
        >
          <FaArrowRight color="white" />
        </Box>
      </Swiper>
    </Box>
  );
}