import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import React, { useState } from "react";
import { tableStyles } from "../../../Styles/muiStyles";
import CustomTableHead from "../TableHead";

const readHeadCells = [
  {
    id: "author",
    numeric: false,
    disablePadding: false,
    label: "Author",
    trans_label: "readtable_head_author",
    width: 200,
  },
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title",
    trans_label: "readtable_head_title",
    width: 220,
  },
  {
    id: "desc",
    numeric: false,
    disablePadding: false,
    label: "Description",
    trans_label: "readtable_head_description",
    width: 220,
  },
  {
    id: "category",
    numeric: false,
    disablePadding: false,
    label: "Category",
    trans_label: "readtable_head_category",
  },
];

function createData(author, title, description, category) {
  return { author, title, description, category };
}

const rows = [
  createData(
    "Jhon Doe",
    "Journey To The Heaven",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id magna massa. Ut vitae risus vehicula, faucibus odio id, dictum neque. Curabitur rhoncus quis ipsum quis varius.",
    "Novel"
  ),
  createData(
    "Smith Roy",
    "Consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id magna massa. Ut vitae risus vehicula, faucibus odio id, dictum neque. Curabitur rhoncus quis ipsum quis varius.",
    "Article"
  ),
];
const ReadTable = () => {
  const classes = tableStyles();
  const [page] = useState(0);
  const [rowsPerPage] = useState(10);
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <CustomTableHead
            classes={classes}
            // order={order}
            // orderBy={orderBy}
            // onRequestSort={handleRequestSort}
            rowCount={rows.length}
            data={readHeadCells}
          />
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const description = row.description.slice(0, 45);
                return (
                  <TableRow
                    hover
                    className={classes.tableRow}
                    tabIndex={-1}
                    key={row.title}
                  >
                    <TableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row"
                    >
                      {row.author}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="start">
                      {row.title}
                    </TableCell>
                    <TableCell
                      className={classes.tableCell}
                      align="start"
                      style={{ color: "" }}
                    >
                      {description}...
                    </TableCell>
                    <TableCell className={classes.tableCell} align="start">
                      {row.category}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
};

export default ReadTable;
