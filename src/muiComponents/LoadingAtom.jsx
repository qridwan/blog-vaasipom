import { Box } from "@mui/system";
import React from "react";
import loadingGIF from "../Assets/icons/Loading.gif";
const LoadingAtom = () => {
  return (
    <Box>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={loadingGIF} alt="" height="80px" />
      </div>
    </Box>
  );
};

export default LoadingAtom;
