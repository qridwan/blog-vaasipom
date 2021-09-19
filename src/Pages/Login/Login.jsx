import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import jumpingKid from "../../Assets/img/jumpingKid.svg";
import facebook from "../../Assets/icons/facebook.png";
import google from "../../Assets/icons/google.png";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { BlackButton } from "../../muiComponents/BlackButton";
import { useForm } from "react-hook-form";
import Edit from "../../Assets/icons/edit.png";
import { NavLink } from "react-router-dom";
import { loginStyles } from "../../Styles/muiStyles";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl.config.js";
import { useHistory } from "react-router-dom";

const Login = () => {
  const classes = loginStyles();
  const history = useHistory();
  const [values, setValues] = useState({
    password: "",
    otp: "",
    showPassword: false,
  });
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const [isNewUser, setIsNewUser] = useState(true);
  const [createAcc, setCreateAcc] = useState(false);
  // const [res, setRes] = useState({
  //   message: "",
  //   passwordConfirmation: 0,
  // });

  useEffect(() => {
    document.title = "Blog | Login";
    if (localStorage.token) {
      history.push("/");
    }
  }, []);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🚀 ~ file: Login.jsx ~ line 61 ~ onSubmit ~ data", data);
    let formData = {};
    isNewUser
      ? formData = {
          name: data.full_name,
          email: data.email,
          password: values.password,
        }
      : formData = {
          username: data.email,
          password: values.password,
        };

    // FOR SIGN IN
    
    !isNewUser &&
      axios
        .post(BaseUrl + "/auth/signin", formData)
        .then((response) => {
          console.log("response:", response);
          localStorage.setItem("token", "Bearer " + response.data.accessToken);
          localStorage.setItem("username", response.data.username);
          history.push("/");
        })
        .catch((error) => {
          console.log("error", error);
        });

    // SEND OTP TO EMAIL

    // isNewUser &&
    //   axios
    //     .get(BaseUrl + "/auth/email/otp?email=" + data.email)
    //     .then((response) => {
    //       setUserInfo({
    //         name: data.full_name,
    //         email: data.email,
    //         password: values.password,
    //         message: response.data.message,
    //         verifyOtp: 1,
    //       });
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //       // setUserInfo((data) => ({
    //       //   ...data,
    //       //   verifyOtp: 0,
    //       // }));
    //     });

    isNewUser && setCreateAcc(true);
  };

  const submitOtp = (data) => {
    console.log("🚀", data);
    // setOtp(data.otp);
    setUserInfo({
      ...userInfo,
      otp: values.otp,
    });

    //FOR SIGN UP
    // isNewUser &&
    //   axios
    //     .post(BaseUrl + "/auth/user/signup", data)
    //     .then((response) => {
    //       console.log("response:", response);
    //       setRes((data) => ({
    //         ...data,
    //         message: response.data.message,
    //         passwordconfirmation: 0,
    //       }));
    //     })
    //     .catch((error) => {
    //       setRes((data) => ({
    //         ...data,
    //         message: data.message,
    //         passwordconfirmation: 0,
    //       }));
    //       console.log("error", error);
    //     });

    setCreateAcc(false);
    console.log(userInfo);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setUserInfo({ ...userInfo, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log({ userInfo }, { signInData });
  return (
    <main className={classes.root}>
      <Grid container>
        <Grid item sm={12} md={5}>
          <img src={jumpingKid} alt="" className={classes.img} />
        </Grid>
        <Grid className={classes.boxContainer} item sm={12} md={7}>
          <Box className={classes.box}>
            {!createAcc &&
              (isNewUser ? (
                <Typography className={classes.heading}>
                  Create Account
                </Typography>
              ) : (
                <Typography className={classes.heading}>
                  Welcome Back!
                </Typography>
              ))}
            {createAcc && (
              <>
                <Typography className={classes.heading}>Enter Otp</Typography>
                <Typography className={classes.otpInfo}>
                  Hey, {userInfo.name}, We’ve sent an OTP to your registered
                  Email Address Which is <strong>{userInfo.email}</strong>
                  <img src={Edit} alt="edit" style={{ marginLeft: "15px" }} />
                </Typography>
              </>
            )}
            {!createAcc && (
              <Box display="flex" alignItems="center" justifyContent="center">
                <Button variant="outlined" style={{ marginRight: "15px" }}>
                  <img src={google} alt="" />
                  <Typography className={classes.btnText}>
                    Google Sign Up
                  </Typography>
                </Button>
                <Button variant="outlined">
                  <img src={facebook} alt="" />
                  <Typography className={classes.btnText}>
                    Facebook Sign Up
                  </Typography>
                </Button>
              </Box>
            )}

            {!createAcc && <Typography className={classes.or}>-OR-</Typography>}

            {/* Login Form */}
            {!createAcc ? (
              <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {isNewUser && (
                    <TextField
                      style={{ marginTop: 15 }}
                      placeholder="Full Name"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      {...register("full_name")}
                    />
                  )}
                  <TextField
                    style={{ marginTop: 15 }}
                    placeholder="Email Address"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register("email")}
                  />
                  <FormControl fullWidth>
                    <Input
                      style={{ margin: "15px 0" }}
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      placeholder="Password"
                      // {...register("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  {!isNewUser && (
                    <NavLink to="/forgotPassword">
                      <p className={classes.forgotPassword}>Forgot Password</p>
                    </NavLink>
                  )}
                  {isNewUser ? (
                    <BlackButton type="submit" className={classes.btn}>
                      Create Account
                    </BlackButton>
                  ) : (
                    <BlackButton type="submit" className={classes.btn}>
                      Log In
                    </BlackButton>
                  )}
                </form>
                {isNewUser ? (
                  <Typography className={classes.instruction}>
                    Already Have an Account?
                    <span
                      className={classes.span}
                      onClick={() => setIsNewUser(false)}
                    >
                      Log in
                    </span>
                  </Typography>
                ) : (
                  <Typography className={classes.instruction}>
                    Doesn't Have an Account?
                    <span
                      className={classes.span}
                      onClick={() => setIsNewUser(true)}
                    >
                      Sign Up
                    </span>
                  </Typography>
                )}
              </Box>
            ) : (
              <form onSubmit={handleSubmit(submitOtp)}>
                <TextField
                  style={{ marginTop: 15 }}
                  placeholder="Enter OTP"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  // {...register("otp")}
                  onChange={handleChange("otp")}
                />
                <BlackButton type="submit" className={classes.btn}>
                  Create Account
                </BlackButton>
              </form>
            )}
          </Box>
        </Grid>
      </Grid>
    </main>
  );
};

export default Login;
