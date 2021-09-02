import { Box, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import TextsmsIcon from "@material-ui/icons/Textsms";

const PostCountInfo = ({views, likes, comments}) => {
    return (
        <Box display="flex" alignItems="center">
              <Box display="flex" alignItems="center" mr={3}>
                <VisibilityOutlinedIcon />
                <Typography style={{ marginLeft: "10px" }}>{views}</Typography>
              </Box>
              <Box display="flex" alignItems="center" mr={3}>
                <IconButton>
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
                <Typography>{likes}</Typography>
              </Box>
              <Box display="flex" alignItems="center" mr={3}>
                <IconButton>
                  <TextsmsIcon />
                </IconButton>
                <Typography>{likes}</Typography>
              </Box>
            </Box>
    );
};

export default PostCountInfo;