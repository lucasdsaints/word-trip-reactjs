import { Heading, Box } from '@chakra-ui/react';

interface ContinentBannerProps {
  name: string;
  photo: string;
}

export default function ContinentBanner({ name, photo }: ContinentBannerProps) {
  return (
    <Box 
      bgSize="cover" h={500} w="100%" bgPos="center" pos="relative"
      bgImg={photo} bgRepeat="no-repeat" d="flex" mb="20"
    >
      <Box bgColor="gray.800" opacity={.35} w="100%" h="100%" pos="absolute" top={0} left={0} />
      <Heading pos="relative" d="" zIndex="1" color="white" mt="auto" mb="16" ml="36" fontSize="5xl">
        {name}
      </Heading>
    </Box>
  );
}