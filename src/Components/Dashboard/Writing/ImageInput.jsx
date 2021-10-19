import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { BaseUrl } from "../../../BaseUrl.config";
import axios from "axios";
import { useSnackbar } from "notistack";
// import { headers } from "../../../header.config";
const headers = {
  Authorization: sessionStorage.getItem("token"),
  "Access-Control-Allow-Origin": "*",
  // "content-type": "application/json",
};
const inputImageStyles = makeStyles(() => ({
  imgBox: {
    width: "100%",
    marginTop: "10px",
    height: "250px",
    border: "0.5px solid #BDBDBD",
    backgroundColor: grey[100],
  },
  imgContainer: {
    width: "100%",
    marginTop: "10px",
    height: "250px",
    border: "0.5px solid #BDBDBD",
    padding: "20px",
  },
  img: {
    maxWidth: " 100%",
    maxHeight: "100%",
    display: "block",
    margin: "0 auto",
  },
  input: {
    display: "none",
  },
}));

const ImageInput = ({ category, setData, image }) => {
  const classes = inputImageStyles();
  const { enqueueSnackbar } = useSnackbar();

  // Image handling
  const [ArticleImg, setArticleImg] = useState(image);

  const [file, setFile] = useState(null);

  useEffect(() => {
    if (file) {
      let data = new FormData();
      data.append("file", file, file.name);
      UploadImg(data);
    }
  }, [file]);

  const fileHandler = (event) => {
    setFile(event.target.files[0]);
    let reader = new FileReader();
    reader.onload = function (e) {
      setArticleImg(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const UploadImg = (data) => {
    axios
      .post(BaseUrl + `/${category}/image`, data, { headers })
      .then((response) => {
        category !== "profile" &&
          setData((data) => ({
            ...data,
            mainImage: response.data.imageLink,
          }));
        enqueueSnackbar(`Image successfully uploaded`, { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar(`Image uploading failed!`, { variant: "error" });
        console.log("error", error);
      });
  };

  return (
    <>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={fileHandler}
      />
      <label htmlFor="contained-button-file">
        {!ArticleImg && <div className={classes.imgBox}></div>}
        {ArticleImg && (
          <div className={classes.imgContainer}>
            <img src={ArticleImg} alt="img" className={classes.img} />
          </div>
        )}
      </label>
    </>
  );
};

export default ImageInput;
