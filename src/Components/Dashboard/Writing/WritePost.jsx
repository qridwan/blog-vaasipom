import { Box, Container, Grid, Typography } from "@material-ui/core";
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
import { withTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { ConvertHtmlToText } from "../../../Function/ConvertHtmlToText";
import { dashboardStyle } from "../../../Styles/muiStyles";
import GetInterest from "../../../Function/GetInterest";
const WritePost = ({
  type,
  dashboardState,
  setPostId,
  setPage,
  setWriting,
  setTodo,
  t,
}) => {
  const classes = dashboardStyle();
  const { todo } = dashboardState;
  const [suggTags, setSuggTags] = useState();
  const [interest, setInterest] = useState([]);
  const [editorValue, setEditorValue] = useState();
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const [image, setImage] = useState(``);
  const { enqueueSnackbar } = useSnackbar();
  const cleanReduxState = () => {
    setTodo({
      edit: false,
    });
    setPostId("");
    setEditorValue("");
    setWriting(null);
  };
  const [isEdit, setIsEdit] = useState(false);
  const [allData, setAllData] = useState({
    title: "",
    subTitle: ``,
    mainImage: "",
    // subTitle: "",
    // topic: "",
    content: "",
  });
  const { allInterest } = GetInterest();
  useEffect(() => {
    document.title = `Blog | Writing | ${type.toUpperCase()}`;
    setIsEdit(todo.edit);
    todo.edit && setEditorValue(todo.content);
    // todo && setInterest([todo.article.topic]);
    todo.edit && setImage(todo.mainImage);
    todo.edit && setSuggTags(todo.tags);
    todo.edit &&
      setAllData({
        ...allData,
        [`${type}Id`]: todo[`${type}Id`],
        title: todo.title,
        subTitle: todo.subTitle,
        mainImage: todo.mainImage,
        tags: todo.tags,
      });
    setLoading(true);
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
    setEditorValue(ref.current?.getContent());
  };

  const HandlePost = async (param) => {
    articleContent();
    const content = ref.current.getContent();
    const text = ConvertHtmlToText(content);

    let selectedTags = [];
    suggTags && suggTags.forEach((tag) => selectedTags.push(tag.label));
    const postData = {
      ...allData,
      subTitle: text.split(" ").slice(0, 20).join(" "),
      tags: selectedTags.join(),
      topic: interest.join(),
      content: content,
    };
    const editData = {
      ...allData,
      // tags: selectedTags.join(),
      content: content,
    };
    param === "publish" && CreateArticle(isEdit ? editData : postData);
    param === "draft" && SaveAsDraft(postData);
  };

  const headers = {
    Authorization: sessionStorage.getItem("token"),
  };

  const CreateArticle = (data) => {
    todo.edit
      ? axios
          .put(BaseUrl + `/${category}`, data, {
            headers, //headers Authorization: sessionStorage.getItem("token"),
          })
          .then((response) => {
            setPage(`Writing`);
            enqueueSnackbar(`${category} updated`, { variant: "success" });
          })
          .catch((error) => {
            enqueueSnackbar(`${category} updating failed!`, {
              variant: "error",
            });
            console.log("error", error);
          })
      : axios
          .post(BaseUrl + `/${category}`, data, {
            headers,
          })
          .then((response) => {
            setPage(`Writing`);
            enqueueSnackbar(`${category} posted`, { variant: "success" });
          })
          .catch((error) => {
            enqueueSnackbar(`${category} posting failed!`, {
              variant: "error",
            });
            console.log("error", error);
          });
  };

  const SaveAsDraft = (post) => {
    axios
      .post(BaseUrl + `/${category}/draft`, post, { headers })
      .then((response) => {
        setPage(`Writing`);
        enqueueSnackbar(`${category} successfully saved`, {
          variant: "success",
        });
      })
      .catch((error) => {
        enqueueSnackbar(`${category} saving failed!`, { variant: "error" });
        console.log("error", error);
      });
  };

  return (
    <Container maxWidth="md">
      <Typography className={classes.title}>
        {t(`write_headings`) + " "}
        {t(`dash_modal_${type}`)}
      </Typography>
      {loading && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">{t(`writing_label_title`)}</CustomLabel>
            <InputArea
              defaultValue={isEdit ? todo.title : ""}
              type="text"
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
            <CustomLabel htmlFor="">{t(`writing_label_writeHere`)}</CustomLabel>
            <BlogEditor ref={ref} value={editorValue} />
          </Grid>

          <Grid item xs={12} sm={7} spacing={3}>
            {!isEdit && (
              <>
                <Grid item xs={12} sm={12}>
                  <CustomLabel htmlFor="">
                    {t(`writing_label_interest`)}
                  </CustomLabel>
                  <CustomSelect
                    data={allInterest}
                    selectItems={interest}
                    setSelectItems={setInterest}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CustomLabel htmlFor="">
                    {t(`writing_label_tags`)}
                  </CustomLabel>

                  <AddTags setTags={setSuggTags} defaultTags={suggTags} />
                </Grid>
              </>
            )}

            <Grid item xs={12} sm={12}>
              <Box
                display="flex"
                mt={5}
                mb={3}
                alignItems="center"
                justifyContent="start"
              >
                <BlackButton onClick={() => HandlePost("publish")}>
                  {isEdit ? t(`update_btn`) : t(`publish_btn`)}
                </BlackButton>
                {!isEdit && (
                  <OutlineButton
                    type=""
                    style={{ marginLeft: "30px" }}
                    onClick={() => HandlePost("draft")}
                  >
                    {t(`draft_btn`)}
                  </OutlineButton>
                )}
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={5}>
            <CustomLabel>{t(`inputLabel_addImage`)}</CustomLabel>
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
const writeApost = withTranslation()(WritePost);
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setTodo: setTodo,
  setPostId: setPostId,
  setPage: setPage,
  setWriting: setWriting,
};
export default connect(mapStateToProps, mapDispatchToProps)(writeApost);
