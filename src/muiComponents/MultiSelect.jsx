import { MenuItem, Select, useTheme } from "@material-ui/core";
import React from "react";
import { InputArea } from "./InputArea";

function getStyles(name, tagName, theme) {
  return {
    fontWeight:
      tagName.indexOf(name) === -1
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
const MultiSelect = ({ data, selectItems, setSelectItems }) => {
  const theme = useTheme();
  const handleSelect = (event) => {
    setSelectItems(event.target.value);
  };
  return (
    <Select
      multiple
      displayEmpty
      value={selectItems}
      onChange={handleSelect}
      input={<InputArea />}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return <em></em>;
        }
        return selected.join(", ");
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

export default MultiSelect;
