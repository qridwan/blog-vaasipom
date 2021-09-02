import {
  Box,
  Card,
  makeStyles,
  CardMedia,
  Container,
  IconButton,
  Typography,
  Grid,
  InputAdornment,
  TextField,
  Input,
} from "@material-ui/core";
import React from "react";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/Share";
import FeedImg from "../../Assets/img/feedImg.png";
import AuthorsToFollow from "../Shared/AuthorsToFollow";
import SubNavigation from "./SubNavigation";
import Navigation from "../../Pages/Common/Navigation";
import AuthorButton from "../../muiComponents/AuthorButton";
import authorImg from "../../Assets/img/authorbtnImg.png";
import shareIcon from "../../Assets/icons/shareIcon.svg";
import PostCountInfo from "../Shared/PostCountInfo";
import PostFooterInfo from "../Shared/PostFooterInfo";
import { grey, red } from "@material-ui/core/colors";
import { InputArea } from "../../muiComponents/InputArea";
import { DarkButton } from "../../muiComponents/OutlineButton";
import { BlackButton } from "../../muiComponents/BlackButton";
import CommentTemp from "../Shared/CommentTemp";

const fullFeedStyles = makeStyles({
  root: {
    margin: "20px 0 0 0",
    boxShadow: "none",
    paddingBottom: "50px",
  },
  media: {
    width: "100%",
    height: "450px",
    borderRadius: "20px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "150%",
    padding: "25px 0",
    color: "#121212",
    "@media (max-width:800px)": {
      fontSize: "20px",
      lineHeight: "110%",
      padding: "10px 0",
    },
  },
  desc: {
    fontSize: "18px",
    lineHeight: "150%",
    padding: "15px 0",
    color: "#454545",
    whiteSpace: "pre-line",
    textAlign: "justify",
    "@media (max-width:800px)": {
      fontSize: "13px",
      lineHeight: "110%",
    },
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  likeBtn: {
    padding: "15px",
    marginBottom: "20px",
    backgroundColor: red[50],
    "&:hover": {
      backgroundColor: red[50],
    },
  },
  likeDesc: {
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "30px",
    color: "#000000",
  },
  text: {
    textAlign: "start",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#000000",
    marginBottom: "20px",
  },
  commentWrapper: {
    borderRadius: "25px",

    backgroundColor: grey[200],
    width: "40%",
    "@media (max-width:800px)": {
      width: "100%",
    },
  },
  commentInput: {
    padding: "5px 0 5px 8px",
    borderRadius: "25px",
    backgroundColor: "transparent",
  },
});

// demo data
const feedData = {
  id: 1,
  author: "Aadavan",
  title: "The art of writing Create a blog post subtitle",
  desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec porttitor purus. Ut fermentum ut nulla ac viverra. Ut sit amet sem leo. Morbi ut eleifend leo. Phasellus imperdiet quam non metus commodo, quis porta diam tincidunt. Proin est quam, tincidunt in augue et, convallis mattis quam. Quisque posuere, orci a ullamcorper rhoncus, tellus ligula consectetur sapien, vel mollis ipsum mauris sed mi. Donec dignissim tortor quis posuere ultrices. Cras luctus a quam eget rhoncus. Etiam dapibus varius elementum.
  
  Duis venenatis semper nibh, sed efficitur turpis accumsan sed. In tempor, sapien at vulputate suscipit, felis nisi sodales leo, sed accumsan lorem lacus tincidunt ligula. Nullam luctus nibh venenatis faucibus ultrices. Sed pharetra sollicitudin neque, at luctus magna volutpat ut. Curabitur vulputate mauris felis, nec maximus libero volutpat eget. Quisque ex risus, auctor sollicitudin eros non, cursus aliquam sapien. Aliquam erat volutpat. Aliquam erat volutpat. Donec non condimentum est. Sed a condimentum tellus. Proin in libero nec felis viverra ultricies. Praesent imperdiet lorem sed est aliquam, vitae gravida ligula tincidunt. Phasellus imperdiet sem at dolor efficitur condimentum.
  
  Sed purus justo, viverra ut porttitor non, aliquet ac mauris. Sed viverra magna id fermentum lobortis. Proin pharetra accumsan congue. Nam rhoncus, elit vel hendrerit efficitur, massa nulla pharetra diam, tincidunt elementum arcu magna non sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sit amet massa porttitor, fermentum felis a, hendrerit mauris. Curabitur mi nisi, vehicula laoreet maximus sit amet, luctus at erat. Vivamus non odio eu libero posuere fermentum. Praesent suscipit diam dui, sit amet congue mauris fringilla ac. Donec ligula massa, volutpat sed enim vel, commodo maximus justo. Vestibulum ligula urna, tristique viverra mi id, ullamcorper convallis mauris. Aliquam rutrum tortor orci, vel aliquet felis fringilla vitae. Donec in eros a nisi hendrerit porta vitae porta magna.
  
  Nullam ut nisi aliquam, imperdiet dolor sit amet, aliquet leo. Etiam iaculis nunc ac purus interdum, vitae sodales nisi ornare. Aliquam efficitur dui vitae lorem vehicula, quis malesuada leo blandit. Vivamus nec metus in velit dignissim condimentum. Sed sit amet enim metus. Aliquam volutpat nisl non velit porttitor, a posuere urna ultrices. Nunc non arcu vel libero congue gravida. Morbi faucibus lobortis finibus. Aenean maximus orci magna, id dapibus nibh molestie ut. Morbi cursus urna id massa sollicitudin, eu ultricies lacus venenatis. Nullam ut accumsan nisl, at dapibus dolor. Fusce convallis, ipsum nec scelerisque fermentum, diam eros lobortis metus, eget egestas lectus urna eget nulla. Donec viverra eu justo non semper. Ut ac dignissim libero, et mollis lectus. Donec tortor ex, pharetra a diam sed, bibendum efficitur augue.
  
  Curabitur vehicula velit mollis cursus maximus. Phasellus ut augue eget libero tincidunt dapibus nec ac nulla. Maecenas vel augue luctus nisi dignissim semper ut ut ex. Ut posuere convallis varius. Aliquam erat volutpat. Nullam luctus dui lorem, ac fermentum neque fringilla et. Integer sagittis turpis a augue accumsan, nec auctor tellus bibendum. Aliquam tempor orci semper, commodo sapien eu, suscipit ex. Donec auctor, nulla sed scelerisque rutrum, urna eros malesuada nulla, a viverra sapien augue sit amet ante. Vestibulum ultrices mattis tempus. Aenean ultricies ullamcorper volutpat.`,
  img: FeedImg,
  likes: 529,
  views: 768,
  date: "10th August",
  readTime: "4Min",
  topic: "Science",
};
const comments = [1,2,3,4,5,6,7]
const FullFeed = () => {
  const classes = fullFeedStyles();
  const { author, title, desc, img, likes, views, date, readTime, topic } =
    feedData;
  return (
    <>
      <Navigation />
      <SubNavigation />
      <Container maxWidth="lg">
        <Card className={classes.root}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography className={classes.title}>{title}</Typography>
            <div>
              <IconButton>
                {/* <ShareIcon /> */}
                <img src={shareIcon} alt="Share" height={30} />
              </IconButton>
            </div>
          </Box>
          <Box>
            {/* image */}
            {img && (
              <CardMedia
                className={classes.media}
                image={img}
                title="Feed Cover Photo"
              />
            )}
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={3}
          >
            <PostCountInfo views={views} likes={likes} />

            <PostFooterInfo date={date} readTime={readTime} topic={topic} />
          </Box>
          {/* description */}
          <Typography className={classes.desc}>{desc}</Typography>

          <Box display="flex" justifyContent="center" my={5}>
            <span style={{ textAlign: "center" }}>
              <IconButton className={classes.likeBtn} color="secondary">
                <FavoriteBorderOutlinedIcon color="secondary" />
              </IconButton>
              <Typography className={classes.likeDesc}>
                Please Like If you Enjoyed This Article
              </Typography>
            </span>
          </Box>
        </Card>
        <Typography className={classes.text}>Comments</Typography>
        <div className={classes.commentWrapper}>
          <InputArea
            id="outlined-start-adornment"
            className={classes.commentInput}
            placeholder="Write something here"
            type="comment"
            endAdornment={
              <InputAdornment position="end">
                <BlackButton> Post </BlackButton>
              </InputAdornment>
            }
            variant="outlined"
          />
        </div>
        <Grid container spacing={3}>
          {/* <AuthorsToFollow width="1/3" /> */}
          <CommentTemp web={4} comments={comments}/>
        </Grid>
      </Container>
    </>
  );
};

export default FullFeed;
