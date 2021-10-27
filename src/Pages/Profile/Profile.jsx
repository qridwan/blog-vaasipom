import {
  Box,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import facebook from "../../Assets/icons/facebook-social.png";
import instagram from "../../Assets/icons/instagram.png";
import linkedIn from "../../Assets/icons/linkedin.png";
import placheholderImg from "../../Assets/img/dp_placeholder.png";
import Feed from "../../Components/Shared/Feed";
import { OutlineButton } from "../../muiComponents/OutlineButton";
import { BaseUrl } from "../../BaseUrl.config.js";
import axios from "axios";
import { PaginationBlog } from "../../muiComponents/PaginationBlog";
import { profileStyles } from "../../Styles/muiStyles";
import { connect } from "react-redux";
import { setPage, setShowTopics } from "../../redux/actions/dashboardAction";
import { useHistory, useParams } from "react-router-dom";
import { withTranslation } from "react-i18next";
import LoadingAtom from "../../muiComponents/LoadingAtom";
import CheckImage from "../../Function/CheckImage";

const Profile = ({ setShowTopics, type, setPage, dashboardState, t }) => {
  const classes = profileStyles();
  const [userInfo, setUserInfo] = useState({});
  const [writings, setWritings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [spinner, setSpinner] = useState(false);
  const { path } = useRouteMatch();
  const { user } = useParams();
  const [pageNo, setPageNo] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [categoryItem, setCategoryItem] = useState("article");
  const headers = {
    Authorization: sessionStorage.getItem("token"),
  };
  const handleCategoryChange = (event) => {
    setCategoryItem(event.target.value);
  };

  const checkHasMore = (page, author) => {
    let subUrl = "";
    let params = {};
    if (!author) {
      subUrl = `/author/writings`;
      params = {
        category: categoryItem,
        page: page + 1,
      };
    } else {
      subUrl = `/posts/interests`;
      params = {
        categoryList: "story,article,poetry,review,podcast,videocast",
        page: page + 1,
        allPost: false,
        author: author,
      };
    }
    axios({
      method: "GET",
      url: BaseUrl + subUrl,
      headers: headers,
      params: params,
    })
      .then((res) => {
        setHasMore(res.data.length > 0);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const getMyProfileInfo = () => {
    axios
      .get(BaseUrl + `/myprofile`, { headers })
      .then((response) => {
        setUserInfo(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log({ err }, BaseUrl + `/myprofile`));
  };

  const getUserProfile = () => {
    axios
      .get(BaseUrl + `/profile/user?user=${user}`, { headers })
      .then((response) => {
        setUserInfo(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log({ err }, BaseUrl + `/profile`));
  };
  const getMyWritings = (paginate) => {
    axios
      .get(
        BaseUrl + `/author/writings?category=${categoryItem}&page=${paginate}`,
        {
          headers,
        }
      )
      .then((response) => {
        setWritings(response.data);
        setSpinner(false);
      })
      .catch((err) => console.log(err));
  };

  // Get Author writings
  const getAuthorWritings = (author, page) => {
    axios
      .get(
        BaseUrl +
          `/posts/interests?categoryList=story,article,poetry,review,podcast,videocast&page=${page}&allPost=false&author=${author}`,
        {
          headers,
        }
      )
      .then((response) => {
        setWritings(response.data);
        setSpinner(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setPage(``);
    setShowTopics(false);
    return () => setShowTopics(true);
  }, [setPage, setShowTopics]);

  useEffect(() => {
    setPageNo(0);
  }, [categoryItem]);

  useEffect(() => {
    setSpinner(true);
    if (path === "/myprofile") {
      getMyProfileInfo();
      getMyWritings(pageNo + 1);
      checkHasMore(pageNo + 1);
    } else {
      getUserProfile();
      getAuthorWritings(user, pageNo + 1);
      checkHasMore(pageNo + 1, user);
    }
  }, [pageNo, categoryItem]);

  const {
    firstName,
    followersCount,
    profileImgLink,
    profileTitle,
    profileDesc,
  } = userInfo;
  const history = useHistory();
  const handleEdit = () => {
    setPage(`Settings`);
    history.push("/dashboard");
  };
  const { isImage } = CheckImage(profileImgLink);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          {!isLoading && (
            <Box textAlign="center" mt={5} className={classes.profileCard}>
              {isImage ? (
                <img
                  src={profileImgLink}
                  alt="dp"
                  className={classes.profile}
                />
              ) : (
                <img src={placheholderImg} alt="" height="200px" />
              )}
              <Typography className={classes.name}>
                {firstName
                  ? firstName?.charAt(0).toUpperCase() + firstName?.slice(1)
                  : "Set Your Name"}
              </Typography>
              <Typography className={classes.title}>
                {profileTitle ? profileTitle : "Title"}
              </Typography>
              <Typography>
                <span className={classes.follower}>{followersCount} </span>
                Followers
              </Typography>

              {path === "/myprofile" && (
                <OutlineButton size="small" onClick={handleEdit}>
                  {t(`edit`)}
                </OutlineButton>
              )}

              {/* SOCIAL ICONS */}
              {/* <Box my={3}>
                <IconButton>
                  <img src={linkedIn} alt="li" />
                </IconButton>
                <IconButton style={{ margin: "0 20px" }}>
                  <img src={instagram} alt="ins" />
                </IconButton>
                <IconButton>
                  <img src={facebook} alt="fb" />
                </IconButton>
              </Box> */}

              <Divider style={{ margin: "10px 0" }} />
              <Typography className={classes.desc}>
                {profileDesc ? profileDesc : "Edit A Short Description"}
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={8}>
          {!user && (
            <Box display="flex" justifyContent="end">
              <Box sx={{ width: 230, my: 3 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select A Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryItem}
                    label="Select a category"
                    onChange={handleCategoryChange}
                    sx={{ fontSize: "10px" }}
                  >
                    <MenuItem value="article">Article</MenuItem>
                    <MenuItem value="story">Story</MenuItem>
                    <MenuItem value="podcast">Podcast</MenuItem>
                    <MenuItem value="videocast">Videocast</MenuItem>
                    <MenuItem value="poetry">Poetry</MenuItem>
                    <MenuItem value="review">Reviews</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          )}
          {!spinner ? <Feed data={writings} type="allFeed" /> : <LoadingAtom />}
          {/* <PaginationBlog page={pageNo} setPage={setPageNo} /> */}
          {writings.length > 0 && (
            <PaginationBlog
              page={pageNo}
              setPage={setPageNo}
              count={writings.length}
              hasMore={hasMore}
            />
          )}
          {writings.length === 0 && !spinner && (
            <p style={{ textAlign: "center" }}>Nothing Found</p>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

const TransProfile = withTranslation()(Profile);
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setPage: setPage,
  setShowTopics: setShowTopics,
};
export default connect(mapStateToProps, mapDispatchToProps)(TransProfile);
