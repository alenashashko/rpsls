import { gestures } from "../../common/config";
import { playGame } from "./playGame";

describe("playGame", () => {
  gestures.forEach((gesture, gestureIndex) => {
    test(`computer: ${gesture}, player: ${gesture}`, () => {
      jest
        .spyOn(global.Math, "random")
        .mockReturnValue(gestureIndex / gestures.length);

      expect(playGame({ playerGesture: gesture })).toEqual("draw");
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
          jest
            .spyOn(global.Math, "random")
            .mockReturnValue(gestureAIndex / gestures.length);

          expect(playGame({ playerGesture: gestureB })).toEqual(
            shouldBeat[gestureA].includes(gestureB) ? "computer" : "player"
          );
        });
      }
    });
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });
});
