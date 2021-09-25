import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, Swiper as SwiperModel } from 'swiper';
import { Text, VStack, Heading, Box } from '@chakra-ui/react';
import Link from 'next/link';

interface Continent {
  id: number;
  name: string;
  description: string;
  photo: string;
}

interface ContinentSliderProps {
  continents: Continent[];
}

export default function ContinentSlider({ continents }: ContinentSliderProps) {

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
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
        <SwiperSlide key={continent.id}>
          <Link href={`/continent/${continent.id}`} passHref>
            <VStack
              bgImg={continent.photo} w="100%" h="450px" bgPosition="center"
              bgSize="cover" justify="center" cursor="pointer" pos="relative"
            >
              <Box bgColor="gray.800" opacity={.35} w="100%" h="100%" pos="absolute" top={0} left={0} />
              <Heading pos="relative" zIndex="1" fontWeight="bold" color="gray.50" fontSize="5xl">{continent.name}</Heading>
              <Text pos="relative" zIndex="1" fontWeight="bold" color="gray.100" fontSize="2xl">{continent.description}</Text>
            </VStack>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}