import { MenuItem, Select, useTheme } from "@material-ui/core";
import React, { useState } from "react";
import { InputArea } from "./InputArea";

function getStyles(item, chosenItems, theme) {
  return {
    fontWeight:
      chosenItems.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const CustomSelect = ({
  data,
  selectItems,
  setSelectItems,
  type,
  placeholder,
}) => {
  const theme = useTheme();
  const [isMultiple, setIsMultiple] = useState(true);
  const handleSelect = (event) => {
    setSelectItems(event.target.value);
    if (type === "single") {
      setIsMultiple(false);
    }
  };

  return (
    <Select
      multiple={isMultiple}
      displayEmpty
      value={selectItems}
      onChange={handleSelect}
      input={<InputArea />}
      renderValue={(selected) => {
        if (selected && isMultiple) {
          if (selected.length === 0) {
            return <span>{placeholder && "Filter By Category"}</span>;
          }
          return selected.join(", ");
        } else if (selected && !isMultiple) {
          return selected;
        }
      }}
      MenuProps={MenuProps}
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem disabled value=""></MenuItem>
      {data.map((item) => (
        <MenuItem
          key={item}
          value={item}
          style={getStyles(item, selectItems, theme)}
        >
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
