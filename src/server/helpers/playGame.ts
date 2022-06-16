import { gestures } from "../../common/config";
import { Gesture } from "../../common/types";

export const playGame = (
  options: { playerGesture: Gesture },
  computerChoiceIndex?: number
) => {
  const computerGestureIndex =
    typeof computerChoiceIndex === "number"
      ? computerChoiceIndex
      : Math.floor(Math.random() * gestures.length);
  const computerGesture = gestures[computerGestureIndex];
  const { playerGesture } = options;
  const playerGestureIndex = gestures.findIndex((g) => g === playerGesture);

  console.log(`computer: ${computerGesture} - player: ${playerGesture}`);

  if (computerGesture === playerGesture) {
    return "draw";
  }

  const matrix = [
    // scissors, paper, rock, lizard, spock
    [0, 1, 0, 1, 0], // scissors
    [0, 0, 1, 0, 1], // paper
    [1, 0, 0, 1, 0], // rock
    [0, 1, 0, 0, 1], // lizard
    [1, 0, 1, 0, 0], // spock
  ];

  if (matrix[playerGestureIndex][computerGestureIndex]) {
    return "player";
  }

  return "computer";
};
