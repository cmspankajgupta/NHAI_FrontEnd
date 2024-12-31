import axiosInstance from "./axiosConfig";

export const Login = async (payload) => {
  return await axiosInstance.post(
    "/3daecfc6-6473-4794-ad0b-4c8ef29f314c",
    payload
  );
};
export const verifyOtpPerLogin = async (payload) => {
  return await axiosInstance.post(
    "/81178c38-21d3-4c6d-802f-0f3007554b51",
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
    "/3daecfc6-6473-4794-ad0b-4c8ef29f314c",
    payload
  );
};
export const verifyOtp = async (payload) => {
  return await axiosInstance.post(
    "/81178c38-21d3-4c6d-802f-0f3007554b51",
    payload
  );
};
