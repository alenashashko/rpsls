import { GameResult, Gesture } from "../../common/types";

export const play = (gesture: Gesture) =>
  fetch("/api/rounds", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gesture }),
  }).then((response) => response.json() as Promise<{ result: GameResult }>);
