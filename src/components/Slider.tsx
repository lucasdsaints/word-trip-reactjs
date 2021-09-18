import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, Swiper as SwiperModel } from 'swiper';
import { Text, VStack, Heading } from '@chakra-ui/react';

interface Continent {
  id: number;
  name: string;
  description: string;
  photo: string;
}

interface ContinentSliderProps {
  continents: Continent[];
  onContinentSelected: (id: string) => void
}

export default function ContinentSlider({ continents, onContinentSelected }: ContinentSliderProps) {
  function handleClick(swiper: SwiperModel) {
    const dataset = swiper?.clickedSlide?.dataset;
    if (!dataset?.continentId) {
      return;
    }

    onContinentSelected(dataset.continentId);
  }

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onClick={handleClick}
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
      {continents.map(continent => (
        <SwiperSlide key={continent.id} data-continent-id={continent.id}>
          <VStack
            bgImg={continent.photo} w="100%" h="450px" bgPosition="center"
            bgSize="cover" justify="center" cursor="pointer"
          >
            <Heading fontWeight="bold" color="gray.50" fontSize="5xl">{continent.name}</Heading>
            <Text fontWeight="bold" color="gray.100" fontSize="2xl">{continent.description}</Text>
          </VStack>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}