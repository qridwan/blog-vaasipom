import { Box, Container, Grid } from "@material-ui/core";
import React, { createRef, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BlackButton } from "../../../muiComponents/BlackButton";
import CustomSelect from "../../../muiComponents/CustomSelect";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import { OutlineButton } from "../../../muiComponents/OutlineButton";
import { interests, tags } from "./Article";
import BlogEditor from "./BlogEditor";
import ImageInput from "./ImageInput";

const MediaCast = ({ type }) => {
  const [tagName, setTagName] = useState([]);
  const [interest, setInterest] = useState([]);
  const [value, setValue] = useState();
  const mediaRef = useRef();
  useEffect(() => {
    document.title = `Blog | Writing | ${type}`;
  }, []);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setValue();
    console.log(data, editorContent(), { interest }, { tagName });
  };

  const editorContent = () => {
    if (mediaRef.current) {
      console.log(mediaRef.current.getContent());
      return mediaRef.current.getContent();
    }
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">Title</CustomLabel>
            <InputArea defaultValue="" {...register("title")} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">{type} URL</CustomLabel>
            <InputArea
              defaultValue=""
              {...register(`${type}URL`)}
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

          <Grid item xs={12} sm={5}>
            <CustomLabel>Add Image</CustomLabel>
            <ImageInput register={register} fileName={`${type}Image`} />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default MediaCast;
