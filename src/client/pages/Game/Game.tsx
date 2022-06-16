import { useState } from "react";
import { gestures } from "../../../common/config";
import { GameResult } from "../../../common/types";
import { play } from "../../api";
import styles from "./Game.module.css";

export function Game() {
    const [gameResult, setGameResult] = useState<GameResult | undefined>();

    const playGame = async (gesture) => {
        const {result} = await play(gesture);

        setGameResult(result);
    };

    if (gameResult) return (
        <div className={styles.container}>
          <h1 className={styles.result}>Winner: {gameResult}</h1>
        </div>
    );

    return (
        <div className={styles.container}>
          {gestures.map((gesture) => 
            <button key={gesture} className={styles.button} onClick={() => playGame(gesture)}>{gesture}</button>
          )}
        </div>
    );
}
