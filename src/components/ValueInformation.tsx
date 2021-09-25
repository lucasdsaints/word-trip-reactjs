import { VStack, Box, Text, HStack, Tooltip } from '@chakra-ui/react';

interface ValueInformationProps {
  name: string;
  value: string | number;
  description?: string;
}

export default function ValueInformation({ name, value, description }: ValueInformationProps) {
  return (
    <VStack key={name}>
      <Text color="yellow.500" fontSize="5xl" fontWeight="semibold">{value}</Text>
      <HStack>
        <Text color="gray.700" fontSize="2xl" fontWeight="semibold">{name}</Text>
        {description && (
          <Tooltip label={description} fontSize="lg" bg="gray.600">
            <Box bgImg="/svg/info.svg" w="4" h="4" cursor="pointer"/>
          </Tooltip>
        )}
      </HStack>
    </VStack>
  );
}