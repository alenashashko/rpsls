import { useReducer } from "react";
import { play } from "../../helpers/pages/game.ts";
import styles from "../../styles/Game.module.css";


let result;

export default () => {
    const [_, forceUpdate] = useReducer(x => x + 1, 0);

    const playGame = gesture => {
        const data = play(gesture);
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
