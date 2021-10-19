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
import {
  setPage,
  setPostId,
  setTodo,
  setWriting,
} from "../../../redux/actions/dashboardAction";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { useSnackbar } from "notistack";

const types = ["New", "Existing"];
const interests = ["Mystery", "Horror", "Romantic", "Solo"];

const Novel = ({
  type,
  dashboardState,
  setPostId,
  setPage,
  setWriting,
  setTodo,
  t,
}) => {
  const { todo } = dashboardState;
  const [suggTags, setSuggTags] = useState([]);
  const [novelType, setNovelType] = useState([]);
  const [editorValue, setEditorValue] = useState();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(``);
  const [isEdit, setIsEdit] = useState(false);
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

    setIsEdit(todo.edit);
    todo.edit && setEditorValue(todo.content);
    todo.edit && setImage(todo.mainImage);
    todo.edit && setSuggTags(todo.tags);
    todo.edit &&
      setAllData({
        ...allData,
        storyId: todo.storyId,
        title: todo.title,
        subTitle: todo.subTitle,
        mainImage: todo.mainImage,
        content: todo.content,
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
  const cleanReduxState = () => {
    setTodo({
      edit: false,
    });
    setPostId("");
    setEditorValue("");
    setWriting(null);
  };
  const HandlePost = (param) => {
    novelContent();
    const content = novelRef.current.getContent();
    let selectedTags = [];
    !isEdit && suggTags.forEach((tag) => selectedTags.push(tag.label));

    const postData = {
      ...allData,
      content: content,
      tags: selectedTags.join(),
      novelType: novelType,
      topic: interest.join(),
      // type: novelType,
    };

    const editData = {
      ...allData,
      content: content,
    };

    param === "publish" && CreateNovel(isEdit ? editData : postData);
    param === "draft" && SaveAsDraft(postData);
  };

  const novelContent = () => {
    if (novelRef.current) {
      // console.log(novelRef.current.getContent());
    }
  };

  const { enqueueSnackbar } = useSnackbar();
  const headers = {
    Authorization: sessionStorage.getItem("token"),
  };

  const CreateNovel = (data) => {
    todo.edit
      ? axios
          .put(BaseUrl + `/story`, data, {
            headers,
          })
          .then((response) => {
            enqueueSnackbar(`Story Updated`, { variant: "success" });
          })
          .catch((error) => {
            enqueueSnackbar("Something gets wrong!", { variant: "error" });
            console.log("error", error);
          })
      : axios
          .post(BaseUrl + `/story`, data, {
            headers,
          })
          .then((response) => {
            enqueueSnackbar(`Novel Posted`, { variant: "success" });
          })
          .catch((error) => {
            enqueueSnackbar("Something gets wrong!", { variant: "error" });
            console.log("error", error);
          });
  };

  const SaveAsDraft = (post) => {
    axios
      .post(BaseUrl + `/story/draft`, post, { headers })
      .then((response) => {
        enqueueSnackbar(`Novel saved on draft box`, { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar("Something gets wrong!", { variant: "error" });
        console.log("error", error);
      });
  };
  return (
    <>
      {loading && (
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <CustomLabel shrink htmlFor="">
                {t(`writing_label_novelType`)}
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
                {t(`writing_label_title`)}
              </CustomLabel>
              <InputArea
                defaultValue={isEdit ? todo.title : ""}
                type="text"
                name="title"
                onChange={handleChange}
              />
            </Grid>

            {novelType !== "New" && (
              <Grid item xs={12} sm={3}>
                <CustomLabel shrink htmlFor="">
                  {t(`writing_label_epiNumber`)}
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
                {t(`writing_label_epiTitle`)}
              </CustomLabel>
              <InputArea
                defaultValue={isEdit ? todo.subTitle : ""}
                type="text"
                name="episode_title"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomLabel shrink htmlFor="">
                {t(`writing_label_writeHere`)}
              </CustomLabel>
              <BlogEditor ref={novelRef} value={editorValue} />
            </Grid>
            {novelType === "New" && (
              <Grid item xs={12} sm={7} spacing={3}>
                <Grid item xs={12} sm={12}>
                  <CustomLabel htmlFor="">
                    {" "}
                    {t(`writing_label_interest`)}
                  </CustomLabel>
                  <CustomSelect
                    data={interests}
                    selectItems={interest}
                    setSelectItems={setInterest}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CustomLabel htmlFor="">
                    {" "}
                    {t(`writing_label_tags`)}
                  </CustomLabel>
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
                      {t(`publish_btn`)}
                    </BlackButton>
                    <OutlineButton
                      onClick={() => HandlePost("draft")}
                      style={{ marginLeft: "30px" }}
                    >
                      {t(`draft_btn`)}
                    </OutlineButton>
                  </Box>
                </Grid>
              </Grid>
            )}
            <Grid item xs={12} sm={4}>
              <CustomLabel>{t(`inputLabel_addImage`)}</CustomLabel>
              <ImageInput
                setData={setAllData}
                category={"story"}
                image={image}
              />
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
                {isEdit ? t(`update_btn`) : t(`publish_btn`)}
              </BlackButton>
              {!isEdit && (
                <OutlineButton
                  onClick={() => HandlePost("draft")}
                  style={{ marginLeft: "30px" }}
                >
                  {t(`draft_btn`)}
                </OutlineButton>
              )}
            </Box>
          )}
        </Container>
      )}
    </>
  );
};

const WriteNovel = withTranslation()(Novel);
// using redux
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setTodo: setTodo,
  setPostId: setPostId,
  setPage: setPage,
  setWriting: setWriting,
};
export default connect(mapStateToProps, mapDispatchToProps)(WriteNovel);
