import "date-fns";
// import MomentUtils from '@date-io/moment';
// import DateFnsUtils from '@date-io/date-fns';
import { Box, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import { BlackButton } from "../../../muiComponents/BlackButton";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import ImageInput from "../Writing/ImageInput";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { BaseUrl } from "../../../BaseUrl.config";
import { headers } from "../../../header.config";
// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px 0",
  },
}));

const EditProfile = () => {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState({});
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
        alert("Profile Updated");
      })
      .catch((err) => {
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
            <CustomLabel htmlFor="">Name</CustomLabel>
            <InputArea
              defaultValue={firstName}
              name="firstName"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomLabel htmlFor="">Profile Title</CustomLabel>
            <InputArea
              defaultValue={profileTitle}
              placeholder="eg. Writer, Publisher"
              name="profileTitle"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <CustomLabel htmlFor="">Profile Description</CustomLabel>
            <InputArea
              defaultValue={profileDesc}
              placeholder=""
              name="profileDesc"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Date Of Birth</CustomLabel>
            <InputArea
              type="date"
              defaultValue={dob}
              name="dob"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Email</CustomLabel>
            <InputArea
              defaultValue={email}
              name="email"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Phone Number</CustomLabel>
            <InputArea
              defaultValue={phone}
              name="phone"
              onChange={handleChange}
            />
          </Grid>
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
            <CustomLabel htmlFor="">Country</CustomLabel>
            <InputArea
              defaultValue={country}
              placeholder="Enter Your Country Here"
              name="country"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel>Add Image</CustomLabel>
            <ImageInput
              setData={setAllData}
              category="profile"
              image={profileImgLink}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <BlackButton onClick={handleUpdateProfile}>Update</BlackButton>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default EditProfile;
