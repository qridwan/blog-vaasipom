import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import CustomTableHead, { getComparator, stableSort } from "./TableHead";
import { Box, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Popover from "@material-ui/core/Popover";
import { Button } from "@material-ui/core";
import { tableStyles } from "../../Styles/muiStyles";

const headTableData = [
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title",
    width: 220,
  },
  { id: "category", numeric: false, disablePadding: false, label: "Category" },
  { id: "status", numeric: false, disablePadding: false, label: "Status" },
  { id: "date", numeric: false, disablePadding: false, label: "Date" },
  { id: "likes", numeric: true, disablePadding: false, label: "Likes" },
  { id: "views", numeric: true, disablePadding: false, label: "Views" },
  {
    id: "comment",
    numeric: true,
    disablePadding: false,
    label: "Comment",
    size: "small",
  },
  {
    id: "performance",
    numeric: true,
    disablePadding: false,
    label: "Performance",
  },
];
function createData(
  title,
  category,
  status,
  date,
  likes,
  views,
  comment,
  performance
) {
  return { title, category, status, date, likes, views, comment, performance };
}

const rows = [
  createData(
    "Journey To The Heaven",
    "Article",
    "Active",
    "13th Jan 2021",
    1232,
    3123,
    44,
    9.67
  ),
  createData(
    "Journey To The Mars",
    "Novel",
    "Inactive",
    "22th Jan 2021",
    5332,
    6323,
    14,
    -8.67
  ),
  createData(
    "Journey To The Pluto",
    "Article",
    "Active",
    "1st Jan 2021",
    1532,
    34123,
    244,
    2.67
  ),
  createData(
    "Deep dive to the ocean",
    "Videocast",
    "Inactive",
    "30th Jan 2021",
    232,
    33123,
    164,
    6.67
  ),
  createData(
    "Journey To The Heaven",
    "Article",
    "Inactive",
    "15th Jan 2021",
    1255,
    123,
    344,
    -7.67
  ),
  createData(
    "Journey To The Mars",
    "Article",
    "Inactive",
    "16th Fab 2021",
    6632,
    9123,
    844,
    3.67
  ),
  createData(
    "Journey To The Pluto",
    "Podcast",
    "Inactive",
    "13th Mar 2021",
    7732,
    80123,
    644,
    2.67
  ),
  createData(
    "Journey To The Pluto",
    "Article",
    "Active",
    "1st Jan 2021",
    1532,
    34123,
    244,
    2.67
  ),
  createData(
    "Deep dive to the ocean",
    "Article",
    "Inactive",
    "13th Sept 2021",
    8932,
    1123,
    164,
    3.67
  ),
  createData(
    "Deep dive to the ocean",
    "Article",
    "Active",
    "13th Sept 2021",
    8932,
    1123,
    164,
    3.67
  ),
  createData(
    "Deep dive to the ocean",
    "Article",
    "Inactive",
    "13th Sept 2021",
    8932,
    1123,
    164,
    3.67
  ),
];

const DashboardTable = () => {
  const classes = tableStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <CustomTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
            data={headTableData}
          />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                let performanceTextColor = "";
                let statusTextColor = "";
                if (row.performance > 0) {
                  performanceTextColor = "#1AB82F";
                }
                if (row.status === "Active") {
                  statusTextColor = "#1AB82F";
                }
                return (
                  <TableRow hover tabIndex={-1} key={row.name}>
                    <TableCell
                      className={classes.tableCell}
                      component="th"
                      id={labelId}
                      scope="row"
                    >
                      {row.title}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="start">
                      {row.category}
                    </TableCell>
                    <TableCell
                      className={classes.tableCell}
                      align="start"
                      style={{ color: statusTextColor }}
                    >
                      {row.status}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="start">
                      {row.date}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="start">
                      {row.likes}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="start">
                      {row.views}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      {row.comment}
                    </TableCell>
                    <TableCell
                      className={classes.tableCell}
                      align="center"
                      style={{ color: performanceTextColor }}
                    >
                      {row.performance} %
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      <IconButton
                        aria-describedby={id}
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                      >
                        <MoreHorizIcon />
                      </IconButton>
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                        elevation={1}
                      >
                        <Box mx={2} align="center">
                          <Button className={classes.button}>Edit</Button>
                          <Button
                            style={{ color: "#FF0000" }}
                            className={classes.button}
                          >
                            Delete
                          </Button>
                        </Box>
                      </Popover>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DashboardTable;
