import { configureStore } from '@reduxjs/toolkit';
import loginReducer from "./slices/loginSlice";
import fetchReducer from './slices/fetchSlice';
import authReducer from './slices/authSlice';
import signUpReducer from './slices/signUpSlice';


const store = configureStore({
  reducer: {
    login: loginReducer,
    fetch: fetchReducer,
    auth: authReducer,
    signUpApi: signUpReducer,
  },
});

export default store;
