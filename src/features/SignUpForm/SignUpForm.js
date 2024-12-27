import "./SignUpForm.scss";
import { Box, Typography } from "@mui/material";
import MuiInput from "../../components/Input/MuiInput";
import MuiButton from "../../components/Button/MuiButton";
import ArrowBack from '../../assets/images/logo/arrow_back.svg';
import FormFooter from "../../components/FormFooter/FormFooter";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  sapId: Yup.string()
    .matches(/^\d{7}$/, "Enter Valid SAP ID")
    .required("SAP ID is required")
})

const SignupForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      sapId: ""
    },
    validationSchema: signUpSchema,
    onSubmit : (values) => {

    }
  })
  return (
    <div className="signUpContainer">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: '3rem',
          paddingBottom: 0,
        }}
      >
        <img src={ArrowBack} alt="Arrow Back" style={{width: '2rem', marginBottom: '0.875rem'}} onClick={()=> navigate("/login")}/>
        <p className="head-xs head-black mb-32">Sign Up</p>
        <form onSubmit={formik.handleSubmit}
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <MuiInput
            variant="outlined"
            label="SAP/Employee ID"
            className="mb-2"
            onChange = {formik.handleChange('sapId')}
            onBlur = {formik.handleBlur('sapId')}
            value={formik.values.sapId}
            type="text"
            error={(formik?.touched?.sapId && Boolean(formik?.errors?.sapId)) || formik.errors.sapId}
            required
            sx={{
              marginBottom: "0.4rem",
              height: "3.125rem",
            }}
          />
          {formik?.touched?.sapId && formik?.errors?.sapId && (
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
                      {formik?.errors?.sapId}
                    </Typography>
                  )}
          <p className="text-left getHelpContainer mb-28 mt-28">
          <a href="#" className="getHelp">I don’t have a SAP/Employee ID</a>
        </p>  
          <MuiButton
            type="submit"
            name="Proceed"
            variant="contained"
            fullWidth
            sx={{
              marginBottom: "1.75rem",
              background: `var(--brand-500)`,
              borderRadius: "6.25rem",
              fontWeight: `var(--font-medium)`
            }}
          />
        </form>     
      </Box>      
      <FormFooter/>
    </div>
  );
};

export default SignupForm;
