import { InputAdornment, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import { BlackButton } from "../../muiComponents/BlackButton";
import { InputArea } from "../../muiComponents/InputArea";

const postCommentStyle = makeStyles({
  commentWrapper: {
    borderRadius: "25px",
    margin: "0 auto" ,
    marginBottom: "20px",
    backgroundColor: grey[200],
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
const PostComment = ({ width }) => {
  const classes = postCommentStyle();
  return (
    <div className={classes.commentWrapper} style={{ width: width,}}>
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
  );
};

export default PostComment;
