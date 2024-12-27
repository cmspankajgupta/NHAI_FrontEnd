import "./SignUpForm.scss";
import { Box } from "@mui/material";
import MuiInput from "../../components/Input/MuiInput";
import MuiButton from "../../components/Button/MuiButton";
import ArrowBack from '../../assets/images/logo/arrow_back.svg';
import FormFooter from "../../components/FormFooter/FormFooter";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
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
        <img className="cursor-pointer" src={ArrowBack} alt="Arrow Back" style={{width: '2rem', marginBottom: '0.875rem'}} onClick={()=> navigate("/login")}/>
        <p className="head-xs head-black mb-32">Sign Up</p>
        <form
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <MuiInput
            variant="outlined"
            label="SAP/Employee ID"
            className="mb-2"
            type="tel"
            required
            sx={{
              marginBottom: "2.25rem",
              height: "3.125rem",
            }}
          />
          <p className="text-left getHelpContainer mb-28">
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
