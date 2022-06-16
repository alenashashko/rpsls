import { Box, Heading, Container, VStack, Link } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import s from "./Home.module.css";

export function Home() {
  return (
    <div>
      <Head>
        <title>RPS</title>
      </Head>

      <main>
        <Container maxW="container.lg" marginTop="5vh">
          <VStack spacing={5}>
            <Heading as="h1" size="2xl" noOfLines={1}>
              Rock Paper Scissors
            </Heading>

            <Box position="relative">
              <NextLink href="/game" passHref>
                <Link fontSize="2xl" fontWeight="600" color="blue.400">Play!</Link>
              </NextLink>
            </Box>
          </VStack>
        </Container>
      </main>
    </div>
  );
}
