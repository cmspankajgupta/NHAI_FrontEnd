import React, { useState } from "react";
import MuiModal from "../../../../components/Modal/MuiModal";
import MuiInput from "../../../../components/Input/MuiInput";
import MuiButton from "../../../../components/Button/MuiButton";
import verified from "../../../../assets/images/logo/verified.svg";
import MuiCheckbox from "../../../../components/Checkbox/MuiCheckbox";
import check_circle from "../../../../assets/images/logo/check_circle.svg";

export default function ModalContractComReg() {
  return (
    <>
      <MuiModal
        title={`${false? "Complete Registration" : ""}`}
        content={`${false ? "Enter required details to complete your registration" : ""}`}
      >
       {false && <div className="details-text mt-32 mb-14">
          <ul className="cardList">
            <li className="row listItem body-xs font-regular">
              <span className="col gray-700">Full Name</span>
              <span className="col font-medium gray-800">Nitin Kumar</span>
            </li>
            <li className="row listItem body-xs font-regular">
              <span className="col gray-700">Date of Birth</span>
              <span className="col font-medium gray-800">08/11/1990</span>
            </li>
            <li className="row listItem body-xs font-regular">
              <span className="col gray-700">Gender</span>
              <span className="col font-medium gray-800">Male</span>
            </li>
            <li className="row listItem body-xs font-regular">
              <span className="col gray-700">Address</span>
              <span className="col font-medium gray-800">
                H-108, Roorkee, Uttarakhand
              </span>
            </li>
          </ul>
        </div>}

        {false &&<section className="secValidateEmail">
          <MuiInput
            type="text"
            variant="outlined"
            name="temp/contract_ID"
            label="Temp/Contract ID"
            fullWidth
            sx={{
              mb: "2rem",
              mt: "2rem",
            }}
            autoFocus={true}
          />

          <MuiInput
            variant="outlined"
            name="email"
            label="Email"
            type="text"
            fullWidth
            sx={{
              mb: "2rem",
            }}
          />
          <MuiButton
            type="submit"
            name="Verify Your Email ID"
            variant="contained"
            fullWidth
            sx={{
              background: `var(--brand-500)`,
              borderRadius: "6.25rem",
              fontWeight: `var(--font-medium)`,
            }}
          />
        </section>}

        { true && <section className="secEmailOTPVerify">
            <p className="body-m font-bold mb-14 gray-800">Verify Email Id</p>
            <p className="body-xs font-regular gray-800">OTP has been sent to</p>
            <p className="body-s font-medium gray-800">nitin.kumar@gmail.com</p>
            <p className="body-xs font-regular gray-800 mt-32">Didn’t receive the OTP? <span className="gray-600">Resend in 00:21</span></p>
            <MuiButton
              type="submit"
              name="Verify Your Email ID"
              variant="contained"
              fullWidth
              sx={{
                // marginBottom: "1.75rem",
                background: `var(--brand-500)`,
                borderRadius: "6.25rem",
                fontWeight: `var(--font-medium)`,
                mt: 4,
              }}
            />
        </section>}

        
       {false && <section className="seCompleteReg">
            <div className="success-card mt-32 mb-14 body-xs row mb-32">
              <p className="col gray-700 font-regular ">
                Email
                <br />
                <span className="font-medium gray-800">nitin.kumar@gmail.com</span>
              </p>
              <p className="col font-medium gray-800 text-right center-vrt-rgt">
                <img src={verified} alt="Verified" /> VERIFIED
              </p>
            </div>
       
            <MuiCheckbox  label="Get updates on WhatsApp" className="body-xxs"/>
            <MuiCheckbox  label="I agree to the Terms & Conditions and Privacy Policy"/>
            <MuiButton
              type="submit"
              name="Complete Registration"
              variant="contained"
              fullWidth
              sx={{
                // marginBottom: "1.75rem",
                background: `var(--brand-500)`,
                borderRadius: "6.25rem",
                fontWeight: `var(--font-medium)`,
                mt: 4,
              }}
            />
        </section>}
       {false && <section className="sec-success">
          <img
            src={check_circle}
            alt="Check Icon"
            style={{
              width: "5rem",
              marginLeft: "-.5rem",
              marginBottom: "2.5rem",
            }}
          />
          <p className="body-m font-bold mb-14">Registration Successful!</p>
          <p className="body-xs font-regular">
            You are now a verified user of NHAI
          </p>
        </section>}
      </MuiModal>
    </>
  );
}
