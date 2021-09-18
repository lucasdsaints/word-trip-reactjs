import { Container, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react';

export default function HomeBanner() {
  return (
    <HStack
      bgSize="cover" h="335px"
      justify="space-between"
      bgImg="img/bg-1.png"
      bgRepeat="no-repeat"
    >
      <Container maxW="container.xl" px="5">
        <HStack justify="space-between" p="2">
          <Stack justify="center" align="flex-start">
            <Heading color="gray.50">
              5 Continentes,<br /> infinitas possibilidades
            </Heading>
            <Text fontSize="xl" color="gray.100" maxW="xl">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>
          <Img
            w="420px" alt="Avião"
            src="svg/airplane.svg"
            transform="translateY(22%)"
          />
        </HStack>
      </Container>
    </HStack>
  );
}