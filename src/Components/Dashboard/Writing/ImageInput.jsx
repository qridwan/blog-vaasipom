import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const inputImageStyles = makeStyles(() => ({
  imgBox: {
    width: "100%",
    marginTop: "10px",
    height: "250px",
    border: "0.5px solid #BDBDBD",
    backgroundColor: grey[100],
  },
  input: {
    display: "none",
  },
}));


const ImageInput = ({ register, fileName }) => {
  const classes = inputImageStyles();

  return (
    <>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        {...register(fileName)}
      />
      <label htmlFor="contained-button-file">
        <div className={classes.imgBox}></div>
      </label>
    </>
  );
};

export default ImageInput;
