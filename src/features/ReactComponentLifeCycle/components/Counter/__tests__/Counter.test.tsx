import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "..";
describe("<Counter />", () => {
  afterEach(cleanup);
  it("should render init counter value", () => {
    const { getByTestId } = render(<Counter />);
    const countValueWrapper = getByTestId("current-count-value");
    expect(countValueWrapper.textContent).toBe("Button was clicked 0 times");
  });

  it("should should count increase by 1 when button clicked", () => {
    const { getByTestId, getByRole } = render(<Counter />);

    const countValueWrapper = getByTestId("current-count-value");
    const incrementButton = getByRole("button");
    expect(incrementButton).toBeVisible();
    expect(countValueWrapper).toBeVisible();

    userEvent.click(incrementButton);
    expect(countValueWrapper.textContent).toBe("Button was clicked 1 time");
    userEvent.click(incrementButton);
    expect(countValueWrapper.textContent).toBe("Button was clicked 2 times");
  });
});
