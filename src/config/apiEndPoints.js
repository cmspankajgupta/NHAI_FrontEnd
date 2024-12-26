import axiosInstance from "./axiosConfig";

export const Login = async(payload)=>{ 
    return await axiosInstance.post(
    'v3/24367bc1-d423-46f6-8159-d678c33c706e', //success
    //`envConfig.API_BASE_URL`
    // 'v3/d2d663f3-924b-4c66-ae8c-4fb3e96b75e', //error
    payload
  );}