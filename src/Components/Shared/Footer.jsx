import { Box, Button } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-around"
      my={3}
      style={{ paddingLeft: "30px" }}
    >
      <Button>Help</Button>
      <Button>Privacy</Button>
      <Button>Terms</Button>
      <Button>About</Button>
      <Button>Contact</Button>
    </Box>
  );
};

export default Footer;
