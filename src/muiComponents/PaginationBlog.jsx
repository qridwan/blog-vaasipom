import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Pagination from "@material-ui/lab/Pagination";
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

export const PaginationBlog = ({ page, setPage }) => {
  const classes = useStyles();
  // const [value, setValue] = useState();
  const handleChange = (event, value) => {
    setPage(value);
    // setValue(value);
  };

  return (
    <div className={classes.root}>
      {/* <Typography>Page: {page}</Typography> */}
      <p>Page: {page}</p>
      {/* <p> count: {value}</p> */}
      {/* <Pagination count={Infinity} page={page} onChange={handleChange} /> */}
      <TablePagination
        component="div"
        rowsPerPage={0}
        count={Infinity}
        page={page}
        onPageChange={handleChange}
      />
    </div>
  );
};
