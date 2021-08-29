import { Box, Grid } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import React, { createRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BlackButton } from "../../../muiComponents/BlackButton";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import MultiSelect from "../../../muiComponents/MultiSelect";
import { OutlineButton } from "../../../muiComponents/OutlineButton";
import BlogEditor from "./BlogEditor";

const articleStyles = makeStyles((theme) => ({
  imgBox: {
    width: "100%",
    marginTop: "10px",
    height: "90%",
    border: "0.5px solid #BDBDBD",
    backgroundColor: grey[100],
  },
  input: {
    display: "none",
  },
}));

const tags = ["Science", "Travel", "Swimming", "Sports", "International"];
const interests = ["Novel", "Poet", "Fiction", "Economy"];

const Article = () => {
  const classes = articleStyles();
  const [tagName, setTagName] = useState([]);
  const [interest, setInterest] = useState([]);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const articleRef = createRef();
  const articleContent = () => {
    if (articleRef.current) {
      console.log(articleRef.current.getContent());
    }
  };

  console.log(articleContent(), { tagName, interest });

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <CustomLabel shrink htmlFor="">
              Title
            </CustomLabel>
            <InputArea defaultValue="" {...register("title")} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel shrink htmlFor="">
              Topic Of Interest
            </CustomLabel>
            <MultiSelect
              data={interests}
              selectItems={interest}
              setSelectItems={setInterest}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel shrink htmlFor="">
              Add Tags
            </CustomLabel>
            <MultiSelect
              data={tags}
              selectItems={tagName}
              setSelectItems={setTagName}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <CustomLabel shrink htmlFor="">
              Write Here
            </CustomLabel>
            <BlogEditor ref={articleRef} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel>Add Image</CustomLabel>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              {...register("articleImage")}
            />
            <label htmlFor="contained-button-file">
              <div className={classes.imgBox}></div>
            </label>
          </Grid>
        </Grid>
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
      </form>
    </Box>
  );
};

export default Article;
