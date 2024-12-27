import { Box, Divider, Avatar } from "@mui/material";
import React from "react";
import FormFooter from "../../components/FormFooter/FormFooter";
import { useNavigate } from "react-router-dom";
import ArrowBack from "../../assets/images/logo/arrow_back.svg";

export default function SignUpDetailsCard() {
  const navigate = useNavigate();
  return (
    <div className="signUpContainer">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: 0,
        }}
      >
         <Box sx={{ padding: 4, pb: 2 }}>
            <img className="cursor-pointer"
              src={ArrowBack}
              alt="Arrow Back"
              style={{ width: "2rem", marginBottom: "0.875rem" }}
              onClick={() => navigate("/signup")}
            />
            <p className="head-xs head-black">Sign Up</p>
            <p className="body-xs">We have found an account with SAP ID/Employee ID 76898763</p>
          </Box>
          <Box sx={{ mr: 4, ml: 4, mb: 4, borderRadius: 2, backgroundColor: `var(--signup-form-card-bg)` }}>
            <Box className="row" component="div" sx={{ p: 2 }}>
              <Avatar alt="Karan Singh" src="/static/images/avatar/1.jpg" />
              <Box component="div" className="col">
                <h3 className="font-bold body-m">Karan Singh</h3>
                <h4 className="font-regular gray-800 body-xxs">Deputy Manager</h4>
              </Box>
            </Box>
            <Divider
              component="div"
              orientation="horizontal"
              role="presentation"
            />
            <ul className="cardList">
                <li className="listItem body-xxs row">
                  <span className="gray-700 col">SAP ID</span><span className="col gray-800 font-medium">76898763</span>
                </li>
                <li className="listItem body-xxs row">
                  <span className="gray-700 col">Mobile Number</span><span className="col gray-800 font-medium">+91 8764327840</span>
                </li>
                <li className="listItem body-xxs row">
                  <span className="gray-700 col">Date of Birth</span><span className="col gray-800 font-medium">08/11/1990</span>
                </li>
                <li className="listItem body-xxs row">
                  <span className="gray-700 col">Email ID</span><span className="col gray-800 font-medium">karansingh@gmail.com</span>
                </li>
                <li className="listItem body-xxs row">
                  <span className="gray-700 col">Office Location</span><span className="col gray-800 font-medium">NHAI, Dwarka, New Delhi</span>
                </li>
            </ul>
          </Box>
      </Box>
      <FormFooter />
    </div>
  );
}
