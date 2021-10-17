import "date-fns";
import { Box, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BlackButton } from "../../../muiComponents/BlackButton";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import ImageInput from "../Writing/ImageInput";
import axios from "axios";
import { BaseUrl } from "../../../BaseUrl.config";
import { withTranslation } from "react-i18next";
import { useSnackbar } from "notistack";

const EditProfile = ({ t }) => {
  const { enqueueSnackbar } = useSnackbar();
  const headers = {
    Authorization: localStorage.getItem("token"),
    "Access-Control-Allow-Origin": "*",
    // "content-type": "application/json",
  };
  const [loading, setLoading] = useState(false);
  const [allData, setAllData] = useState({
    firstName: "",
    dob: "",
    phoneCountry: "880",
    phone: Number,
    country: "",
    profileTitle: "Write, Speaker",
    profileDesc: "I will update it later",
    // website: "",
    // email: "",
    // twitter: "",
    // instagram: "",
    // pinterest: "",
    // facebook: "",
  });
  useEffect(() => {
    document.title = "Blog | Profile | Settings";
    console.log(`URL---`, BaseUrl + `/myprofile`, { headers });
    axios
      .get(BaseUrl + `/myprofile`, { headers })
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        setLoading(true);
      })
      .catch((err) => console.log({ err }, BaseUrl + `/myprofile`));
  }, []);

  const handleUpdateProfile = () => {
    axios
      .put(BaseUrl + "/myprofile", allData, { headers })
      .then((response) => {
        console.log(response);
        enqueueSnackbar(`Profile Updated`, { variant: "success" });
      })
      .catch((err) => {
        enqueueSnackbar(`Profile updating failed`, { variant: "error" });
        console.log({ err });
      });
    console.log("🚀 ~ EditProfile ~ allData", allData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "phone"
      ? setAllData((data) => ({
          ...data,
          [name]: Number(value),
        }))
      : setAllData((data) => ({
          ...data,
          [name]: value,
        }));
  };
  const {
    country,
    email,
    firstName,
    profileDesc,
    profileImgLink,
    profileTitle,
    dob,
    phone,
  } = allData;

  return (
    <Box>
      {loading && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CustomLabel htmlFor="">{t(`inputLabel_name`)}</CustomLabel>
            <InputArea
              defaultValue={firstName}
              name="firstName"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomLabel htmlFor="">{t(`inputLabel_profileTitle`)}</CustomLabel>
            <InputArea
              defaultValue={profileTitle}
              placeholder="eg. Writer, Publisher"
              name="profileTitle"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">{t(`inputLabel_profileDesc`)}</CustomLabel>
            <InputArea
              defaultValue={profileDesc}
              placeholder=""
              name="profileDesc"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">{t(`inputLabel_dob`)}</CustomLabel>
            <InputArea
              type="date"
              defaultValue={dob}
              name="dob"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">{t(`inputLabel_email`)}</CustomLabel>
            <InputArea
              defaultValue={email}
              name="email"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">{t(`inputLabel_phone`)}</CustomLabel>
            <InputArea
              defaultValue={phone}
              name="phone"
              onChange={handleChange}
            />
          </Grid>

          {/* SOCIAL INPUT  */}

          {/* <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Website</CustomLabel>
            <InputArea
              defaultValue=""
              placeholder="www."
              name="website"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Twitter</CustomLabel>
            <InputArea
              defaultValue=""
              placeholder="Https://"
              name="twitter"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Instagram</CustomLabel>
            <InputArea
              defaultValue=""
              placeholder="Https://"
              name="instagram"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Pinterest</CustomLabel>
            <InputArea
              defaultValue=""
              placeholder="Https://"
              name="pinterest"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Facebook</CustomLabel>
            <InputArea
              defaultValue=""
              placeholder="Https://"
              name="facebook"
              // onChange={handleChange}
            />
          </Grid> */}

          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">{t(`inputLabel_country`)}</CustomLabel>
            <InputArea
              defaultValue={country}
              placeholder="Enter Your Country Here"
              name="country"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel>{t(`inputLabel_addImage`)}</CustomLabel>
            <ImageInput
              setData={setAllData}
              category="profile"
              image={profileImgLink}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <BlackButton onClick={handleUpdateProfile}>
              {t(`update_btn`)}
            </BlackButton>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default withTranslation()(EditProfile);
