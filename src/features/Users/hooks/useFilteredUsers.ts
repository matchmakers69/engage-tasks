import { User } from "api/types";
import { ChangeEventHandler, useState } from "react";

export type Field = {
  label: string;
  key: keyof User;
};

const FILTERABLE_FIELDS: Field[] = [
  {
    label: "Reference",
    key: "reference",
  },
  {
    label: "Username",
    key: "username",
  },
];

export const useFilteredUsers = () => {
  const [activeFields, setActiveFields] = useState<Field[]>([]);
  const [activeSearchPhrase, setActiveSearchPhrase] = useState("");

  const handleFiltersChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const keys = Array.from(e.target.selectedOptions, (option) => option.value);
    setActiveFields(FILTERABLE_FIELDS.filter((field) => keys.includes(field.key)));
  };

  const handleChangeSearchPhrase: ChangeEventHandler<HTMLInputElement> = (e) => {
    setActiveSearchPhrase(e.target.value);
  };
  // We want to pass array of strings instead of object
  const stringOptions = activeFields.map((item) => item.key);

  return {
    FILTERABLE_FIELDS,
    handleFiltersChange,
    handleChangeSearchPhrase,
    activeFields,
    activeSearchPhrase,
    stringOptions,
  };
};
