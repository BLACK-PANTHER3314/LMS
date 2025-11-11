import { Box, Progress, Text } from "@chakra-ui/react";

const ProgressBar = ({ progress }) => (
  <Box w="100%" mt={4}>
    <Text fontWeight="medium">Course Progress: {progress}%</Text>
    <Progress value={progress} colorScheme="green" borderRadius="md" mt={2} />
  </Box>
);

export default ProgressBar;
