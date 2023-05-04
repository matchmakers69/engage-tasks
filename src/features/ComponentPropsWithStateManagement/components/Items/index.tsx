import { Item as ItemType } from "features/ComponentPropsWithStateManagement/types/Item";
import Item from "../Item";
import classes from "./Items.module.css";

type ItemsProps = {
  items: ItemType[];
  onChange: (param: number) => void;
};

const Items = ({ items, onChange }: ItemsProps) => {
  return (
    <>
      <ul className={classes["items-list"]}>
        {items.map((item) => (
          <Item key={item.id} item={item} onChange={onChange} />
        ))}
      </ul>
    </>
  );
};

export default Items;
