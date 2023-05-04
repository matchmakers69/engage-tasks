import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserItem from "..";
describe("<UserItem />", () => {
  it("should have required props", () => {
    const { getByText } = render(
      <UserItem
        first_name="John"
        last_name="Doe"
        email="email@yahoo.com"
        job_title="developer"
        bio=""
        reference=""
        username=""
      />,
    );
    expect(getByText("John")).toBeVisible();
    expect(getByText("Doe")).toBeVisible();
    expect(getByText("email@yahoo.com")).toBeVisible();
    expect(getByText("developer")).toBeVisible();
  });

  it("should hide/show extra content on button click", () => {
    const { getByRole, queryByTestId, getByText } = render(
      <UserItem
        first_name=""
        last_name=""
        email=""
        job_title=""
        bio="Lorem"
        reference=""
        username=""
      />,
    );
    const expandedableContent = queryByTestId("hidden-content");
    expect(expandedableContent).toBeNull();
    const button = getByRole("button");
    userEvent.click(button);
    expect(getByText("Lorem")).toBeVisible();
    userEvent.click(button);
    expect(expandedableContent).toBeNull();
  });
});
