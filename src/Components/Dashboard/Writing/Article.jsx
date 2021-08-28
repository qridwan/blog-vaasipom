import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Article = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <Box>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={10}>
        <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          apiKey: "ch28zotn1q8tkyz28lqf0bnwaaex2ava1lxdleg5mgisod5j",
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "image",
            "link",
            "anchor",
            "table",
            "media",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "formatselect | " +
            "bold italic link " +
            " bullist numlist outdent indent | " +
            "image blockquote table media" +
            "| undo redo",
          content_style:
            "body { font-family:Manrope,Arial,sans-serif; font-size:14px }",
          audio_template_callback: function (data) {
            return (
              "<audio controls>" +
              '\n<source src="' +
              data.source +
              '"' +
              (data.sourcemime ? ' type="' + data.sourcemime + '"' : "") +
              " />\n" +
              (data.altsource
                ? '<source src="' +
                  data.altsource +
                  '"' +
                  (data.altsourcemime
                    ? ' type="' + data.altsourcemime + '"'
                    : "") +
                  " />\n"
                : "") +
              "</audio>"
            );
          },
          media_url_resolver: function (data, resolve/*, reject*/) {
            if (data.url.indexOf('YOUR_SPECIAL_VIDEO_URL') !== -1) {
              var embedHtml = '<iframe src="' + data.url +
              '" width="400" height="400" ></iframe>';
              resolve({html: embedHtml});
            } else {
              resolve({html: ''});
            }
          }
        }}
      />
      <button onClick={log}>Log editor content</button>
        </Grid>
        <Grid item xs={12} sm={2}>
           Image Files
        </Grid>
        </Grid>
     
    </Box>
  );
};

export default Article;
