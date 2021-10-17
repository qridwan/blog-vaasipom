import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import CustomTableHead, { getComparator, stableSort } from "./TableHead";
import { Box, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Popover from "@material-ui/core/Popover";
import { Button } from "@material-ui/core";
import { tableStyles } from "../../Styles/muiStyles";
import { withTranslation } from "react-i18next";
import LoadingAtom from "../../muiComponents/LoadingAtom";
import { PaginationBlog } from "../../muiComponents/PaginationBlog";
import GetMywritings from "../../Function/GetMywritings";
import DateFormater from "../../Function/DateFormater";
import { connect } from "react-redux";
import { deletePost } from "../../redux/actions/landingPage.Action";
import {
  setPage,
  setPostId,
  setTodo,
  setWriting,
} from "../../redux/actions/dashboardAction";
import { NavLink } from "react-router-dom";
import { useSnackbar } from "notistack";
import HandleDelete from "../../Function/HandleDelete";

const headDashboardTableData = [
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title",
    trans_label: "mypublish_table_title",
    width: 220,
  },
  {
    id: "category",
    numeric: false,
    disablePadding: false,
    label: "Category",
    trans_label: "mypublish_table_category",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
    trans_label: "mypublish_table_status",
  },
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Date",
    trans_label: "mypublish_table_date",
  },
  {
    id: "likes",
    numeric: false,
    disablePadding: false,
    label: "Likes",
    trans_label: "mypublish_table_likes",
  },
  {
    id: "views",
    numeric: false,
    disablePadding: false,
    label: "Views",
    trans_label: "mypublish_table_views",
  },
  // {
  //   id: "comment",
  //   numeric: true,
  //   disablePadding: false,
  //   label: "Comment",
  //   trans_label: "mypublish_table_comment",
  //   size: "small",
  // },
  // {
  //   id: "performance",
  //   numeric: true,
  //   disablePadding: false,
  //   label: "Performance",
  //   trans_label: "mypublish_table_performance",
  // },
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

const DashboardTable = ({
  t,
  category,
  setPage,
  setWriting,
  setPostId,
  setTodo,
  deletePost,
}) => {
  const classes = tableStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("title");
  const [pageNo, setPageNo] = useState(0);
  const [isChanged, setIsChanged] = useState(false);
  useEffect(() => {
    setPageNo(0);
  }, [category]);
  const { enqueueSnackbar } = useSnackbar();
  const handleEdit = (postId, fullPost) => {
    setPage("StartWriting");
    setWriting(category);
    setPostId(postId);
    setTodo({
      edit: true,
      ...fullPost,
    });
  };
  const handleDelete = (categ, feedId) => {
    const success = HandleDelete(categ, feedId, enqueueSnackbar);
    console.log("🚀 ~ handleDelete ~ success", success)
    success && setIsChanged(true);
  };

  const { posts, hasMore, loading } = GetMywritings(
    category,
    pageNo + 1,
    isChanged
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  return (
    <Paper className={classes.root}>
      {!loading ? (
        <>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <CustomTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={posts.length}
                data={headDashboardTableData}
              />
              <TableBody>
                {stableSort(posts, getComparator(order, orderBy)).map(
                  (row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    // let performanceTextColor = "";
                    // if (row.performance > 0) {
                    // performanceTextColor = "#1AB82F";
                    // }
                    let status;
                    let statusTextColor = "";

                    if (row.status === "A") {
                      status = "Active";
                      statusTextColor = "#1AB82F";
                    }
                    if (row.status === "I") {
                      status = "Inactive";
                      statusTextColor = "#C70039";
                    }
                    const { date } = DateFormater(row.createdDate);
                    return (
                      <TableRow hover tabIndex={-1} key={index}>
                        <TableCell
                          className={classes.tableCell}
                          component="th"
                          id={labelId}
                          scope="row"
                        >
                          {row.title}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="start">
                          {category}
                        </TableCell>
                        <TableCell
                          className={classes.tableCell}
                          align="start"
                          style={{ color: statusTextColor }}
                        >
                          {status}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="start">
                          {date}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="start">
                          {row.likes}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="start">
                          {row.reads}
                        </TableCell>
                        {/* <TableCell className={classes.tableCell} align="center">
                      {row.comment}
                    </TableCell> */}
                        {/* <TableCell
                      className={classes.tableCell}
                      align="center"
                      style={{ color: performanceTextColor }}
                    >
                      {row.performance} %
                    </TableCell> */}
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
                              <Button
                                onClick={() =>
                                  handleEdit(row[`${category}Id`], row)
                                }
                                className={classes.button}
                              >
                                {t("edit")}
                              </Button>
                              <Button
                                onClick={() => {
                                  handleClose();
                                  // deletePost(
                                  //   category,
                                  //   row[`${category}Id`],
                                  //   enqueueSnackbar
                                  // );
                                  handleDelete(row[`${category}Id`], category);
                                }}
                                style={{ color: "#FF0000" }}
                                className={classes.button}
                              >
                                {t("delete")}
                              </Button>
                            </Box>
                          </Popover>
                        </TableCell>
                      </TableRow>
                    );
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <PaginationBlog
            page={pageNo}
            setPage={setPageNo}
            count={posts.length}
            hasMore={hasMore}
          />
        </>
      ) : (
        <LoadingAtom />
      )}
    </Paper>
  );
};

const TransDashboardTable = withTranslation()(DashboardTable);
// using redux
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setPage: setPage,
  setWriting: setWriting,
  setPostId: setPostId,
  setTodo: setTodo,
  deletePost: deletePost,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransDashboardTable);
