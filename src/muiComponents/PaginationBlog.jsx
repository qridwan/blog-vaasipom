import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TablePagination } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      margin: theme.spacing(2),
    },
    "& .MuiTypography-colorInherit, .MuiTablePagination-input": {
      display: "none",
    },
  },
}));

export const PaginationBlog = ({ page, setPage, count, hasMore }) => {
  console.log("🚀 ~ PaginationBlog ~ page", page, hasMore);
  const classes = useStyles();
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      {/* <p>Page: {page}</p> */}
      <TablePagination
        component="div"
        rowsPerPage={10}
        count={count}
        // backIconButtonProps={ {disabled: page === 1 ? true : false }}
        nextIconButtonProps={{ disabled: hasMore ? false : true }}
        page={page}
        onPageChange={handleChange}
      />
    </div>
  );
};
