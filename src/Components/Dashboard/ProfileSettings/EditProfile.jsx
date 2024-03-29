import "date-fns";
import { Box, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BlackButton } from "../../../muiComponents/BlackButton";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import ImageInput from "../Writing/ImageInput";
import axios from "axios";
import { BaseUrl } from "../../../BaseUrl.config";
import { withTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import CheckImage from "../../../Function/CheckImage";
import { dark } from "@mui/material/styles/createPalette";
import { grey, red } from "@material-ui/core/colors";
import dateFormat from "dateformat";

const EditProfile = ({ t }) => {
  const { enqueueSnackbar } = useSnackbar();
  const headers = {
    Authorization: sessionStorage.getItem("token"),
    "Access-Control-Allow-Origin": "*",
    "content-type": "application/json",
  };
  const [loading, setLoading] = useState(false);
  const [allData, setAllData] = useState({
    firstName: "",
    dob: "",
    phoneCountry: "",
    phone: Number,
    country: "NN",
    profileTitle: "Profile Title",
    profileDesc: "Edit Your Description",
    // website: "",
    // email: "",
    // twitter: "",
    // instagram: "",
    // pinterest: "",
    // facebook: "",
  });
  useEffect(() => {
    document.title = "Blog | Profile | Settings";
    axios
      .get(BaseUrl + `/myprofile`, { headers })
      .then((response) => {
        setAllData(response.data);
        setLoading(true);
      })
      .catch((err) => console.log({ err }, BaseUrl + `/myprofile`));
  }, []);

  const handleUpdateProfile = () => {
    axios
      .put(BaseUrl + "/myprofile", allData, { headers })
      .then((response) => {
        enqueueSnackbar(`Profile Updated`, { variant: "success" });
      })
      .catch((err) => {
        enqueueSnackbar(`Profile updating failed`, { variant: "error" });
        console.log({ err });
      });
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
  const birthDate = dateFormat(dob, "yyyy-dd-mm");
  console.log("🚀 ~ EditProfile ~ birthDate", birthDate)
  
  const { isImage } = CheckImage(profileImgLink);
  return (
    <Box>
      {loading && (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <CustomLabel htmlFor="">{t(`inputLabel_name`)}</CustomLabel>
              <InputArea
                defaultValue={firstName}
                name="firstName"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <CustomLabel htmlFor="">{t(`inputLabel_dob`)}</CustomLabel>
              <InputArea
                type="date"
                value={birthDate}
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
            <Grid item xs={12} sm={3}>
              <CustomLabel htmlFor="">{t(`inputLabel_country`)}</CustomLabel>
              <InputArea
                defaultValue={country}
                placeholder="Enter Your Country Here"
                name="country"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomLabel htmlFor="">
                {t(`inputLabel_profileTitle`)}
              </CustomLabel>
              <InputArea
                defaultValue={profileTitle}
                placeholder="eg. Writer, Publisher"
                name="profileTitle"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <CustomLabel htmlFor="">
                {t(`inputLabel_profileDesc`)}
              </CustomLabel>
              <TextField
                style={{
                  width: "100%",
                  border: "1px solid",
                  borderColor: grey[400],
                  padding: "5px"
                }}
                multiline
                rows={10}
                defaultValue={profileDesc}
                placeholder=""
                name="profileDesc"
                onChange={handleChange}
              />
              {/* <TextareaAutosize
                minRows={4}
                maxRows={5}
                defaultValue={profileDesc}
                name="profileDesc"
                onChange={handleChange}
                // style={{ width: 200 }}
              /> */}
              {/* <InputArea
                defaultValue={profileDesc}
                placeholder=""
                name="profileDesc"
                onChange={handleChange}
              /> */}
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

            <Grid item xs={12} sm={4}>
              <CustomLabel>{t(`inputLabel_addImage`)}</CustomLabel>
              <ImageInput
                setData={setAllData}
                category="profile"
                image={isImage ? profileImgLink : ""}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <BlackButton onClick={handleUpdateProfile}>
                {t(`update_btn`)}
              </BlackButton>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default withTranslation()(EditProfile);
