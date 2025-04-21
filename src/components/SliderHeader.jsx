import { Box, Container, Heading, Text, Button, Flex, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import slide1 from '../assets/slider/slide1.jpg'
import slide2 from '../assets/slider/slide2.jpg'
import slide3 from '../assets/slider/slide3.jpg'

const SliderHeader = () => {
  const slides = [
    {
      id: 1,
      title: "Shree Krishna Industries",
      highlight: "Krishna",
      description: "Vacuum Lifter Manufacturers in India & Exporters. Variety of vacuum lifters in latest standard modular designs available.",
      linkText: "EXPLORE MORE",
      link: "about-us.php",
      bgImage: slide3
    },
    {
      id: 2,
      title: "Vacuum Lifters Manufacturers",
      highlight: "Lifters",
      description: "Vacuum Lifters Are Designed And Manufacturer In A Modular Fashion. Standard Components Are Selected To Match Your Application.",
      linkText: "SEE MORE",
      link: "vacuum-lifters.php",
      bgImage: slide2
    },
    {
      id: 3,
      title: "Our Vision",
      highlight: "Vision",
      description: "Our Vision Is To Be Partners In Eco-Friendly Development With Preservation And Treatments.",
      linkText: "ABOUT US",
      link: "about-us.php",
      bgImage: slide1
    }
  ];

  const NavigationButtons = () => {
    const swiper = useSwiper();
    return (
      <Flex position="absolute" bottom={8} right={8} zIndex={10} gap={4}>
        <IconButton
          aria-label="Previous slide"
          icon={<ChevronLeftIcon />}
          onClick={() => swiper.slidePrev()}
          variant="ghost"
          colorScheme="whiteAlpha"
          color="white"
          fontSize="xl"
          rounded="full"
          size="lg"
        />
        <IconButton
          aria-label="Next slide"
          icon={<ChevronRightIcon />}
          onClick={() => swiper.slideNext()}
          variant="ghost"
          colorScheme="whiteAlpha"
          color="white"
          fontSize="xl"
          rounded="full"
          size="lg"
        />
      </Flex>
    );
  };

  return (
    <Box as="header" position="relative" h={["500px", "650px"]} overflow="hidden">
      {/* Background Slides */}
      <Box position="absolute" top={0} left={0} w="100%" h="100%" zIndex={1}>
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 5000 }}
          loop
          speed={1000}
          allowTouchMove={false}
          style={{ height: '100%' }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={`bg-${slide.id}`}>
              <Box
                bgImage={`url(${slide.bgImage})`}
                bgSize="cover"
                bgPosition="center"
                w="100%"
                h="100%"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Content Slides */}
      <Container maxW="container.xl" h="100%" position="relative" zIndex={2}>
        <Box position="absolute" bottom={[8, 16]} left={0} w="100%">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            loop
            speed={800}
            breakpoints={{
              768: {
                slidesPerView: 1.5,
                spaceBetween: 20
              },
              992: {
                slidesPerView: 2.5,
                spaceBetween: 20
              }
            }}
            style={{ padding: '0 40px' }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={`content-${slide.id}`} style={{ width: '495px' }}>
                <Box 
                  bg="blackAlpha.700" 
                  p={8} 
                  color="white"
                  backdropFilter="blur(5px)"
                  borderRadius="md"
                >
                  <Heading as="h2" fontSize={["2xl", "3xl"]} mb={4}>
                    {slide.title.split(' ').map((word, i) => 
                      word === slide.highlight ? (
                        <Text as="b" key={i} color="blue.300"> {word} </Text>
                      ) : (
                        <Text as="span" key={i}> {word} </Text>
                      )
                    )}
                  </Heading>
                  <Text mb={6} fontSize={["md", "lg"]}>{slide.description}</Text>
                  <Button 
                    variant="outline" 
                    colorScheme="whiteAlpha" 
                    rightIcon={<ChevronRightIcon />}
                    as="a"
                    href={slide.link}
                  >
                    {slide.linkText}
                  </Button>
                </Box>
              </SwiperSlide>
            ))}
            <NavigationButtons />
          </Swiper>
        </Box>
      </Container>

      {/* Experience Badge */}
      <Box 
        position="absolute" 
        top={8} 
        right={8} 
        zIndex={10}
        bg="blackAlpha.700"
        color="white"
        p={4}
        borderRadius="md"
        textAlign="center"
        backdropFilter="blur(5px)"
      >
        <Text as="b" fontSize="2xl">30</Text>
        <Text fontSize="sm">YEARS OF EXPERIENCE</Text>
      </Box>
    </Box>
  );
};

export default SliderHeader;