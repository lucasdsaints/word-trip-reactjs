import { Box, Container, Divider, Heading, HStack, Img, Text, VStack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import { contnents } from '../mocks/continents';

import 'swiper/css';
import 'swiper/css/pagination';


export default function Home() {  

  return (
    <Box>
      <Header />
      <HomeBanner />
      <Container maxW="container.xl" px="5" mt="28" mb="10">
        <HStack justify="space-evenly">
          <VStack w="160px">
            <Img src="svg/cocktail.svg" alt="Drink" mb="6"/>
            <Text fontWeight="semibold" fontSize="2xl">vida noturna</Text>
          </VStack>
          <VStack w="160px">
            <Img src="svg/surf.svg" alt="Drink" mb="6"/>
            <Text fontWeight="semibold" fontSize="2xl">praia</Text>
          </VStack>
          <VStack w="160px">
            <Img src="svg/building.svg" alt="Drink" mb="6"/>
            <Text fontWeight="semibold" fontSize="2xl">moderno</Text>
          </VStack>
          <VStack w="160px">
            <Img src="svg/museum.svg" alt="Drink" mb="6"/>
            <Text fontWeight="semibold" fontSize="2xl">clássico</Text>
          </VStack>
          <VStack w="160px">
            <Img src="svg/earth.svg" alt="Drink" mb="6"/>
            <Text fontWeight="semibold" fontSize="2xl">e mais...</Text>
          </VStack>
        </HStack>

        <Divider
          w="90px" mx="auto" my="16"
          borderColor="gray.700"
          borderBottomWidth="2px"
        />

        <Text fontSize="3xl" align="center" fontWeight="medium" mb="12">
          Vamos nessa?<br />
          Então escolha seu continente
        </Text>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          loop={true}
          pagination={{
            "clickable": true 
          }}
          autoplay={{
            "delay": 3000,
            "disableOnInteraction": false
          }}
        >
          {contnents.map(continent => (
            <SwiperSlide key={continent.id} >
              <VStack bgImg={continent.photo} w="100%" h="450px" bgPosition="center" bgSize="cover" justify="center">
                <Heading fontWeight="bold" color="gray.50" fontSize="5xl">{continent.name}</Heading>
                <Text fontWeight="bold" color="gray.100" fontSize="2xl">{continent.description}</Text>
              </VStack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}

