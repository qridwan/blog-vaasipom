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

export const tags = [
  "Science",
  "Travel",
  "Swimming",
  "Sports",
  "International",
];
export const interests = ["Novel", "Poet", "Fiction", "Economy"];

const Article = ({ type}) => {
  const [tagName, setTagName] = useState([]);
  const [interest, setInterest] = useState([]);
  const [value, setValue] = useState();
  // const [content, setContent] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    document.title = "Blog | Writing | Article";
  }, []);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    articleContent();
    const content = ref.current.getContent();
    console.log({ data, tagName, interest, content });
  };

  // const ref = createRef(null);

  const articleContent = () => {
    console.log(ref.current?.getContent());
    setValue(ref.current?.getContent());
  };

  return (
    <Container maxWidth="md" >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">Title</CustomLabel>
            <InputArea defaultValue="" {...register("title")} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">Write Here</CustomLabel>
            <BlogEditor
              ref={ref}
              value={value}
            />
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
              <AddTags />
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
            <ImageInput register={register} fileName={"articleImage"} />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Article;
