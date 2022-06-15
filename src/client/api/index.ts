import { Gesture } from "../../types";

export const play = (gesture: Gesture) => fetch("/api/rounds", {
    method: 'POST',
    body: JSON.stringify({ gesture })
}).then(response => response.json() as Promise<{ result: string }>)

