import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import React from "react";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
const CustomTableHead = (props) => {
  const { classes, order, orderBy, rowCount, onRequestSort, data } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow className={classes.head}>
        {data.map((headCell) => (
          <TableCell
            key={headCell.id}
            style={{ width: headCell.width }}
            className={classes.headCell}
            // style={{width: headCell.width}}
            align={headCell.numeric ? "center" : "start"}
            // padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy && (orderBy === headCell.id ? order : false)}
          >
            {order ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            ) : (
              <> {headCell.label}</>
            )}
          </TableCell>
        ))}
        {order && (
          <TableCell className={classes.headCell} align="center"></TableCell>
        )}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHead;
