import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  sendOtp as sendOtpAPI,
  verifyOtp as verifyOtpAPI,
  verifySapId as verifySapIdAPI,
} from "../../config/apiEndPoints";
import envConfig from "../../config/envConfig";

const initialState = {
  sapId: "",
  data: null,
  loading: false,
  error: null,
  mobile: "",
  otp: "",
  isSapVerified: false,
  otpSent: false,
  inviteAccepted: false,
  inviteDone: false,
  completeReg: false,
  regConsent: false,
  completeRegVerify: false,
  regSuccessfull: false,
  isDigiAuthCompleted: false,
};

export const verifySapId = createAsyncThunk(
  "signup/verifySapId",
  async (sapId, { rejectWithValue }) => {
    try {
      const response = await verifySapIdAPI({ sapId: sapId });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to verify"
      );
    }
  }
);

export const acceptInvite = createAsyncThunk(
  "signup/acceptInvite",
  async (mobile, { rejectWithValue }) => {
    try {
      const response = await sendOtpAPI({
        mobile_number: mobile,
        device_id: "device-" + Math.random().toString(36).substr(2, 9),
        client_id: envConfig.CLIENT_ID,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to send OTP"
      );
    }
  }
);

export const sendOtp = createAsyncThunk(
  "signUp/sendOtp",
  async (mobile, { rejectWithValue }) => {
    try {
      const response = await sendOtpAPI({
        mobile_number: mobile,
        device_id: "device-" + Math.random().toString(36).substr(2, 9),
        client_id: envConfig.CLIENT_ID,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to send OTP"
      );
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "signUp/verifyOtp",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { mobile, otp } = getState().signUp;

      const response = await verifyOtpAPI({
        mobile_number: mobile,
        otp: otp,
        device_id: "device-" + Math.random().toString(36).substr(2, 9),
        client_id: envConfig.CLIENT_ID,
      });
      return response.data; // Response from the server (e.g., user details or a token)
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to verify OTP"
      );
    }
  }
);

export const completeRegDigi = createAsyncThunk(
  "signUp/completeRegDigi",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { email, contract_ID } = getState().signUp;

      // const response = await verifyOtpAPI({
      //   // mobile_number: mobile,
      //   // otp: otp,
      //   device_id: "device-" + Math.random().toString(36).substr(2, 9),
      //   client_id: envConfig.CLIENT_ID,
      // });
      return {
        success: true,
        email: email,
        contract_ID: contract_ID,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to verify OTP"
      );
    }
  }
);

export const acceptConsent = createAsyncThunk(
  "signUp/acceptConsent",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { terms, getUpdates } = getState().signUp;

      // const response = await verifyOtpAPI({
      //   // mobile_number: mobile,
      //   // otp: otp,
      //   device_id: "device-" + Math.random().toString(36).substr(2, 9),
      //   client_id: envConfig.CLIENT_ID,
      // });
      return {
        success: true,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to verify OTP"
      );
    }
  }
);

// Create slice
const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setSapId(state, action) {
      state.sapId = action.payload;
    },
    setIsSapVerified(state, action) {
      state.isSapVerified = action.payload;
      state.error = "";
    },
    setOtpSent(state, action) {
      state.otpSent = action.payload;
      state.error = "";
    },
    setInviteAccepted(state, action) {
      state.otpSent = action.payload;
      state.inviteAccepted = action.payload;
    },
    setInviteDone(state, action) {
      state.inviteDone = action.payload;
    },
    setCompleteReg(state, action) {
      state.completeReg = action.payload;
    },
    setRegConsent(state, action) {
      state.regConsent = action.payload;
    },
    setCompleteRegVerify(state, action) {
      state.completeRegVerify = action.payload;
    },
    setRegSuccessfull(state, action) {
      state.regSuccessfull = action.payload;
    },
    setIsDigiAuthCompleted(state, action) {
      state.isDigiAuthCompleted = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifySapId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifySapId.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload?.data;
      })
      .addCase(verifySapId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otp = "";
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(acceptInvite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(acceptInvite.fulfilled, (state, action) => {
        state.loading = false;
        state.otp = "";
      })
      .addCase(acceptInvite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otp = "";
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(completeRegDigi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(completeRegDigi.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(completeRegDigi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setIsSapVerified,
  setSapId,
  setOtpSent,
  setInviteAccepted,
  setInviteDone,
  setCompleteReg,
  setRegConsent,
  setCompleteRegVerify,
  setRegSuccessfull,
  setIsDigiAuthCompleted,
} = signUpSlice.actions;

export default signUpSlice.reducer;
