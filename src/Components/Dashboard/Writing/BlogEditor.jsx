import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect } from "react";
import { forwardRef } from "react";

const BlogEditor = forwardRef((props, ref) => {

  const { value, setValue } = props;
  useEffect(() => ref, [value]);

  return (
    <Editor
      onInit={(evt, editor) => {
        ref.current = editor;
      }}
      initialValue={value}
      apiKey="ch28zotn1q8tkyz28lqf0bnwaaex2ava1lxdleg5mgisod5j"
      init={{
        // icons: "jam",
        height: 350,
        menubar: false,
        branding: false,
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
        dfsa: {},
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
        media_url_resolver: function (data, resolve /*, reject*/) {
          if (data.url.indexOf("YOUR_SPECIAL_VIDEO_URL") !== -1) {
            var embedHtml =
              '<iframe src="' +
              data.url +
              '" width="400" height="400" ></iframe>';
            resolve({ html: embedHtml });
          } else {
            resolve({ html: "" });
          }
        },
      }}
    />
  );
});
export default BlogEditor;
