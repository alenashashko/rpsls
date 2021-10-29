import { playGame } from "../../../helpers/api/rounds.ts";

export default (req, res) => {
    const { gesture } = req.body;

    const result = playGame({ playerGesture: gesture });

    res.statusCode = 209;
    res.json({ result });
}
