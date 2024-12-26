import "./LoginForm.scss";
// import { Box } from "@mui/material";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import MuiInput from "../../components/Input/MuiInput";
import MuiButton from "../../components/Button/MuiButton";
import DigitalIndia from "../../assets/images/logo/DigitalIndia.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  setMobile,
  sendOtp,
  resetMobile,
  editMobile,
} from "../../store/slices/loginSlice";
import { LoginSchema } from "./LoginSchema";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OtpForm from "../OtpForm/OtpForm";
import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();

// const handleSignUpClick = () => {
//   navigate('/SignUpPage'); // Navigates to the signup page
// };

const LoginForm = () => {
  const dispatch = useDispatch();
  const { Mobile, isPhone, loading, error } = useSelector(
    (state) => state.login
  );

  const handleMobileChange = (e, setFieldValue) => {
    const input = e.target.value.replace(/[^\d]/g, ""); // Remove non-numeric characters
    if (input.length <= 10) {
      dispatch(setMobile(input)); // Update Redux state
      setFieldValue("Mobile", input); // Update Formik state
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(sendOtp(values.Mobile));
    setSubmitting(false);
  };

  const handleBackClick = () => {
    dispatch(resetMobile(Mobile));
  };

  const handleEditClick = () => {
    dispatch(editMobile(Mobile));
  };

  return (
    <>
      <div className="LoginContainer">
        {isPhone ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: 6,
              paddingBottom: 0,
            }}
          >
            <p className="head-xs head-black mb-32">Login</p>

            <Formik
              initialValues={{ Mobile: Mobile || "" }}
              validationSchema={LoginSchema}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {({ errors, touched, isSubmitting, setFieldValue }) => (
                <Form
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Field
                    as={TextField}
                    name="Mobile"
                    label="Registered Mobile Number"
                    variant="outlined"
                    fullWidth
                    className="mb-2"
                    margin="normal"
                    value={Mobile}
                    onChange={(e) => handleMobileChange(e, setFieldValue)}
                    error={(touched.Mobile && Boolean(errors.Mobile)) || error}
                    helperText={<ErrorMessage name="Mobile" />}
                  />

                  {error && (
                    <Typography
                      color="error"
                      sx={{
                        color: "#d32f2f", // Error color
                        fontWeight: 400,
                        fontSize: "0.75rem",
                        lineHeight: 1.66,
                        letterSpacing: "0.03333em",
                        textAlign: "left",
                        marginTop: "0.75rem",
                        marginRight: "14px",
                        marginBottom: "0",
                        marginLeft: "1px",
                      }}
                    >
                      {error}
                    </Typography>
                  )}
                  <Button
                    variant="contained"
                    fullWidth
                    disabled={isSubmitting || loading}
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor: "#104685",
                      color: "white",
                      borderRadius: "25px",
                      paddingY: "12px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#083962",
                      },
                    }}
                    type="submit"
                  >
                    Login using OTP
                  </Button>
                </Form>
              )}
            </Formik>
            {/* <div className="separator-text text-center mb-28">- OR -</div> */}
            <Divider
              sx={{
                width: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                margin: "0 auto",
                mb: 3,
              }}
            >
              OR
            </Divider>

            <p className="separator-text text-center mb-28">
              Don’t have an account?
            </p>
            <MuiButton
              // onClick={handleSignUpClick}
              name="Sign Up"
              variant="outlined"
              sx={{
                marginBottom: "32px",
                borderRadius: "100px",
                color: "brand-500",
                borderColor: "brand-200",
              }}
            />
            <p className="text-center getHelpContainer mb-28">
              <span>Having trouble logging in? </span>
              <a href="#" className="getHelp">
                Get Help
              </a>
            </p>
          </Box>
        ) : (
          <OtpForm />
        )}
        <div className="login-footer">
          <span>powered by </span>
          <img src={DigitalIndia} alt="DigitalIndia" />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
