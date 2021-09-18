import { Box, Container, Divider, HStack, Img, Text, VStack } from '@chakra-ui/react';

import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import { continents } from '../mocks/continents';

import 'swiper/css';
import 'swiper/css/pagination';
import ContinentSlider from '../components/Slider';


export default function Home() {

  function handleContinentSelected(id: string) {
    console.log('id', id)
  }

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

        <ContinentSlider continents={continents} onContinentSelected={handleContinentSelected}/>
      </Container>
    </Box>
  );
}

