import { TSortType } from "@entities/news/types";
import { Dispatch, SetStateAction, useState } from "react";
import DropDownPicker, { ItemType } from "react-native-dropdown-picker";

const items: ItemType<TSortType>[] = [
  {
    label: "Сначала новые",
    value: "NEW",
  },
  {
    label: "Сначала старые",
    value: "OLD",
  },
  {
    label: "Без сортировки",
    value: "WITHOUT_SORT",
  },
];

type TSortPickerProps = {
  setValue: Dispatch<SetStateAction<TSortType>>;
  value: TSortType;
};

export const SortPicker = ({ setValue, value }: TSortPickerProps) => {
  const [open, setOpen] = useState(false);
  return (
    <DropDownPicker
      style={{ width: "100%" }}
      containerStyle={{ width: "50%", marginTop: 16 }}
      items={items}
      setValue={setValue}
      value={value}
      open={open}
      setOpen={setOpen}
    />
  );
};
