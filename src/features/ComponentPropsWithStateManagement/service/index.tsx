import { Item } from "../types/Item";

export const toggleCompleteItemsData = (array: Item[], id: number): Item[] => {
  return array.map((item) => {
    if (id === item.id) {
      return {
        ...item,
        completed: !item.completed,
      };
    } else {
      return item;
    }
  });
};
