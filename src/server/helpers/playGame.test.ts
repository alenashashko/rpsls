import { gestures } from "../../common/config";
import { playGame } from "./playGame";

gestures.forEach((gesture, gestureIndex) => {
  test(`computer: ${gesture}, player: ${gesture}`, () => {
    expect(playGame({ playerGesture: gesture }, gestureIndex)).toEqual("draw");
  });
});

const shouldBeat = {
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  rock: ["scissors", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["scissors", "rock"],
};

gestures.forEach((gestureA, gestureAIndex) => {
  gestures.forEach((gestureB) => {
    if (gestureA !== gestureB) {
      test(`computer: ${gestureA}, player: ${gestureB}`, () => {
        expect(playGame({ playerGesture: gestureB }, gestureAIndex)).toEqual(
          shouldBeat[gestureA].includes(gestureB) ? "computer" : "player"
        );
      });
    }
  });
});
