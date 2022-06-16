import { Heading, Box, Container, VStack } from "@chakra-ui/react";

export function FinalScreen({ gameResult }) {
  return (
    <Container maxW="container.lg" marginTop="5vh">
      <VStack spacing={5}>
        <Heading as="h1" size="2xl" noOfLines={1} textAlign="center">
          {gameResult === "draw" ? "It's a draw!" : `Winner is ${gameResult}!`}
        </Heading>

        <Box fontSize={120}>🎉</Box>
      </VStack>
    </Container>
  );
}
