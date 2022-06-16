import { gestures } from "../../common/config";
import { playGame } from "../helpers/playGame";

export const requestHandler = (req, res) => {
  const { gesture } = req.body;

  if (gestures.includes(gesture) === false) {
    return res.status(400).json({ status: "bad request" });
  }

  const result = playGame({ playerGesture: gesture });

  res.status(200).json({ result });
};
