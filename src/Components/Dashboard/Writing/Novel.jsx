import { Box, Grid } from "@material-ui/core";
import React, { createRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BlackButton } from "../../../muiComponents/BlackButton";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import CustomSelect from "../../../muiComponents/CustomSelect";
import { OutlineButton } from "../../../muiComponents/OutlineButton";
import BlogEditor from "./BlogEditor";
import ImageInput from "./ImageInput";
import { tags } from "./Article";

const types = ["New", "Existing"];
const interests = ["Mystery", "Horror", "Romantic", "Solo"];

const Novel = () => {
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [novelType, setNovelType] = useState([]);
  const [tagName, setTagName] = useState([]);
  const novelRef = createRef();
  useEffect(() => {
    document.title = "Blog | Writing | Novel";
  }, []);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    articleContent();
  };

  const articleContent = () => {
    if (novelRef.current) {
      console.log(novelRef.current.getContent());
    }
  };
  console.log({ novelType });
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <InputArea defaultValue="" {...register("title")} />
          </Grid>

          {novelType !== "New" && (
            <Grid item xs={12} sm={3}>
              <CustomLabel shrink htmlFor="">
                Episode Number
              </CustomLabel>
              <InputArea defaultValue="" {...register("episode_number")} />
            </Grid>
          )}

          <Grid item xs={12} sm={12}>
            <CustomLabel shrink htmlFor="">
              Episode Title
            </CustomLabel>
            <InputArea defaultValue="" {...register("episode_title")} />
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
                <CustomSelect
                  data={tags}
                  selectItems={tagName}
                  setSelectItems={setTagName}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Box
                  display="flex"
                  mt={5}
                  mb={3}
                  alignItems="center"
                  justifyContent="start"
                >
                  <BlackButton type="submit">Publish</BlackButton>
                  <OutlineButton type="submit" style={{ marginLeft: "30px" }}>
                    Save as Draft
                  </OutlineButton>
                </Box>
              </Grid>
            </Grid>
          )}
          <Grid item xs={12} sm={4}>
            <CustomLabel>Add Image</CustomLabel>
            <ImageInput registry={"novelImage"} />
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
            <BlackButton type="submit">Publish</BlackButton>
            <OutlineButton style={{ marginLeft: "30px" }}>
              Save as Draft
            </OutlineButton>
          </Box>
        )}
      </form>
    </Box>
  );
};

export default Novel;
