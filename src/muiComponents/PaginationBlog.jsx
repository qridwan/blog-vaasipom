import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      margin: theme.spacing(2),
    },
  },
}));

export const PaginationBlog = ({page, setPage}) => {
  const classes = useStyles();
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      {/* <Typography>Page: {page}</Typography> */}
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
};
