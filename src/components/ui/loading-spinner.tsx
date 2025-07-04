import { Box, Center, Loader } from '@mantine/core';

export default function LoadingSpinner() {
  return (
    <Box pos="relative">
      <Center mt="10rem">
        <Loader size={50} />
      </Center>
    </Box>
  );
}
