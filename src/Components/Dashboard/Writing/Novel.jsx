import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { BlackButton } from "../../../muiComponents/BlackButton";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import CustomSelect from "../../../muiComponents/CustomSelect";
import { OutlineButton } from "../../../muiComponents/OutlineButton";
import BlogEditor from "./BlogEditor";
import ImageInput from "./ImageInput";
import AddTags from "../../../muiComponents/AddTags";
import axios from "axios";
import { BaseUrl } from "../../../BaseUrl.config";

const types = ["New", "Existing"];
const interests = ["Mystery", "Horror", "Romantic", "Solo"];

const Novel = () => {
  const [suggTags, setSuggTags] = useState([]);
  const [novelType, setNovelType] = useState([]);
  const [interest, setInterest] = useState([]);
  const novelRef = useRef(null);
  // const [tags, setTags] = useState([]);
  const [allData, setAllData] = useState({
    title: "",
    subTitle: "First subtitle to the first Novel",
    type: "",
    mainImage: "",
    topic: "",
    content: "",
  });
  useEffect(() => {
    document.title = "Blog | Writing | Novel";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAllData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const HandlePost = (param) => {
    articleContent();
    const content = novelRef.current.getContent();
    let selectedTags = [];
    suggTags.forEach((tag) => selectedTags.push(tag.label));
    // console.log({ data, tags, interest, content });
    const postData = {
      ...allData,
      content: content,
      tags: selectedTags.join(),
      novelType: novelType,
      topic: interest.join(),
      // type: novelType,
    };
    param === "publish" && CreateNovel(postData);
    param === "draft" && SaveAsDraft(postData);
    setAllData(postData);
  };

  const articleContent = () => {
    if (novelRef.current) {
      console.log(novelRef.current.getContent());
    }
  };

  console.log({ allData });

  const headers = {
    Authorization: localStorage.getItem("token"),
    // "Access-Control-Allow-Origin": "*",
    // "content-type": "application/json",
  };

  const CreateNovel = (data) => {
    console.log("-data-", data);
    axios
      .post(BaseUrl + `/story`, data, {
        headers,
      })
      .then((response) => {
        console.log(
          "SUCCESSFULLY ADDED & response:",
          response,
          "Posted Data--",
          data
        );
        alert(`---Novel posted---`);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const SaveAsDraft = (post) => {
    console.log("-data-", post);
    axios
      .post(BaseUrl + `/story/draft`, post, { headers })
      .then((response) => {
        console.log("response:", response);
        alert(`Novel saved on draft box`);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <CustomLabel shrink htmlFor="">
            Novel Type
          </CustomLabel>
          <CustomSelect
            type="single"
            data={types}
            selectItems={novelType}
            setSelectItems={setNovelType}
          />
        </Grid>
        <Grid item xs={12} sm={novelType !== "New" ? 6 : 9}>
          <CustomLabel shrink htmlFor="">
            Title
          </CustomLabel>
          <InputArea
            defaultValue=""
            type="text"
            name="title"
            onChange={handleChange}
          />
        </Grid>

        {novelType !== "New" && (
          <Grid item xs={12} sm={3}>
            <CustomLabel shrink htmlFor="">
              Episode Number
            </CustomLabel>
            <InputArea
              defaultValue=""
              type="text"
              name="episode"
              onChange={handleChange}
            />
          </Grid>
        )}

        <Grid item xs={12} sm={12}>
          <CustomLabel shrink htmlFor="">
            Episode Title
          </CustomLabel>
          <InputArea
            defaultValue=""
            type="text"
            name="episode_title"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CustomLabel shrink htmlFor="">
            Write Here
          </CustomLabel>
          <BlogEditor ref={novelRef} />
        </Grid>
        {novelType === "New" && (
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
              <AddTags setTags={setSuggTags} defaultTags="" />
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
        )}
        <Grid item xs={12} sm={4}>
          <CustomLabel>Add Image</CustomLabel>
          <ImageInput setData={setAllData} category={"story"} />
        </Grid>
      </Grid>
      {novelType !== "New" && (
        <Box
          display="flex"
          mt={4}
          mb={8}
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
      )}
    </Container>
  );
};

export default Novel;
