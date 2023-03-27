import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error('Something was wrong!');
      return thunkAPI.rejectWithValue(error.emessage);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      toast.info(`${response.data.name} add in contact list`);
      return response.data;
    } catch (error) {
      toast.error('Something was wrong!');
      return thunkAPI.rejectWithValue(error.emessage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      toast.info(`${response.data.name} removed from contact list`);
      return response.data;
    } catch (error) {
      toast.error('Something was wrong!');
      return thunkAPI.rejectWithValue(error.emessage);
    }
  }
);