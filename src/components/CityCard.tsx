import { VStack, Img, HStack, Text } from '@chakra-ui/react';

interface CityCardProps {
  photo: string;
  name: string;
  countryName: string;
}

export default function CityCard({ name, photo, countryName }: CityCardProps) {
  return (
    <VStack
      bgColor="white" border="solid" borderColor="yellow.100"
      borderRadius={4} overflow="hidden" borderWidth={1}
    >
      <Img src={photo} w="100%" mb="2"/>
      <HStack w="100%" pb="6" justifyContent="space-around">
        <VStack alignItems="flex-start">
          <Text color="gray.700" fontSize="xl" fontWeight="semibold">{name}</Text>
          <Text color="gray.600" frontSize="md">{countryName}</Text>
        </VStack>
        <Img borderRadius="full" boxSize="30px"/>
      </HStack>
    </VStack>
  );
}