import { Box, Button } from "@material-ui/core";
import React from "react";
import { withTranslation } from "react-i18next";

const Footer = ({ t }) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-around"
      my={3}
      style={{ paddingLeft: "30px" }}
    >
      <Button>{t(`footer_help`)}</Button>
      <Button>{t(`footer_privacy`)}</Button>
      <Button>{t(`footer_terms`)}</Button>
      <Button>{t(`footer_about`)}</Button>
      <Button>{t(`footer_contact`)}</Button>
    </Box>
  );
};

export default withTranslation()(Footer);
