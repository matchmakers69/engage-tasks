import { Item } from "features/ComponentPropsWithStateManagement/types/Item";
import { toggleCompleteItemsData } from "../../service";

describe("toggles complete property in items when:", () => {
  const items: Item[] = [
    { id: 1, title: "Item 1", completed: false },
    { id: 2, title: "Item 2", completed: true },
    { id: 3, title: "Item 3", completed: false },
  ];

  it("toggles completed flag", () => {
    const updatedItems = toggleCompleteItemsData(items, 2);

    expect(updatedItems).toEqual([
      { id: 1, title: "Item 1", completed: false },
      { id: 2, title: "Item 2", completed: false },
      { id: 3, title: "Item 3", completed: false },
    ]);
  });

  it("returns original array when not found by id", () => {
    const updatedItems = toggleCompleteItemsData(items, 4);
    expect(updatedItems).toEqual([
      { id: 1, title: "Item 1", completed: false },
      { id: 2, title: "Item 2", completed: true },
      { id: 3, title: "Item 3", completed: false },
    ]);
  });

  it("returns new cloned array", () => {
    const updatedItems = toggleCompleteItemsData([], 1);
    expect(updatedItems).toEqual([]);
  });
});
