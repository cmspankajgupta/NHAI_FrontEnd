import axiosInstance from "./axiosConfig";

export const Login = async (payload) => {
  return await axiosInstance.post(
    "/6037160c-0f6c-4598-97b7-33deabbe7798",
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
    "/9c0d1b55-e428-4a7b-bfff-e773bd172662",
    payload
  );
};

export const sendOtp = async (payload) => {
  return await axiosInstance.post(
    "/6037160c-0f6c-4598-97b7-33deabbe7798",
    payload
  );
};
export const verifyOtp = async (payload) => {
  return await axiosInstance.post(
    "/81178c38-21d3-4c6d-802f-0f3007554b51",
    payload
  );
};
