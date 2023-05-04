import { ChangeEventHandler } from "react";
import { Field } from "../hooks/useFilteredUsers";
import classes from "./FilterUsers.module.css";

type FilterUsersProps = {
  value: Array<string>;
  options: Field[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
  onChangeSearchPhrase: ChangeEventHandler<HTMLInputElement>;
  activeSearchPhrase: string;
};

export const FilterUsers = ({
  value,
  options,
  onChange,
  activeSearchPhrase,
  onChangeSearchPhrase,
}: FilterUsersProps) => {
  return (
    <div className={classes["filter-wrapper"]}>
      <div className={classes["input-wrapper"]}>
        <input
          className={classes["search-input-field"]}
          placeholder="Enter filter value"
          value={activeSearchPhrase}
          onChange={onChangeSearchPhrase}
        />
      </div>
      <label>
        Please select option
        <select value={value} multiple onChange={onChange}>
          {options.map((field) => (
            <option key={field.label} value={field.key}>
              {field.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
