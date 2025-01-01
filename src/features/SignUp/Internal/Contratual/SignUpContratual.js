import React from "react";
import MuiButton from "../../../../components/Button/MuiButton";
import {
  acceptInvite,
  setInviteAccepted,
} from "../../../../store/slices/signUpSlice";
import { useDispatch } from "react-redux";

export default function SignUpContratual({mobile,...props}) {
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    try {
      // dispatch(setSapId(values.sapId));
      const res = await dispatch(acceptInvite());
      if (res.payload?.success) {
        dispatch(setInviteAccepted(true));
      } else {
        console.log("Invite accept failed");
      }
    } catch (error) {
      console.error("Invite accept error:", error);
    }
  };
  return (
    <>
      <div className="cont-form-container">
        <h3 className="body-l font-bold mb-28">
          You have been invited to Join NHAI DataLake 3.0
        </h3>
        <p className="body-xs font-regular mb-28 gray-800">
          We need to verify your mobile number as part of the registration
          process
        </p>
        <p className="body-xxs font-regular mb-14">Mobile Number</p>
        <p className="body-s font-medium mb-32">+91 {mobile}</p>
        <MuiButton
          type="submit"
          name="Verify Email"
          variant="contained"
          fullWidth
          sx={{
            marginBottom: "1.75rem",
            background: `var(--brand-500)`,
            borderRadius: "6.25rem",
            fontWeight: `var(--font-medium)`,
          }}
          onClick={handleSubmit}
        />
      </div>
    </>
  );
}
