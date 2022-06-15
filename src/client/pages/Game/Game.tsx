import { useReducer } from "react";
import { play } from "../../api";
import styles from "./Game.module.css";


let result;

export function Game() {
    const [_, forceUpdate] = useReducer(x => x + 1, 0);

    const playGame = gesture => {
        const data = play(gesture);
        // TODO: fix
        // @ts-ignore
        result = data.result;

        forceUpdate();
    };

    if (result) return (
        <div className={styles.container}>
          <h1 className={styles.result}>{result}</h1>
        </div>
    );

    return (
        <div className={styles.container}>
          <button onClick={() => playGame("rock")}>rock</button>
          <button onClick={() => playGame("paper")}>paper</button>
          <button onClick={() => playGame("scissors")}>scissors</button>
        </div>
    );
}
