import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { BlackButton } from "../../../muiComponents/BlackButton";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import CustomSelect from "../../../muiComponents/CustomSelect";
import AddTags from "../../../muiComponents/AddTags";
import { OutlineButton } from "../../../muiComponents/OutlineButton";
import BlogEditor from "./BlogEditor";
import ImageInput from "./ImageInput";
import axios from "axios";
import { BaseUrl } from "../../../BaseUrl.config";
import {
  setPage,
  setPostId,
  setTodo,
  setWriting,
} from "../../../redux/actions/dashboardAction";
import { connect } from "react-redux";
// import { headeeConf } from "../../../Function/Header.info";

export const tags = [
  "Science",
  "Travel",
  "Swimming",
  "Sports",
  "International",
];

export const interests = ["Novel", "Poet", "Fiction", "Economy"];

const Article = ({
  type,
  dashboardState,
  setPostId,
  setPage,
  setWriting,
  setTodo,
}) => {
  console.log("🚀 ~ Article ~ dashboardState", dashboardState);
  const { todo } = dashboardState;
  const [suggTags, setSuggTags] = useState([]);
  const [interest, setInterest] = useState([]);
  const [editorValue, setEditorValue] = useState();
  const ref = useRef(null);
  const [image, setImage] = useState(``);
  const cleanReduxState = () => {
    setTodo(null);
    setPostId("");
    setEditorValue("");
    // // setPage("");
    setWriting(null);
  };

  // let post = {};
  // const post_id = dashboardState.postId;
  // const { title, tags, topic, mainImage, content } =
  //   todo?.article ;
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
    document.title = `Blog | Writing | ${type}`;
    todo && setEditorValue(todo.article.content);
    todo && setInterest([todo.article.topic]);
    todo && setImage(todo.article.mainImage);
    return () => cleanReduxState();
  }, []);

  const category = type.toLowerCase();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAllData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const articleContent = () => {
    console.log(ref.current?.getContent());
    setEditorValue(ref.current?.getContent());
  };

  const HandlePost = async (param) => {
    articleContent();
    const content = ref.current.getContent();
    let selectedTags = [];

    suggTags.forEach((tag) => selectedTags.push(tag.label));
    // console.log({ data, tags, interest, content });
    const postData = {
      ...allData,
      tags: selectedTags.join(),
      topic: interest.join(),
      content: content,
    };
    param === "publish" && CreateArticle(postData);
    param === "draft" && SaveAsDraft(postData);
  };

  const headers = {
    Authorization: localStorage.getItem("token"),
    "Access-Control-Allow-Origin": "*",
    "content-type": "application/json",
  };

  const CreateArticle = (data) => {
    console.log("-data-", data);
    axios
      .post(BaseUrl + `/${category}`, data, {
        headers,
      })
      .then((response) => {
        console.log(
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

  const SaveAsDraft = (post) => {
    console.log("-data-", post);
    axios
      .post(BaseUrl + `/${category}/draft`, post, { headers })
      .then((response) => {
        console.log("response:", response);
        alert(`${category} Saved`);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <CustomLabel htmlFor="">Title</CustomLabel>

          <InputArea
            defaultValue={todo ? todo.article.title : ""}
            type="text"
            name="title"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <CustomLabel htmlFor="">Write Here</CustomLabel>
          <BlogEditor ref={ref} value={editorValue} />
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

            <AddTags setTags={setSuggTags} defaultTags={tags} />
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
                type=""
                style={{ marginLeft: "30px" }}
                onClick={() => HandlePost("draft")}
              >
                Save as Draft
              </OutlineButton>
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={5}>
          <CustomLabel>Add Image</CustomLabel>
          <ImageInput setData={setAllData} category={category} image={image} />
        </Grid>
      </Grid>
    </Container>
  );
};

// export default Article;

// using redux
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setTodo: setTodo,
  setPostId: setPostId,
  setPage: setPage,
  setWriting: setWriting,
};
export default connect(mapStateToProps, mapDispatchToProps)(Article);
