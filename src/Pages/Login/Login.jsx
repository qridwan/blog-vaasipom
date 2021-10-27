import {
  Box,
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
// import facebook from "../../Assets/icons/facebook.png";
// import google from "../../Assets/icons/google.png";
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
import { connect } from "react-redux";
import { setPage } from "../../redux/actions/dashboardAction";
import { useSnackbar } from "notistack";
import { red, teal } from "@material-ui/core/colors";

const Login = ({ setPage }) => {
  const classes = loginStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
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

  const [isNewUser, setIsNewUser] = useState(true);
  const [createAcc, setCreateAcc] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isMatchedPass, setIsMatchedPass] = useState(false);
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    document.title = "Blog | Login";
    setPage("login");
    if (sessionStorage.token) {
      history.push("/");
    }
  }, []);
  const handlesessionStorage = (data) => {
    sessionStorage.setItem("token", "Bearer " + data.accessToken);
    sessionStorage.setItem("username", data.username);
  };
  const onSubmit = (data) => {
    let formData = {};
    isNewUser
      ? (formData = {
          fullName: data.full_name,
          email: data.email,
          password: values.password,
        })
      : (formData = {
          username: data.email,
          password: values.password,
        });
    setUserInfo(formData);
    !isNewUser
      ? data.email && values.password
        ? axios
            .post(BaseUrl + "/auth/signin", formData)
            .then((response) => {
              handlesessionStorage(response.data);
              history.push("/");
            })
            .catch((error) => {
              console.log("error", { error });
            })
        : handleErrorMessage(`Please fill up the Sign-In form`)
      : // SEND OTP TO EMAIL
      data.full_name && data.email && values.password && isMatchedPass
      ? axios
          .get(BaseUrl + "/auth/email/otp?email=" + data.email)
          .then((response) => {
            enqueueSnackbar(`OTP sent at ${data.email}`, {
              variant: "success",
            });
            setCreateAcc(true);
          })
          .catch((error) => {
            console.log("error", error);
          })
      : handleErrorMessage(`Please fill up the Sign-up form`);
  };

  const submitOtp = (data) => {
    const signUpForm = {
      ...userInfo,
      otp: values.otp,
    };

    //FOR SIGN UP
    isNewUser && values.otp
      ? axios
          .post(BaseUrl + "/auth/user/signup", signUpForm)
          .then((response) => {
            enqueueSnackbar(
              `Account created successfully, enter your credentials for login`,
              { variant: "success" }
            );
            // history.push("/login");
            setCreateAcc(false);
            setIsNewUser(false);
          })
          .catch((error) => {
            enqueueSnackbar(`Request Failed`, { variant: "error" });
          })
      : handleErrorMessage(`Please enter a valid OTP`);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setUserInfo({ ...userInfo, [prop]: event.target.value });
  };
  const handleConfirmPass = (event) => {
    // setMatchingPass(event.target.value);
    event.target.value === userInfo.password
      ? setIsMatchedPass(true)
      : setIsMatchedPass(false);
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleErrorMessage = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(``);
    }, 3000);
  };
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
                  Hey, <strong>{userInfo.fullName}</strong>, We’ve sent an OTP to
                  your registered Email Address, Which is 
                  <strong>{userInfo.email}</strong>
                  <img src={Edit} alt="edit" style={{ marginLeft: "15px" }} />
                </Typography>
              </>
            )}

            {/* SOCIAL SIGN IN */}
            {/* {!createAcc && (
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

            {!createAcc && <Typography className={classes.or}>-OR-</Typography>} */}

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

                  {isNewUser && (
                    <>
                      <FormControl fullWidth>
                        <Input
                          style={{ margin: "15px 0" }}
                          type={values.showPassword ? "text" : "password"}
                          onChange={handleConfirmPass}
                          placeholder="Confirm Password"
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
                      <Typography
                        align="center"
                        variant="subtitle2"
                        style={{ color: teal[300] }}
                      >
                        {isMatchedPass && `Password  matched`}
                      </Typography>
                    </>
                  )}

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
                  <Typography
                    align="center"
                    variant="subtitle2"
                    style={{ color: red[300] }}
                  >
                    {errorMessage}
                  </Typography>
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

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  setPage: setPage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
