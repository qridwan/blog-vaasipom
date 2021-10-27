import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  getContentAnchorEl: null,
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP,
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
  };
  useEffect(() => {
    if (type === "single") {
      setIsMultiple(false);
    }
  }, []);

  return (
    <div>
      <InputLabel id="demo-multiple-name-label"></InputLabel>
      <FormControl style={{ m: 1, width: "100%" }}>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
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
      </FormControl>
    </div>
  );
};

export default CustomSelect;
