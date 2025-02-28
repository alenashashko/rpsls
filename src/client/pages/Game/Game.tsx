import { Heading, Container, VStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FinalScreen } from "./FinalScreen/FinalScreen";
import { gestures, gestureToImage } from "../../../common/config";
import { GameResult } from "../../../common/types";
import { play } from "../../api";
import s from "./Game.module.css";

export function Game() {
  const [gameResult, setGameResult] = useState<GameResult | undefined>();

  const playGame = async (gesture) => {
    const { result } = await play(gesture);

    setGameResult(result);
  };

  if (gameResult) {
    return <FinalScreen gameResult={gameResult} />;
  }

  return (
    <Container maxW="container.lg" marginTop="5vh">
      <VStack spacing={5} align="center">
        <Heading as="h1" size="lg" noOfLines={1}>
          Your choice:
        </Heading>

        <VStack spacing={5}>
          {gestures.map((gesture) => (
            <Button key={gesture} minW={130} onClick={() => playGame(gesture)}>
              {gestureToImage[gesture]}
              <span className={s.buttonText}>{gesture}</span>
            </Button>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
}
