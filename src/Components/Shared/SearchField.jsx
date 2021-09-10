import React from "react";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase, Typography } from "@material-ui/core";
import FeedImg from "../../Assets/img/feedImg.png";
import { grey } from "@material-ui/core/colors";

const searchFieldStyles = makeStyles((theme) => ({
  label: {
    display: "block",
  },
  input: {
    width: 300,
    border: "none",
    padding: "5px",
    fontSize: "16px",
    "& :focus": {
      outline: "none",
    },
  },
  searchContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid rgba(0, 0, 0, 0.32)",
  },
  searchSuggestion: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0",
  },
  suggImg: {
    borderRadius: "10%",
    marginRight: "5px",
  },
  suggTitle: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "150%",
    color: "#121212",
  },
  suggSubTitle: {
    fontSize: "12px",
    lineHeight: "150%",
    color: "#6B6B6B",
  },
  listbox: {
    width: "35ch",
    margin: 0,
    marginLeft: "10px",
    padding: 5,
    zIndex: 1,
    position: "absolute",
    listStyle: "none",
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    maxHeight: 200,
    border: "1px solid rgba(0,0,0,.25)",
    '& li[data-focus="true"]': {
      backgroundColor: "#4a8df6",
      color: "white",
      cursor: "pointer",
    },
    "& li:active": {
      backgroundColor: "#2977f5",
      color: "white",
    },
  },
  search: {
    position: "relative",
    borderRadius: "25px",
    border: `1px solid ${grey[300]}`,
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const SearchField = () => {
  const classes = searchFieldStyles();
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });
  return (
    <div>
      <div className={classes.search} {...getRootProps()}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search something here…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          {...getInputProps()}
        />
      </div>
      {groupedOptions.length > 0 ? (
        <ul className={classes.listbox} {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li>
              <li {...getOptionProps({ option, index })}>
                <li className={classes.searchSuggestion}>
                  <img
                    className={classes.suggImg}
                    src={option.img}
                    alt=""
                    height="40"
                    width="40"
                  />
                  <div>
                    <Typography className={classes.suggTitle}>
                      {option.title}
                    </Typography>
                    <Typography className={classes.suggSubTitle}>
                      {option.desc}
                    </Typography>
                  </div>
                </li>
              </li>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchField;

const top100Films = [
  {
    title: "The Shawshank Redemption",
    img: FeedImg,
    desc: " odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer ",
  },
  {
    title: "The Godfather",
    img: FeedImg,
    desc: " odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer ",
  },
  {
    title: "The Godfather: Part II",
    img: FeedImg,
    desc: " odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer ",
  },
  {
    title: "The Dark Knight",
    img: FeedImg,
    desc: " odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer ",
  },
  {
    title: "12 Angry Men",
    img: FeedImg,
    desc: " odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer ",
  },
];
