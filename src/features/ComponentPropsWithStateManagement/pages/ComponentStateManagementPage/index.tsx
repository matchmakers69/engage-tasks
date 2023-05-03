import Content from "components/shared/Content";
import Items from "features/ComponentPropsWithStateManagement/components/Items";
import { toggledCompleteItemsData } from "features/ComponentPropsWithStateManagement/service";
import { useState } from "react";
import ITEMS_DATA from "../../data/items.json";

const ComponentStateManagementPage = () => {
  const [items, setItems] = useState(ITEMS_DATA);

  const handleCompletedItemUpdate = (id: number) => {
    const updatedItems = toggledCompleteItemsData(items, id);
    setItems(updatedItems);
  };
  return (
    <>
      <Content title="Basic state management">
        <p>Update static data properties when checkbox checked</p>
      </Content>
      <Items onChange={handleCompletedItemUpdate} items={items} />
    </>
  );
};

export default ComponentStateManagementPage;
