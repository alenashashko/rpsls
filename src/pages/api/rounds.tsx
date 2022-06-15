import { gestures } from "../../common/config";
import { playGame } from "../../server/helpers/playGame";

export default (req, res) => {
    const { gesture } = req.body;

    if (gestures.includes(gesture) === false) {
        return res.status(400).json({ status: 'bad request' });
    }

    const result = playGame({ playerGesture: gesture });

    res.status(200).json({ result });
}
