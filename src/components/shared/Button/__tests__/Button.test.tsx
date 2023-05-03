import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "..";
describe("<Button />", () => {
  const mockClickHandler = jest.fn();

  it("should display button text", () => {
    const { getByText } = render(<Button type="button">Click me!</Button>);
    expect(getByText("Click me!")).toBeVisible();
  });

  it("should call onClick when prop onClick provided", () => {
    const { getByRole } = render(
      <Button type="button" onClick={mockClickHandler}>
        Click me!
      </Button>,
    );
    const button = getByRole("button");
    userEvent.click(button);

    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});
