import Content from "components/shared/Content";
import Items from "features/ComponentPropsWithStateManagement/components/Items";
import { toggleCompleteItemsData } from "features/ComponentPropsWithStateManagement/service";
import { useCallback, useState } from "react";
import ITEMS_DATA from "../../data/items.json";

const ComponentStateManagementPage = () => {
  const [items, setItems] = useState(ITEMS_DATA);

  const handleCompletedItemUpdate = useCallback((id: number) => {
    setItems((prevItems) => toggleCompleteItemsData(prevItems, id));
  }, []);

  return (
    <>
      <Content title="Basic state management">
        <p>Update static data properties when checkbox checked</p>
      </Content>
      {/* Btw - this is not the way I would recommend - contextAPI would be a better way to avoid props drilling */}
      <Items onChange={handleCompletedItemUpdate} items={items} />
    </>
  );
};

export default ComponentStateManagementPage;
