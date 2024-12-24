import { configureStore } from '@reduxjs/toolkit';
import loginReducer from "./slices/loginSlice";
import fetchReducer from './slices/fetchSlice';
import authReducer from './slices/authSlice';


const store = configureStore({
  reducer: {
    login: loginReducer,
    fetch: fetchReducer,
    auth: authReducer,
  },
});

export default store;
