import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import AddTags from "../../../muiComponents/AddTags";
import { BlackButton } from "../../../muiComponents/BlackButton";
import CustomSelect from "../../../muiComponents/CustomSelect";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import { OutlineButton } from "../../../muiComponents/OutlineButton";
// import { interests } from "./WritePost";
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
import { withTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { ConvertHtmlToText } from "../../../Function/ConvertHtmlToText";
import { dashboardStyle } from "../../../Styles/muiStyles";
import GetInterest from "../../../Function/GetInterest";

const MediaCast = ({
  type,
  dashboardState,
  setPostId,
  setPage,
  setWriting,
  setTodo,
  t,
}) => {
  const category = type.toLowerCase();
  const classes = dashboardStyle();
  const [interest, setInterest] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(``);
  const [editorValue, setEditorValue] = useState();
  const [loading, setLoading] = useState(false);
  const [allData, setAllData] = useState({
    title: "",
    subTitle: "",
    mainImage: "",
    tags: "",
    url: "",
  });
  const { enqueueSnackbar } = useSnackbar();

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
    setEditorValue(mediaRef.current?.getContent());
  };

  const HandlePost = async (param) => {
    editorContent();
    const content = mediaRef.current.getContent();
    const text = ConvertHtmlToText(await content);
    let selectedTags = [];
    tags.forEach((tag) => selectedTags.push(tag.label));
    const postData = {
      ...allData,
      tags: selectedTags.join(),
      topic: interest.join(),
      content: content,
      subTitle: text.split(" ").slice(0, 20).join(" "),
    };
    param === "publish" && CreatePost(postData);
    param === "draft" && SaveAsDraft(postData);
    setAllData(postData);
  };

  //API INTEGRATION
  const { allInterest } = GetInterest();
  const headers = {
    Authorization: sessionStorage.getItem("token"),
    "Access-Control-Allow-Origin": "*",
  };
  const CreatePost = (data) => {
    !todo.edit
      ? axios
          .post(BaseUrl + `/${category}`, data, { headers })
          .then((response) => {
            setPage(`Writing`);
            enqueueSnackbar(`${category} successfully posted`, {
              variant: "success",
            });
          })
          .catch((error) => {
            enqueueSnackbar(`${category} posting failed!`, {
              variant: "error",
            });
            console.log("error", error);
          })
      : axios
          .put(BaseUrl + `/${category}`, data, { headers })
          .then((response) => {
            setPage(`Writing`);
            enqueueSnackbar(`${category} updated`, { variant: "success" });
          })
          .catch((error) => {
            enqueueSnackbar(`${category} update failed`, { variant: "error" });
            console.log("error", error);
          });
  };

  const SaveAsDraft = (data) => {
    axios
      .post(BaseUrl + `/${category}/draft`, data, { headers })
      .then((response) => {
        setPage(`Writing`);
        enqueueSnackbar(`${category} saved as a draft`, { variant: "info" });
      })
      .catch((error) => {
        enqueueSnackbar(`${category} saving failed`, { variant: "error" });
        console.log("error", error);
      });
  };

  // const getAllInterest = () => {
  //   axios
  //     .get(BaseUrl + `/interests`, { headers })
  //     .then((res) => {
  //       let allData = [];
  //       res.data.forEach((data) => allData.push(data.interestId));
  //       setALlInterest(allData);
  //     })
  //     .catch((err) => console.error(err));
  // };
  return (
    <Container maxWidth="md">
      <Typography className={classes.title}>
        {t(`write_headings`) + " "}
        {t(`dash_modal_${type}`)}
      </Typography>
      {loading && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor=""> {t(`writing_label_title`)}</CustomLabel>
            <InputArea
              defaultValue={isEdit ? todo.title : ""}
              name="title"
              onChange={handleChange}
            />
          </Grid>

          {/* <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">{t(`writing_label_subTitle`)}</CustomLabel>
            <InputArea
              defaultValue={isEdit ? todo.subTitle : ""}
              type="text"
              name="subTitle"
              onChange={handleChange}
            />
          </Grid> */}

          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">
              {t(`writing_label_${type}Url`)}
            </CustomLabel>
            <InputArea
              defaultValue={isEdit ? todo.url : ""}
              name="url"
              onChange={handleChange}
              placeholder="HTTPS://"
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">
              {" "}
              {t(`writing_label_writeHere`)}
            </CustomLabel>
            <BlogEditor ref={mediaRef} value={editorValue} />
          </Grid>

          <Grid item xs={12} sm={7} spacing={3}>
            <Grid item xs={12} sm={12}>
              <CustomLabel htmlFor="">
                {" "}
                {t(`writing_label_interest`)}
              </CustomLabel>
              <CustomSelect
                data={allInterest}
                selectItems={interest}
                setSelectItems={setInterest}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomLabel htmlFor=""> {t(`writing_label_tags`)}</CustomLabel>
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

          <Grid item xs={12} sm={5}>
            <CustomLabel> {t(`inputLabel_addImage`)}</CustomLabel>
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
const WriteMedia = withTranslation()(MediaCast);
// using redux
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setTodo: setTodo,
  setPostId: setPostId,
  setPage: setPage,
  setWriting: setWriting,
};
export default connect(mapStateToProps, mapDispatchToProps)(WriteMedia);
