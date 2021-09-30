import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { BaseUrl } from "../../../BaseUrl.config";
import axios from "axios";
// import { headers } from "../../../header.config";
const headers = {
  Authorization: localStorage.getItem("token"),
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

 
  // Image handling
  const [ArticleImg, setArticleImg] = useState(image);

  const [file, setFile] = useState(null);

  useEffect(() => {
    if (file) {
      let data = new FormData();
      data.append("file", file, file.name);
      UploadImg(data);
      console.log("effect", data);
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
        console.log("response:", response);
        category !== "profile" &&
          setData((data) => ({
            ...data,
            mainImage: response.data.imageLink,
          }));

        //Console
        console.log("Upload success: Link--", response.data.imageLink);
        console.log("Data--", data);
        alert(`successfully uploaded`);
      })
      .catch((error) => {
        console.log("file-53", file, "Data", data);
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
