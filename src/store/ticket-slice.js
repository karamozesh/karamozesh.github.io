import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { API_GET_USER_TICKETS } from '../api/configAPI';
import axios from 'axios';

const initialState = {
  tikets: [],
};

export const getUserTickets = createAsyncThunk(
  'tickets/getUserTickets',
  async (user_token, { dispatch }) => {
    const response = await axios.get(
      API_GET_USER_TICKETS,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${user_token}`,
        },
      },
    );

    const tickets = await response.data;

    dispatch(tickets);
  },
);

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    setTickets(state, action) {
      state.tikets = action.payload;
    },
  },
});
