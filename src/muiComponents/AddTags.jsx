import React, { useRef, useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { InputArea } from "./InputArea";
import { OutlineButton } from "./OutlineButton";
import { InputAdornment } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 0,
    margin: 0,
    boxShadow: "none",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  commentWrapper: {
    borderRadius: "25px",
    margin: "0 auto",
    marginBottom: "20px",
    // backgroundColor: grey[200],
    "@media (max-width:800px)": {
      width: "100%",
    },
  },
  commentInput: {
    padding: "5px 0 5px 8px",
    borderRadius: "25px",
    backgroundColor: "transparent",
  },
}));

const AddTags = ({ setTags }) => {
  const classes = useStyles();
  const [chipData, setChipData] = useState([]);
  const [newTag, setNewTag] = useState([]);
  // const [allTag, setAllTag] = useState([]);
  const refTagInput = useRef(null);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const writeTag = () => {
    let tag = refTagInput.current.children[0].value;
    setNewTag(tag);
  };

  const addTag = async () => {
    setChipData([...chipData, { key: chipData.length, label: newTag }]);
    refTagInput.current.children[0].value = "";
  };

  useEffect(() => {
    setTags(chipData);
  }, [chipData]);

  // console.log({ chipData });
  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data, index) => {
        return (
          <Fragment key={index}>
            {data && (
              <li>
                <Chip
                  label={data.label}
                  onDelete={handleDelete(data)}
                  className={classes.chip}
                />
              </li>
            )}
          </Fragment>
        );
      })}

      <div className={classes.commentWrapper} style={{ width: "100%" }}>
        <InputArea
          style={{ padding: "0" }}
          ref={refTagInput}
          onChange={writeTag}
          id="outlined-start-adornment"
          className={classes.commentInput}
          placeholder=""
          type=""
          endAdornment={
            <InputAdornment position="end" onClick={addTag}>
              <OutlineButton> ADD </OutlineButton>
            </InputAdornment>
          }
          variant="outlined"
        />
      </div>
      {/* <Box display="flex">
        <div>
          <InputArea ref={refTagInput} onChange={addTag} />
        </div>

        <OutlineButton> Add </OutlineButton>
      </Box> */}
    </Paper>
  );
};

export default AddTags;
