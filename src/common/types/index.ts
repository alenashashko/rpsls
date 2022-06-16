import { playGame } from "../../server/helpers/playGame";
import { gestures } from "../config";

export type Gesture = typeof gestures[number];

export type GameResult = ReturnType<typeof playGame>;
