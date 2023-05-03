import { Item as ItemType } from "features/ComponentPropsWithStateManagement/types/Item";
import classes from "./Item.module.css";
import cx from "classnames";

type IItemProps = {
  item: ItemType;
  onChange: (param: number) => void;
};

const Item = ({ item, onChange }: IItemProps) => {
  return (
    <li className={classes["item-row"]}>
      <div className={cx(classes["title-wrapper"], item.completed ? classes["checked-item"] : "")}>
        {item.title}
      </div>
      <div className={classes["checkbox-wrapper"]}>
        <input type="checkbox" checked={item.completed} onChange={() => onChange(item.id)} />
      </div>
    </li>
  );
};

export default Item;
