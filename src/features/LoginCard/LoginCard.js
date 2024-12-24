import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, Card, CardContent, Typography, TextField, Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector, useDispatch } from "react-redux";
import { setMobile, sendOtp, resetMobile, editMobile } from "../../store/slices/loginSlice";
import OtpBox from "../OtpBox/OtpBox";
import { LoginSchema } from "./LoginSchema";

const LoginCard = () => {
  const dispatch = useDispatch();
  const { Mobile, isPhone, loading, error } = useSelector((state) => state.login);

  // Handle Mobile number change: restrict to 10 digits and prevent invalid input
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
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          width: "100%",
          maxWidth: "350px",
          margin: "auto",
          mt: "70px",
          padding: { xs: 2, sm: 3 },
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          borderRadius: "16px",
        }}
      >
        <CardContent>
          {isPhone ? (
            <>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: 900,
                  textAlign: "center",
                  marginBottom: "16px",
                }}
              >
                LOGIN
              </Typography>

              <Formik
                initialValues={{ Mobile: Mobile || "" }}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                {({ errors, touched, isSubmitting, setFieldValue }) => (
                  <Form>
                    <Field
                      as={TextField}
                      name="Mobile"
                      label="Registered Mobile Number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={Mobile}
                      onChange={(e) => handleMobileChange(e, setFieldValue)}
                      error={touched.Mobile && Boolean(errors.Mobile) || error}
                      helperText={<ErrorMessage name="Mobile" />}
                    />
                     {error && (
                      <Typography
  color="error"
  sx={{
    color: '#d32f2f',  // Error color
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
    textAlign: 'left',
    marginTop: '3px',
    marginRight: '14px',
    marginBottom: '0',
    marginLeft: '14px',
  }}
>
  {error} {/* Display API error */}
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
            </>
          ) : (
            <>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <ArrowBackIcon
                  sx={{ cursor: "pointer", marginRight: "8px" }}
                  onClick={handleBackClick}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Enter OTP
                </Typography>
              </Box>
              <OtpBox handleEdit={handleEditClick} numInputs={5} />
            </>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default LoginCard;
