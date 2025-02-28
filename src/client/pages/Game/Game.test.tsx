import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { gestures } from "../../../common/config";
import { GameResult } from "../../../common/types";
import { play } from "../../api";
import { Game } from "./Game";

jest.mock("../../api", () => ({
  play: jest.fn(() => Promise.resolve("draw")),
}));

describe("Game", () => {
  test("initial view should contain 5 gesture buttons", () => {
    const { container } = render(<Game />);

    expect(container.querySelectorAll("button").length).toEqual(5);
  });

  gestures.forEach((gesture) => {
    test(`function play is called on gesture ${gesture} click`, () => {
      render(<Game />);

      fireEvent.click(screen.getByText(gesture));

      expect(play).toHaveBeenLastCalledWith(gesture);
    });
  });

  ["computer", "player", "draw"].map((winner) => {
    test(`on result equals ${winner} should render text`, async () => {
      render(<Game />);

      const mockedPlay = play as jest.MockedFunction<typeof play>;

      mockedPlay.mockImplementationOnce(() =>
        Promise.resolve({ result: winner as GameResult })
      );

      fireEvent.click(screen.getByText("scissors"));

      const searchForText =
        winner === "draw" ? "It's a draw!" : `Winner is ${winner}!`;

      await waitFor(() => screen.getByText(searchForText));

      expect(screen.getByText(searchForText)).toBeTruthy();
    });
  });
});
