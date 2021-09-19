import { Box, Container, Grid } from "@material-ui/core";
// import { useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import { BlackButton } from "../../../muiComponents/BlackButton";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import CustomSelect from "../../../muiComponents/CustomSelect";
import { OutlineButton } from "../../../muiComponents/OutlineButton";
import BlogEditor from "./BlogEditor";
import ImageInput from "./ImageInput";
// import { tags } from "./Article";
import AddTags from "../../../muiComponents/AddTags";

const types = ["New", "Existing"];
const interests = ["Mystery", "Horror", "Romantic", "Solo"];

const Novel = () => {
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [novelType, setNovelType] = useState([]);
  const novelRef = useRef(null);
  const [interest, setInterest] = useState([]);
  const [tags, setTags] = useState([]);
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
  // const {
  //   register,
  //   handleSubmit,
  //   // formState: { errors },
  // } = useForm();
  const HandlePost = () => {
    articleContent();
    const content = novelRef.current.getContent();
    console.log("🚀 ~ HandlePost ~ content", content);
    let selectedTags = [];
    tags.forEach((tag) => selectedTags.push(tag.label));
    // console.log({ data, tags, interest, content });
    const postData = {
      ...allData,
      content: content,
      type: novelType
    };
    setAllData(postData);
  };

  const articleContent = () => {
    if (novelRef.current) {
      console.log(novelRef.current.getContent());
    }
  };

  console.log({ allData });
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
                selectItems={selectedInterest}
                setSelectItems={setSelectedInterest}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomLabel htmlFor="">Add Tags</CustomLabel>
              <AddTags />
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
                <BlackButton onClick={HandlePost}>Publish</BlackButton>
                <OutlineButton type="submit" style={{ marginLeft: "30px" }}>
                  Save as Draft
                </OutlineButton>
              </Box>
            </Grid>
          </Grid>
        )}
        <Grid item xs={12} sm={4}>
          <CustomLabel>Add Image</CustomLabel>
          <ImageInput setData={setAllData} category={"poetry"} />
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
          <BlackButton onClick={HandlePost}>Publish</BlackButton>
          <OutlineButton style={{ marginLeft: "30px" }}>
            Save as Draft
          </OutlineButton>
        </Box>
      )}
    </Container>
  );
};

export default Novel;
