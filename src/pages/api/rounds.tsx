import { playGame } from "../../server/helpers/rounds";

export default (req, res) => {
    const { gesture } = req.body;

    const result = playGame({ playerGesture: gesture });

    res.statusCode = 209;
    res.json({ result });
}
