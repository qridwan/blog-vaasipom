import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import AddTags from "../../../muiComponents/AddTags";
import { BlackButton } from "../../../muiComponents/BlackButton";
import CustomSelect from "../../../muiComponents/CustomSelect";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import { OutlineButton } from "../../../muiComponents/OutlineButton";
import { interests } from "./Article";
import BlogEditor from "./BlogEditor";
import ImageInput from "./ImageInput";
import axios from "axios";
import { BaseUrl } from "../../../BaseUrl.config";

const MediaCast = ({ type }) => {
  const category = type.toLowerCase();
  const [interest, setInterest] = useState([]);
  const [value, setValue] = useState();
  const [tags, setTags] = useState([]);
  const [allData, setAllData] = useState({
    title: "",
    subTitle: "First subtitle to the first article",
    mainImage: "",
    tags: "",
    topic: "",
    url: "",
    content: "",
  });

  const mediaRef = useRef();
  useEffect(() => {
    document.title = `Blog | Writing | ${type}`;
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAllData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const editorContent = () => {
    console.log(mediaRef.current?.getContent());
    setValue(mediaRef.current?.getContent());
  };

  const HandlePost = async (param) => {
    editorContent();
    const content = mediaRef.current.getContent();
    let selectedTags = [];
    tags.forEach((tag) => selectedTags.push(tag.label));
    // console.log({ data, tags, interest, content });
    const postData = {
      ...allData,
      tags: selectedTags.join(),
      topic: interest.join(),
      content: content,
    };
    param === "publish" && CreatePost(postData);
    param === "draft" && SaveAsDraft(postData);
    setAllData(postData);
  };

  //API INTEGRATION
  const headers = {
    Authorization: localStorage.getItem("token"),
    // "Access-Control-Allow-Origin": "*",
  };
  const CreatePost = (data) => {
    
    console.log("-data-", data);
    axios
      .post(BaseUrl + `/${category}`, data, { headers })
      .then((response) => {
        console.log(
          "URL :",
          BaseUrl + `/${category}`,
          "SUCCESSFULLY ADDED & response:",
          response,
          "Posted Data--",
          data
        );
        alert(`${category} Posted`);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const SaveAsDraft = (data) => {
    console.log("-data-", data);
    axios
      .post(BaseUrl + `/${category}/draft`, data, { headers })
      .then((response) => {
        console.log(
          "URL :",
          BaseUrl + `/${category}/draft`,
          "response:",
          response.data
        );
        alert(`${category} Saved on draft box`);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  console.log({ allData });

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <CustomLabel htmlFor="">Title</CustomLabel>
          <InputArea defaultValue="" name="title" onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CustomLabel htmlFor="">{type} URL</CustomLabel>
          <InputArea
            defaultValue=""
            name="url"
            onChange={handleChange}
            placeholder="HTTPS://"
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <CustomLabel htmlFor="">Write Here</CustomLabel>
          <BlogEditor ref={mediaRef} value={value} />
        </Grid>

        <Grid item xs={12} sm={7} spacing={3}>
          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">Topic Of Interest</CustomLabel>
            <CustomSelect
              data={interests}
              selectItems={interest}
              setSelectItems={setInterest}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">Add Tags</CustomLabel>
            <AddTags setTags={setTags} />
            {/* <CustomSelect
                data={tags}
                selectItems={tagName}
                setSelectItems={setTagName}
              /> */}
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box
              display="flex"
              mt={5}
              mb={3}
              alignItems="center"
              justifyContent="start"
            >
              <BlackButton onClick={() => HandlePost("publish")}>
                Publish
              </BlackButton>
              <OutlineButton
                onClick={() => HandlePost("draft")}
                style={{ marginLeft: "30px" }}
              >
                Save as Draft
              </OutlineButton>
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={5}>
          <CustomLabel>Add Image</CustomLabel>
          <ImageInput setData={setAllData} category={category} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MediaCast;
