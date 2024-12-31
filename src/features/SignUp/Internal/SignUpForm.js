import "./SignUpForm.scss";
import { Typography } from "@mui/material";
import MuiInput from "../../../components/Input/MuiInput";
import MuiButton from "../../../components/Button/MuiButton";
import ArrowBack from "../../../assets/images/logo/arrow_back.svg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  setIsSapVerified,
  setSapId,
  verifySapId,
} from "../../../store/slices/signUpSlice";

const signUpSchema = Yup.object().shape({
  sapId: Yup.string()
    .matches(/^\d{6,10}$/, "Enter valid SAP ID") /*{/^EMP\d{6,10}$/}*/
    .required("SAP ID is required"),
});

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      sapId: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      try {
        dispatch(setSapId(values.sapId));
        const res = await dispatch(verifySapId(values));
        if (res.payload?.success) {
          dispatch(setIsSapVerified(true));
        } else {
          console.log("SAP ID verification failed");
        }
      } catch (error) {
        console.error("SAP ID verification error:", error);
      }
    },
  });
  return (
    <>
      <img
        className="cursor-pointer"
        src={ArrowBack}
        alt="Arrow Back"
        style={{ width: "2rem", marginBottom: "0.875rem" }}
        onClick={() => navigate("/login")}
      />
      <p className="head-xs head-black mb-32">Sign Up</p>
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "100%", display: "flex", flexDirection: "column" }}
      >
        <MuiInput
          variant="outlined"
          name="sapId"
          label="SAP/Employee ID"
          className="mb-2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sapId}
          type="text"
          error={formik.touched?.sapId && Boolean(formik.errors?.sapId)}
          errorText={formik.errors.sapId}
          // required
          sx={{
            mb: "0.4rem",
          }}
        />
        {/* {formik?.touched?.sapId && formik?.errors?.sapId && (
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
        )} */}
        <p className="text-left getHelpContainer mb-28 mt-28">
          <a href="#" className="getHelp">
            I don’t have a SAP/Employee ID
          </a>
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
            fontWeight: `var(--font-medium)`,
          }}
        />
      </form>
    </>
  );
};

export default SignupForm;
