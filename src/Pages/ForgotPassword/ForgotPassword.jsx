import {
  Box,
  FormControl,
  Grid,
  Input,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import jumpingKid from "../../Assets/img/jumpingKid.svg";
import { BlackButton } from "../../muiComponents/BlackButton";
import { loginStyles } from "../../Styles/muiStyles";

const ForgotPassword = () => {
  const classes = loginStyles();
  const [isResetPass, setIsResetPass] = useState(false);
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
  });

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  useEffect(() => {
    document.title = "!Forgot Password";
  }, []);

  const submitEmail = ({ email }) => {
    console.log("🚀 ~submitEmail ~ email", email);
    setIsResetPass(true);
  };

  return (
    <main className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={5}>
          <img src={jumpingKid} alt="" className={classes.img} />
        </Grid>
        <Grid className={classes.boxContainer} item xs={12} sm={7}>
          <Box className={classes.box}>
            {!isResetPass ? (
              <Typography className={classes.heading}>
                Forgot Password
              </Typography>
            ) : (
              <Typography className={classes.heading}>
                Reset Password
              </Typography>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit(submitEmail)}>
              {!isResetPass ? (
                <TextField
                  style={{ marginTop: 15 }}
                  placeholder="Enter Your Email"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...register("email")}
                />
              ) : (
                <>
                  <FormControl fullWidth>
                    <Input
                      style={{ margin: "15px 0" }}
                      type="password"
                      value={values.password}
                      {...register("password")}
                      placeholder="Password"
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <Input
                      style={{ margin: "15px 0" }}
                      type="password"
                      value={values.password}
                      {...register("confirm_password")}
                      placeholder="Confirm Password"
                    />
                  </FormControl>
                </>
              )}
              <BlackButton type="submit" className={classes.btn}>
                {!isResetPass ? "Forgot Password" : " Reset Password"}
              </BlackButton>
            </form>
          </Box>
        </Grid>
      </Grid>
    </main>
  );
};

export default ForgotPassword;
