import { Box, Flex, Input, Button, VStack, Text, useBreakpointValue } from "@chakra-ui/react";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const sendMessage = () => {
    console.log("Message sent");
  };

  return (
    <Flex height="100vh" overflow="hidden">
      <Box width={isMobile ? "100%" : "30%"} bg="gray.100" p={4}>
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">Contacts</Text>
          <Box w="100%" bg="white" p={3} borderRadius="md">Contact 1</Box>
          <Box w="100%" bg="white" p={3} borderRadius="md">Contact 2</Box>
          <Box w="100%" bg="white" p={3} borderRadius="md">Contact 3</Box>
        </VStack>
      </Box>
      <Flex direction="column" flex="1" p={4} bg="white">
        <VStack spacing={4} flex="1" overflowY="auto">
          <Box w="100%" bg="gray.50" p={3} borderRadius="md">Message 1</Box>
          <Box w="100%" bg="gray.50" p={3} borderRadius="md">Message 2</Box>
          <Box w="100%" bg="gray.50" p={3} borderRadius="md">Message 3</Box>
        </VStack>
        <Flex mt={4}>
          <Input placeholder="Type a message..." flex="1" />
          <Button ml={2} onClick={sendMessage}>Send</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;