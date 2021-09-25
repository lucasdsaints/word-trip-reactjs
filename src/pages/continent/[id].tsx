import { useEffect, useState } from 'react';
import { Box, SimpleGrid, Container, Text, HStack, Heading, VStack, Img } from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { useRouter } from 'next/dist/client/router';
import Header from '../../components/Header';
import ContinentBanner from '../../components/ContinentBanner';
import ValueInformation from '../../components/ValueInformation';
import CityCard from '../../components/CityCard';

interface AditionalInfo {
  name: string;
  value: string | number;
  description?: string;
}

export default function ContinentDetails() {

  const [continent, setContinent] = useState<any>({});
  const [aditionalInfo, setAditionalInfo] = useState<AditionalInfo[]>([]);
  const router = useRouter();
  const continentId = (router.query.id as string);

  useEffect(() => {
    if (+continentId) {
      getContinentDetail();
    }
  }, [continentId]);

  useEffect(() => {
    const newAditionalInfo: AditionalInfo[] = [
      { name: 'países', value: continent.numberOfCountries },
      { name: 'línguas', value: continent.numberOfLanguages },
      { name: 'cidades +50', value: continent.plus50cities?.length, description: 'As 50 cidades mais visitadas do mundo' },
    ]
    setAditionalInfo(newAditionalInfo);
  }, [continent]);

  async function getContinentDetail() {
    try {
      const res = await fetch(`/api/continents/${continentId}`);
      const parsedRes = await res.json();
      console.log('lcuas', parsedRes)
      setContinent(parsedRes?.continent ?? []);
    } catch {
      setContinent([]);
    }
  }

  return (
    <Box>
      <Header />
      <ContinentBanner name={continent.name} photo={continent.photo} />
      <Container maxW="container.lg">
        <SimpleGrid columns={2} spacing="20" mb="20">
          <Text textAlign="justify" color="gray.700" fontSize="2xl">
            {continent.longDescription}
          </Text>
          <HStack justifyContent="space-between">
            {aditionalInfo.map(info => (
              <ValueInformation
                key={info.name}
                name={info.name}
                value={info.value}
                description={info.description}
              />
            ))}
          </HStack>
        </SimpleGrid>
        <Box as="section" mb="9">
          <Heading as="h3" fontSize="4xl" fontWeight="medium" mb="10">
            Cidades +50
          </Heading>
          <SimpleGrid columns={4} spacing="16">
            {continent.plus50cities?.map(city => (
              <CityCard
                key={city.id}
                name={city.name}
                countryName={city.country}
                photo="https://source.unsplash.com/256x173/?city"
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

