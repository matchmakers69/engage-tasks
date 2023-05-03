import { Item } from "../types/Item";

export const toggledCompleteItemsData = (array: Item[], id: number) => {
  return [...array].map((item) => {
    if (id === item.id) {
      return {
        ...item,
        completed: !item.completed,
      };
    } else {
      return {
        ...item,
      };
    }
  });
};
