import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../../redux/contacts/operations';
import { logOut } from '../../redux/auth/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filters: {
    name: '',
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.items = action.payload;  
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.items = [action.payload, ...state.items];
      })
      .addCase(addContact.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(logOut.fulfilled, (state) => { 
        state.items = [];
      });
  },
});

export const contactsReducer = contactsSlice.reducer;