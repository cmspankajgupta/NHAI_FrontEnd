import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching API data
export const fetchData = createAsyncThunk(
  'https://run.mocky.io/v3/fa1f3cb1-214d-48a7-98b9-491d92a445d4',
  async (endpoint, { rejectWithValue }) => {
    try {
      const response = await axios.get(endpoint);
      return response.data; // Return the data as payload
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Create slice
const signUpSlice = createSlice({
  name: 'signUpApi',
  initialState: {
    sapId: "",
    data: [],          // To store API data
    loading: false,      // To handle loading state
    error: null,         // To handle error state
  },
  reducers: {
    clearData: (state) => {
        state.data = null;
        state.error = null;
        state.loading = false;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default signUpSlice.reducer;
