import axiosInstance from "./axiosConfig";

export const Login = async (payload) => {
  return await axiosInstance.post(
    "/af89ce6c-2259-437e-8580-b28a2ef2d81e",
    payload
  );
};
export const verifyOtpPerLogin = async (payload) => {
  return await axiosInstance.post(
    "/be5b7226-3854-4fe0-ab22-8032bf7bfd44",
    payload
  );
};
export const verifySapId = async (payload) => {
  return await axiosInstance.post(
    "/c53b07ef-2bf9-4fa5-9a3b-453de64b738d",
    payload
  );
};

export const sendOtp = async (payload) => {
  return await axiosInstance.post(
    "/ccb5c639-b75d-4df9-a190-f49d78a5cfdc",
    payload
  );
};
export const verifyOtp = async (payload) => {
  return await axiosInstance.post(
    "/be5b7226-3854-4fe0-ab22-8032bf7bfd44",
    payload
  );
};
