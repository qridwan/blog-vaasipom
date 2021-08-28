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

const headCells = [
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title",
  },
  { id: "category", numeric: false, disablePadding: false, label: "Category" },
  { id: "status", numeric: false, disablePadding: false, label: "Status" },
  { id: "date", numeric: false, disablePadding: false, label: "Date" },
  { id: "likes", numeric: true, disablePadding: false, label: "Likes" },
  { id: "views", numeric: true, disablePadding: false, label: "Views" },
  { id: "comment", numeric: true, disablePadding: false, label: "Comment" },
  {
    id: "performance",
    numeric: true,
    disablePadding: false,
    label: "Performance",
  },
];
const DashTableHead = (props) => {
  const { classes, order, orderBy, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow className={classes.head}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            className={classes.headCell}
            align={headCell.numeric ? "center" : "start"}
            // padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
         <TableCell
            className={classes.headCell}
            align="center"
          >
          </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default DashTableHead;
