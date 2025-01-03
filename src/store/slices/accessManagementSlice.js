import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openConfirmationModal: false,
  openCreateModal: false,
};

const accessManagementSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateConfirmModalState: (state, action) => {
      state.openConfirmationModal = action?.payload;
    },
    updateCreateModalState: (state, action) => {
      state.openCreateModal = action?.payload;
    },
  },
});

export const { updateConfirmModalState, updateCreateModalState } = accessManagementSlice.actions;

export default accessManagementSlice.reducer;
