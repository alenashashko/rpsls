import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home", () => {
  test("initial view should contain link to start playing", () => {
    const { container } = render(<Home />);

    expect(container.querySelector("a[href='/game']")).toBeTruthy();
  });
});
