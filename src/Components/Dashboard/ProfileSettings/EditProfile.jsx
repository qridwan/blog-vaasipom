import "date-fns";
// import MomentUtils from '@date-io/moment';
// import DateFnsUtils from '@date-io/date-fns';
import { Box, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BlackButton } from "../../../muiComponents/BlackButton";
import { CustomLabel, InputArea } from "../../../muiComponents/InputArea";
import ImageInput from "../Writing/ImageInput";
import { makeStyles } from "@material-ui/core/styles";
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
  useEffect(() => {
    document.title = "Blog | Profile | Settings";
  }, []);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <Box>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CustomLabel htmlFor="">Name</CustomLabel>
            <InputArea defaultValue="" {...register("name")} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Date Of Birth</CustomLabel>
            <InputArea defaultValue="" {...register("dob")} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Email</CustomLabel>
            <InputArea defaultValue="" {...register("email")} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Phone Number</CustomLabel>
            <InputArea defaultValue="" {...register("phone")} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Website</CustomLabel>
            <InputArea
              defaultValue=""
              placeholder="www."
              {...register("website")}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Twitter</CustomLabel>
            <InputArea
              defaultValue=""
              placeholder="Https://"
              {...register("twitter")}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Instagram</CustomLabel>
            <InputArea
              defaultValue=""
              placeholder="Https://"
              {...register("instagram")}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Pinterest</CustomLabel>
            <InputArea
              defaultValue=""
              placeholder="Https://"
              {...register("pinterest")}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Facebook</CustomLabel>
            <InputArea
              defaultValue=""
              placeholder="Https://"
              {...register("facebook")}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel htmlFor="">Country</CustomLabel>
            <InputArea
              defaultValue=""
              placeholder="Enter Your Country Here"
              {...register("twitter")}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLabel>Add Image</CustomLabel>
            <ImageInput register={register} fileName={"profileImage"} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BlackButton type="submit">Update</BlackButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EditProfile;
