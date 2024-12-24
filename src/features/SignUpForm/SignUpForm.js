import "./SignUpForm.scss";
import { Box } from "@mui/material";
import MuiInput from "../../componetns/Input/MuiInput";
import MuiButton from "../../componetns/Button/MuiButton";
import DigitalIndia from "../../assests/DigitalIndia.svg";
import ArrowBack from '../../assests/arrow_back.svg';
const Signup = () => {
  return (
    <div className="LoginContainer">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: '3rem',
          paddingBottom: 0,
        }}
      >
        <img src={ArrowBack} alt="Arrow Back" style={{width: '2rem', marginBottom: '0.875rem'}}/>
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
              fontWeight: `var(--body-text-medium)`
            }}
          />
        </form>     
      </Box>
      <div className="login-footer">
            <span>powered by </span>
            <img src={DigitalIndia} alt="DigitalIndia" />
        </div>
    </div>
  );
};

export default Signup;
