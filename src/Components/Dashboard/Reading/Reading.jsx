import { Container } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BlackButton } from "../../../muiComponents/BlackButton";
import CustomSelect from "../../../muiComponents/CustomSelect";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import DashboardTable from "../Table";
const categories = [
  "All",
  "Novel",
  "Poetry",
  "Podcast",
  "Videocast",
  "Article",
];
const Reading = () => {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    document.title = "Blog | Reading";
  }, []);
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8}>
          <DashboardTable />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Filters
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputArea placeholder="Search By Author Name"></InputArea>
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
              <BlackButton style={{marginTop: 10}}> Apply </BlackButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reading;
