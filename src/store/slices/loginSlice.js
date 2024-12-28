import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../config/axiosConfig';
import DOMPurify from 'dompurify';
import { validatePhoneNumber } from '../../utils/inputUtils';
import envConfig from "../../config/envConfig"
import { Login, verifyOtpPerLogin } from '../../config/apiEndPoints';


const sanitizeInput = (input) => {
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
};

const initialState = {
  Mobile: '',
  otp: "", // Initialize otp as an array
  isPhone: true,
  loading: false,
  loadingVerify: false,
  error: null,
  otpVerified: false,
  isAuthenticated:false,
  isResend: false
};

export const sendOtp = createAsyncThunk( 
  'login/sendOtp',
  async (Mobile, { rejectWithValue }) => {
    try {
      const sanitizedPhoneNumber = sanitizeInput(Mobile);
      if (!validatePhoneNumber(sanitizedPhoneNumber)) {
        throw new Error('Invalid phone number');
      }
      const response = await Login({ mobile_number: sanitizedPhoneNumber,device_id:'device-' + Math.random().toString(36).substr(2, 9),client_id:envConfig.CLIENT_ID })
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || 'Failed to send OTP');
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'login/verifyOtp',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { Mobile, otp } = getState().login;
      const sanitizedPhoneNumber = sanitizeInput(Mobile);
      const sanitizedOtp = otp; // Join the OTP array into a string

      const response = await verifyOtpPerLogin({
        // const response = await axiosInstance.post('v3/3a143800-767b-413b-a4aa-05f7b69b92d', {
        mobile_number: sanitizedPhoneNumber,
        otp: sanitizedOtp
        ,device_id:'device-' + Math.random().toString(36).substr(2, 9),client_id:envConfig.CLIENT_ID 
      });

      return response.data; // Response from the server (e.g., user details or a token)
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || 'Failed to verify OTP');
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setMobile(state, action) {
      state.Mobile = action.payload;
      state.isPhone = true;
      state.error = "";
    },
    setOtp: (state, action) => {
      state.otp = action.payload; // Store OTP as an array
    },
    resetMobile(state,action) {
      state.Mobile = action.payload;
      state.isPhone = true;
      state.otpVerified = false;
    },
    editMobile(state,action) {
      state.isPhone = true;
      state.Mobile = action.payload;
    },
    resetError(state,action){
      state.error = null;
    },
    resendOtp :(state,action)=>{
      state.isResend = false;
    },
    resetOtp:(state,action)=>{
      state.otp= new Array(5).fill("");
    },
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.isPhone = false;
        state.otp= "" ;
        state.isResend = true;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(verifyOtp.pending, (state) => {
        state.loadingVerify = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state,action) => {
        state.loadingVerify = false;
        state.otpVerified = true; 
        const token = action.payload.token; 
        localStorage.setItem('token', token);
        state.isAuthenticated = true;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loadingVerify = false;
        state.error = action.payload;
      });
  },
});

export const { setMobile, resetMobile, editMobile, setOtp, resetError,resendOtp, resetOtp,setAuthenticated } = loginSlice.actions;

export default loginSlice.reducer;
