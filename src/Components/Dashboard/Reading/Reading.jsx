import { Container } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { BlackButton } from "../../../muiComponents/BlackButton";
import CustomSelect from "../../../muiComponents/CustomSelect";
import { InputArea } from "../../../muiComponents/InputArea";
import ReadTable from "./ReadTable";
const categories = [
  "All",
  "Novel",
  "Poetry",
  "Podcast",
  "Videocast",
  "Article",
];
const Reading = ({ t }) => {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    document.title = "Blog | Reading";
  }, []);
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8}>
          <ReadTable />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                {t(`reading_filter_heading`)}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputArea placeholder={t(`reading_search_placeholder`)}
              ></InputArea>
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomSelect
                type="single"
                placeholder={true}
                data={categories}
                selectItems={status}
                setSelectItems={setStatus}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <BlackButton style={{ marginTop: 10 }}>  {t(`reading_apply_btn`)}
               </BlackButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withTranslation()(Reading);
