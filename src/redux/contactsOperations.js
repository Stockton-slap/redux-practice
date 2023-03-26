import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (arg, thunkAPI) => {
    try {
      const res = axios.post('/contacts', arg);

      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
