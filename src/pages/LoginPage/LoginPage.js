import { Box } from "@mui/material";
import LoginForm from "../../features/LoginForm/LoginForm";
import FormFooter from "../../components/FormFooter/FormFooter";

function Login() {
  return (
    <div className="form-page-container">
      <div className="form-page">
        <div className="left-section ">
          <p className="formTitle">
            Welcome to<span className="head-black block">DataLake 3.0</span>
          </p>
        </div>
        <div className="right-section  mt-32">
          <div className="form-container">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "3rem",
                paddingBottom: 0,
              }}
            >            
              <LoginForm />
            </Box>
            <FormFooter/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
