import {
  Box,
  FormControl,
  Grid,
  Input,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import jumpingKid from "../../Assets/img/jumpingKid.svg";
import { BaseUrl } from "../../BaseUrl.config";
import { BlackButton } from "../../muiComponents/BlackButton";
import { loginStyles } from "../../Styles/muiStyles";

const ForgotPassword = () => {
  const classes = loginStyles();
  const history = useHistory();
  const [isResetPass, setIsResetPass] = useState(false);
  // const [values, setValues] = useState({
  //   password: "",
  //   confirmPassword: "",
  //   showPassword: false,
  // });
  const [formdata, setFormdata] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const headers = {
    Authorization: localStorage.getItem("token"),
  };

  // const {
  //   register,
  //   handleSubmit,
  //   // formState: { errors },
  // } = useForm();
  useEffect(() => {
    document.title = "!Forgot Password";
  }, []);

  const submitEmail = () => {
    console.log(
      "🚀 ~ sent otp url`",
      BaseUrl + `/auth/email/reset/otp?email=${formdata.email}`
    );
    // setFormdata({
    //   ...email,
    //   email: email,
    // });
    axios
      .get(BaseUrl + `/auth/email/reset/otp?email=${formdata.email}`, {
        headers,
      })

      .then((response) => {
        alert(`OTP sent to on ${formdata.email}`);
        setIsResetPass(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // name !== "confirmPassword" &&
    setFormdata((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const handleResetPassword = (e) => {
    console.log(formdata);
    const data = {
      email: formdata.email,
      otp: formdata.otp,
      newPassword: formdata.newPassword,
    };
    if (formdata.newPassword !== formdata.confirmPassword) {
      alert(`Password not matched ${formdata}`);
    } else {
      axios.post(BaseUrl + `/auth/resetpassword`, data, { headers })
      .then(response => {
        alert(`Password changed successfully ${formdata}`);
        history.push(`/login`)
      })
      .catch(error => {console.log(error)});
    }
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
            {!isResetPass && (
              <TextField
                style={{ marginTop: 15 }}
                placeholder="Enter Your Email"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                name="email"
                onChange={handleChange}
              />
            )}
            {/* Login Form */}
            {isResetPass && (
              <>
                <FormControl fullWidth>
                  <Input
                    style={{ margin: "15px 0" }}
                    type=""
                    name="otp"
                    onChange={handleChange}
                    placeholder="OTP"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <Input
                    style={{ margin: "15px 0" }}
                    type="password"
                    // value={values.password}
                    name="newPassword"
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <Input
                    style={{ margin: "15px 0" }}
                    type="password"
                    // value={values.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                    placeholder="Confirm Password"
                  />
                </FormControl>
              </>
            )}
            <BlackButton
              onClick={!isResetPass ? submitEmail : handleResetPassword}
              className={classes.btn}
            >
              {!isResetPass ? "Forgot Password" : " Reset Password"}
            </BlackButton>
          </Box>
        </Grid>
      </Grid>
    </main>
  );
};

export default ForgotPassword;
