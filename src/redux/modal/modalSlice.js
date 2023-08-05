import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  selectedContact: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.isModalOpen = !state.isModalOpen;
      state.selectedContact = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
