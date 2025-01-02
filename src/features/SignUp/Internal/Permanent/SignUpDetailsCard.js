import { Box, Divider, Avatar } from "@mui/material";
import React from "react";
import ArrowBack from "../../../../assets/images/logo/arrow_back.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  sendOtp,
  setIsSapVerified,
  setOtpSent,
} from "../../../../store/slices/signUpSlice";
import MuiButton from "../../../../components/Button/MuiButton";
import dayjs from "dayjs";

export default function SignUpDetailsCard() {
  const { data, sapId } = useSelector((state) => state.signUp);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(sendOtp(data?.mobile));
      if (res.payload?.success) {
        dispatch(setOtpSent(true));
      } else {
        console.log("request failed");
      }
    } catch (error) {
      console.error("otp sent error:", error);
    }
  };
  return (
    <>
      <img
        className="cursor-pointer"
        src={ArrowBack}
        alt="Arrow Back"
        style={{ width: "2rem", marginBottom: "0.875rem" }}
        onClick={() => dispatch(setIsSapVerified(false))}
      />
      <p className="head-xs head-black">Sign Up</p>
      <p className="body-xs">
        We have found an account with SAP ID/Employee ID {sapId}
      </p>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            my: 4,
            borderRadius: 2,
            backgroundColor: `var(--signup-form-card-bg)`,
          }}
        >
          <Box className="row" component="div" sx={{ p: 2 }}>
            <Avatar alt="Karan Singh" src="/static/images/avatar/1.jpg" />
            <Box component="div" className="col">
              <h3 className="font-bold body-m">{data?.name}</h3>
              <h4 className="font-regular gray-800 body-xxs">{data?.designation}</h4>
            </Box>
          </Box>
          <Divider
            component="div"
            orientation="horizontal"
            role="presentation"
          />
          <ul className="cardList">
            <li className="listItem body-xxs row">
              <span className="gray-700 col">SAP ID</span>
              <span className="col gray-800 font-medium">{sapId}</span>
            </li>
            <li className="listItem body-xxs row">
              <span className="gray-700 col">Mobile Number</span>
              <span className="col gray-800 font-medium">
                {data?.mobile_number ? `+91 ${data?.mobile_number}` : null}
              </span>
            </li>
            <li className="listItem body-xxs row">
              <span className="gray-700 col">Date of Birth</span>
              <span className="col gray-800 font-medium">{dayjs(data?.date_of_birth).format('DD/MM/YYYY')}</span>
            </li>
            <li className="listItem body-xxs row">
              <span className="gray-700 col">Email ID</span>
              <span className="col gray-800 font-medium">{data?.email_id}</span>
            </li>
            <li className="listItem body-xxs row">
              <span className="gray-700 col">Office Location</span>
              <span className="col gray-800 font-medium">{data?.office_location}</span>
            </li>
          </ul>
        </Box>
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
}
