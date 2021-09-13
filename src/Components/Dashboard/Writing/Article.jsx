import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BlackButton } from "../../../muiComponents/BlackButton";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import CustomSelect from "../../../muiComponents/CustomSelect";
import AddTags from "../../../muiComponents/AddTags";
import { OutlineButton } from "../../../muiComponents/OutlineButton";
import BlogEditor from "./BlogEditor";
import ImageInput from "./ImageInput";
import axios from "axios";
import { BaseUrl } from "../../../BaseUrl.config";

export const tags = [
  "Science",
  "Travel",
  "Swimming",
  "Sports",
  "International",
];
export const interests = ["Novel", "Poet", "Fiction", "Economy"];

const Article = ({ type }) => {
  // const [tagName, setTagName] = useState([]);
  const [tags, setTags] = useState([]);
  const [convertedTags, setConvertedTags] = useState([]);
  const [interest, setInterest] = useState([]);
  const [value, setValue] = useState();
  const ref = useRef(null);
  // Create Article
  const [allData, setAllData] = useState({
    title: "",
    subTitle: "First subtitle to the first article",
    mainImage: "",
    tags: "",
    topic: "",
    content: "",
  });

  useEffect(() => {
    document.title = "Blog | Writing | Article";
  }, []);

  // const {
  //   register,
  //   handleSubmit,
  //   // formState: { errors },
  // } = useForm();

  const articleContent = () => {
    console.log(ref.current?.getContent());
    setValue(ref.current?.getContent());
  };

  const Publish = (data) => {
    articleContent();
    const content = ref.current.getContent();
    let selectedTags = [];
    tags.forEach((tag) => selectedTags.push(tag.label));
    // console.log({ data, tags, interest, content });
    setAllData({
      ...allData,
      tags: selectedTags.join(),
      topic: interest.join(),
      content: content,
    });
    CreateArticle(allData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAllData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  //API INTEGRATION
  const headers = {
    Authorization: localStorage.getItem("token"),
  };

  const CreateArticle = (data) => {
    const headers = {
      Authorization: localStorage.getItem("token"),
    };
    console.log("-data-", data);
    axios
      .post(BaseUrl + "/article", data, { headers })
      .then((response) => {
        console.log(
          "SUCCESSFULLY ADDED & response:",
          response,
          "Posted Data--",
          data
        );
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const SaveAsDraft = () => {
    console.log("-data-", allData);
    axios
      .post(BaseUrl + "/article/draft", allData, { headers })
      .then((response) => {
        console.log("response:", response);
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
          <InputArea
            defaultValue=""
            type="text"
            name="title"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <CustomLabel htmlFor="">Write Here</CustomLabel>
          <BlogEditor ref={ref} value={value} />
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
            {/* <CustomSelect
                data={tags}
                selectItems={tagName}
                setSelectItems={setTagName}
              /> */}
            <AddTags setTags={setTags} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box
              display="flex"
              mt={5}
              mb={3}
              alignItems="center"
              justifyContent="start"
            >
              <BlackButton onClick={Publish}>Publish</BlackButton>
              <OutlineButton type="" style={{ marginLeft: "30px" }}>
                Save as Draft
              </OutlineButton>
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={5}>
          <CustomLabel>Add Image</CustomLabel>
          <ImageInput setData={setAllData} category="article" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Article;
