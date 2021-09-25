import { Center, Img, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <Center h="100px">
      {
        router.pathname !== '/' &&
        <Tooltip label="Voltar" fontSize="lg" bg="gray.600">
          <Img
            src="/svg/arrow-left.svg" fill="gray.800" onClick={() => router.back()}
            position="absolute" left="36" cursor="pointer"
          />
        </Tooltip>
      }
      <Img src="/svg/logo.svg" alt="Logo world trip" />
    </Center>
  );
}