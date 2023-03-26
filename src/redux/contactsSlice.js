import { createSlice } from '@reduxjs/toolkit';
import { addContact } from './contactsOperations';

const initialState = { contacts: [], isLoading: false, error: null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [addContact.fulfilled](state, action) {
      console.log(state);
      console.log(action);
    },
    [addContact.rejected](state, action) {
      console.log(state);
      console.log(action);
    },
    [addContact.pending](state, action) {},
  },
});

export const contactsReducer = contactsSlice.reducer;
