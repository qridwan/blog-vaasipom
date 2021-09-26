import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import AddTags from "../../../muiComponents/AddTags";
import { BlackButton } from "../../../muiComponents/BlackButton";
import CustomSelect from "../../../muiComponents/CustomSelect";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import { OutlineButton } from "../../../muiComponents/OutlineButton";
import { interests } from "./WritePost";
import BlogEditor from "./BlogEditor";
import ImageInput from "./ImageInput";
import axios from "axios";
import { BaseUrl } from "../../../BaseUrl.config";
import { connect } from "react-redux";
import {
  setPage,
  setPostId,
  setTodo,
  setWriting,
} from "../../../redux/actions/dashboardAction";

const MediaCast = ({
  type,
  dashboardState,
  setPostId,
  setPage,
  setWriting,
  setTodo,
}) => {
  const category = type.toLowerCase();
  const [interest, setInterest] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  // const [value, setValue] = useState();
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(``);
  const [editorValue, setEditorValue] = useState();
  const [loading, setLoading] = useState(false);
  const [allData, setAllData] = useState({
    title: "",
    subTitle: "First subtitle to the first article",
    mainImage: "",
    tags: "",
    url: "",
  });

  const mediaRef = useRef();

  const cleanReduxState = () => {
    setTodo({
      edit: false,
    });
    setPostId("");
    setEditorValue("");
    setWriting(null);
  };

  const { todo } = dashboardState;
  console.log("🚀 ~ todo", todo)
  useEffect(() => {
    document.title = `Writing | ${type}`;
    setIsEdit(todo.edit);
    todo.edit && setEditorValue(todo.content);
    todo.edit && setImage(todo.mainImage);
    todo.edit && setTags(todo.tags);
    todo.edit &&
      setAllData({
        [`${type}Id`]: todo[`${type}Id`],
        title: todo.title,
        mainImage: todo.mainImage,
        url: todo.url,
        tags: todo.tags,
        subTitle: todo.subTitle,
      });
    setLoading(true);
    return () => cleanReduxState();
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
    setEditorValue(mediaRef.current?.getContent());
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
    !todo.edit
      ? axios
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
          })
      : axios
          .put(BaseUrl + `/${category}`, data, { headers })
          .then((response) => {
            console.log(
              "URL :",
              BaseUrl + `/${category}`,
              "SUCCESSFULLY updated your post:",
              response,
              "Updated Data--",
              data
            );
            alert(`${category} Updated`);
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
      {loading && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">Title</CustomLabel>
            <InputArea
              defaultValue={isEdit ? todo.title : ""}
              name="title"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">{type} URL</CustomLabel>
            <InputArea
              defaultValue={isEdit ? todo.url : ""}
              name="url"
              onChange={handleChange}
              placeholder="HTTPS://"
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">Write Here</CustomLabel>
            <BlogEditor ref={mediaRef} value={editorValue} />
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
            <ImageInput
              setData={setAllData}
              category={category}
              image={image}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

// using redux
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setTodo: setTodo,
  setPostId: setPostId,
  setPage: setPage,
  setWriting: setWriting,
};
export default connect(mapStateToProps, mapDispatchToProps)(MediaCast);
