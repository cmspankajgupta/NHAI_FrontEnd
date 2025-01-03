import { configureStore } from '@reduxjs/toolkit';
import loginReducer from "./slices/loginSlice";
import fetchReducer from './slices/fetchSlice';
import authReducer from './slices/authSlice';
import signUpReducer from './slices/signUpSlice';
import accessManagementSlice from './slices/accessManagementSlice';


const store = configureStore({
  reducer: {
    login: loginReducer,
    fetch: fetchReducer,
    auth: authReducer,
    signUp: signUpReducer,
    accessManagement: accessManagementSlice
  },
});

export default store;
