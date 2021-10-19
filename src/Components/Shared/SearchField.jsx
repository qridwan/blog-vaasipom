import React, { useEffect, useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
// import FeedImg from "../../Assets/img/feedImg.png";
import { grey } from "@material-ui/core/colors";
import { withTranslation } from "react-i18next";
import SearchPost from "../../Function/SearchPost";
import { Autocomplete } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
const searchFieldStyles = makeStyles((theme) => ({
  title: {
    color: "black",
    fontWeight: "bold",
  },
  label: {
    display: "block",
  },
  input: {
    width: 280,
    border: "none",
    color: "black",
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
    justifyContent: "space-start",
    padding: "10px 0",
    zIndex: "5000",
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
    width: "32ch",
    margin: 0,
    marginLeft: "10px",
    padding: 5,
    zIndex: 10000,
    position: "absolute",
    listStyle: "none",
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    maxHeight: 200,
    border: "1px solid rgba(0,0,0,.25)",
    '& li[data-focus="true"]': {
      backgroundColor: "#c4c7cc",
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
    color: "black",
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
    color: "black",
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

const SearchField = ({ t }) => {
  const [searchedPost, setSearchedPost] = useState([]);
  const classes = searchFieldStyles();
  const [inputChange, setInputChange] = useState("");
  const [value, setValue] = useState("");
  const history = useHistory();
  const [categoryList] = useState([
    "article",
    "poetry",
    "story",
    "podcast",
    "videocast",
    "review",
  ]);
  // const {
  //   getRootProps,
  //   getInputProps,
  //   getListboxProps,
  //   getOptionProps,
  //   groupedOptions,
  // } = useAutocomplete({
  //   id: "use-autocomplete-demo",
  //   options: searchedPost,
  //   getOptionLabel: (option) => option.title,
  // });

  // const { posts, loading } = SearchPost(categoryList, getInputProps().value);
  const { posts } = SearchPost(categoryList, inputChange);
  useEffect(() => {
    setSearchedPost(posts);
  }, [posts]);
  useEffect(() => {
    return () => setInputChange("");
  }, []);
  const options2 = searchedPost.map((option) => {
    const category = option.category.toUpperCase();
    return {
      category: category,
      ...option,
    };
  });
  const handleChange = (value) => {
    setInputChange(value);
  };
  return (
    <div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <Autocomplete
          root={classes.inputRoot}
          input={classes.inputInput}
          inputChange={inputChange}
          onInputChange={(event, newInputValue) => {
            handleChange(newInputValue);
          }}
          // value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            history.push(`/feed/${newValue.category}/${newValue.id}`);
          }}
          id="grouped-demo"
          options={options2.sort(
            (a, b) => -b.category.localeCompare(a.category)
          )}
          groupBy={(option) => option.category}
          getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                placeholder={t(`search_input_placeholder`)}
                className={classes.inputInput}
                // onChange={handleChange}
              />
            );
          }}
        />
      </div>

      {/* useAutocomplete Hook */}
      {/* <div className={classes.search} {...getRootProps()}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>

        <InputBase
          placeholder={t(`search_input_placeholder`)}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          {...getInputProps()}
        />
      </div> */}
      {/* {
        groupedOptions.length > 0 ? (
          <>
            <ul className={classes.listbox} {...getListboxProps()}>
              <li className={classes.title}> {category.toUpperCase()} </li>
              {groupedOptions.map((option, index) => {
                const postId = option.id;
                return (
                  <li key={postId}>
                    <NavLink to={`/feed/${category}/${postId}`}>
                      <li {...getOptionProps({ option, index })}>
                        <li className={classes.searchSuggestion}>
                          <div>
                            <Typography className={classes.suggTitle}>
                              {option.title}
                            </Typography>
                            <Typography className={classes.suggSubTitle}>
                              {option.subTitle.slice(0, 30)} ...
                            </Typography>
                          </div>
                        </li>
                      </li>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </>
        ) : null
        // <>
        //   {!loading && groupedOptions.length === 0 && (
        //     <ul className={classes.listbox} {...getListboxProps()}>
        //       <li>Nothing Found </li>
        //     </ul>
        //   )}
        // </>
      } */}
    </div>
  );
};

export default withTranslation()(SearchField);
