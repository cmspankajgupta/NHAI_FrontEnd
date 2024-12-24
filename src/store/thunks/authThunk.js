import { setSentOtp, setError, setCountdown } from '../slices/loginSlice';

export const sendOtp = (phoneNumber) => async (dispatch) => {
  try {
    console.log('Sending OTP to', phoneNumber);
    dispatch(setSentOtp(true));
    dispatch(setCountdown(60));
  } catch (error) {
    dispatch(setError('Failed to send OTP'));
  }
};

export const startCountdown = () => async (dispatch) => {
  let timeLeft = 60;
  const interval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(interval);
      dispatch(setCountdown(0));
    } else {
      dispatch(setCountdown(timeLeft));
      timeLeft--;
    }
  }, 1000);
};
